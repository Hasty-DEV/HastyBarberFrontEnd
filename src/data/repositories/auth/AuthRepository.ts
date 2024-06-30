import { DefaultResultError, Result } from "@/utils/Result";

export type SignUpReq = {
  email: string;
  password: string;
};

export type SignUpRes = Promise<
  Result<object, DefaultResultError | { code: "NOT_FOUND" }>
>;

export interface AuthRepository {
  signUp(req: SignUpReq): SignUpRes;
}
