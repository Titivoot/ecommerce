import prisma from "@/prisma/prisma";

export default defineEventHandler((event) => {
  const userId = getRouterParam(event, "id");
  const user = prisma.user.findFirst({
    where: {
      id: Number(userId),
    },
  });
  return user;
});
