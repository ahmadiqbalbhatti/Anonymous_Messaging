import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Usernane must be at least 2 characters")
  .max(20, "Usernane must not more than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Usernane must not contain special characters");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 character" }),
});
