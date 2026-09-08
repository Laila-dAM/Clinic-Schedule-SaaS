import prisma from "../src/prisma";
async function main() {
  console.log("Seeding roles...");

  const roles = [
    "owner",
    "admin",
    "manager",
    "professional",
    "receptionist",
    "financial",
  ];

  for (const name of roles) {
    await prisma.role.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  console.log("Seeding permissions...");

  const permissions = [
    "patients.read",
    "patients.create",
    "patients.update",
    "patients.delete",

    "appointments.read",
    "appointments.create",
    "appointments.update",
    "appointments.delete",

    "users.read",
    "users.create",
    "users.update",
    "users.delete",
  ];

  for (const name of permissions) {
    await prisma.permission.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  console.log("Assigning permissions to roles...");

  const rolePermissions: Record<string, string[]> = {
    owner: permissions,

    admin: permissions,

    manager: [
      "patients.read",
      "patients.create",
      "patients.update",
      "patients.delete",
      "appointments.read",
      "appointments.create",
      "appointments.update",
      "appointments.delete",
      "users.read",
    ],

    professional: [
      "patients.read",
      "patients.update",
      "appointments.read",
      "appointments.create",
      "appointments.update",
    ],

    receptionist: [
      "patients.read",
      "patients.create",
      "patients.update",
      "appointments.read",
      "appointments.create",
      "appointments.update",
    ],

    financial: [
      "patients.read",
      "appointments.read",
    ],
  };

  for (const [roleName, permissionNames] of Object.entries(
    rolePermissions
  )) {
    const role = await prisma.role.findUnique({
      where: { name: roleName },
    });

    if (!role) {
      throw new Error(`Role ${roleName} not found`);
    }

    for (const permissionName of permissionNames) {
      const permission = await prisma.permission.findUnique({
        where: { name: permissionName },
      });

      if (!permission) {
        throw new Error(
          `Permission ${permissionName} not found`
        );
      }

      await prisma.role.update({
        where: { id: role.id },
        data: {
          permissions: {
            connect: {
              id: permission.id,
            },
          },
        },
      });
    }
  }

  console.log("Linking existing users to roles...");

  const ownerRole = await prisma.role.findUnique({
    where: { name: "owner" },
  });

  if (!ownerRole) {
    throw new Error("Owner role not found");
  }

  await prisma.user.updateMany({
    where: {
      role: "owner",
      roleId: null,
    },
    data: {
      roleId: ownerRole.id,
    },
  });

  console.log("Users linked successfully.");
  console.log("Permissions assigned successfully.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });