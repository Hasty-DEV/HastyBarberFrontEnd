import { z } from "zod";

export const SignUpEntity = z.object({
  email: z.string().email().min(1),
  password: z.string().min(6),
});
export type SignUpEntity = z.infer<typeof SignUpEntity>;
