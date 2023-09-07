import prisma from "@/prisma/prisma";

export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, "id");

  const user = await prisma.user.findFirst({
    where: {
      id: Number(userId),
    },
  });

  if (!user) {
    throw createError({
      statusCode: 404,
      message: "Not Found",
    });
  }

  const deleteUser = await prisma.user.delete({
    where: {
      id: Number(userId),
    },
  });

  if (!deleteUser) {
    throw createError({
      statusCode: 500,
      message: "Delete User Failed",
    });
  }

  return;
});
