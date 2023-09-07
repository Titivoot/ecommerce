import prisma from "@/prisma/prisma";
import { z } from "zod";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const userId = getRouterParam(event, "id");
  const body = await readBody(event);

  let user = await prisma.user.findFirst({
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

  const UserValidator = z
    .object({
      password: z.string().min(8).nonempty(),
      newPassword: z.string().optional(),
      confirmNewPassword: z.string().optional(),
      first_name: z.string(),
      last_name: z.string(),
      telephone: z.string().min(10).max(14),
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
      message: "Passwords don't match",
      path: ["confirmNewPassword"],
    })
    .safeParse(body);

  if (!UserValidator.success) {
    throw createError({
      statusCode: 400,
      data: UserValidator.error.issues,
    });
  }

  const checkHash = await bcrypt.compare(body["password"], user.password);
  if (!checkHash) {
    throw createError({
      statusCode: 401,
      message: "Unauthorized",
    });
  }

  const updateUser = prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: {
      password: body["newPassword"]
        ? await bcrypt.hash(body["newPassword"], 12)
        : user.password,
      first_name: body["first_name"],
      last_name: body["last_name"],
      telephone: body["telephone"],
    },
  });

  if (!updateUser) {
    throw createError({
      statusCode: 500,
      message: "Update User Failed",
    });
  }

  return updateUser;
});
