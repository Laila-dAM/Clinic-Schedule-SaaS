import prisma from "../../prisma";
import bcrypt from "bcryptjs";

export async function register(
  name: string,
  email: string,
  password: string,
  clinicId: string
) {
  const ownerRole = await prisma.role.findUnique({
    where: {
      name: "owner",
    },
  });

  if (!ownerRole) {
    throw new Error("Owner role not found");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: "owner",
      roleId: ownerRole.id,
      clinicId,
    },
  });

  return user;
}

export async function login(
  email: string,
  password: string
) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const passwordMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordMatch) {
    throw new Error("Invalid password");
  }

  return user;
}