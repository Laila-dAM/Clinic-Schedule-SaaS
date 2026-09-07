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
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });