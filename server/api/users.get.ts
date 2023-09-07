import prisma from "@/prisma/prisma";

export default defineEventHandler((event) => {
  const users = prisma.user.findMany({});

  return users;
});
