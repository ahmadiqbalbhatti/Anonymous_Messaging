import { z } from "zod";
import { usernameValidation } from "./signUpSchema";

export const signInSchema = z.object({
  username: usernameValidation,
  password: z
    .string()
    .min(6, { message: "password must be at least 6 character" }),
});
