import * as z from "zod";

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string({ required_error: "Email is required" }).email(),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be atleast 6 characters"),
});
