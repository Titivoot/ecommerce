import prisma from "@/prisma/prisma";
import { z } from "zod";
import bcrypt from "bcrypt";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const UserValidator = z
    .object({
      username: z.string().min(5).max(20).nonempty(),
      password: z.string().min(8).nonempty(),
      confirmPassword: z.string(),
      first_name: z.string(),
      last_name: z.string(),
      telephone: z.string().min(10).max(14),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    })
    .safeParse(body);

  if (!UserValidator.success) {
    throw createError({
      statusCode: 400,
      data: UserValidator.error.issues,
    });
  }

  const user = prisma.user.create({
    data: {
      username: body["username"],
      password: await bcrypt.hash(body["password"], 12),
      first_name: body["first_name"],
      last_name: body["last_name"],
      telephone: body["telephone"],
    },
  });

  if (!user) {
    throw createError({
      statusCode: 500,
      message: "Create User Failed",
    });
  }

  return user;
});
