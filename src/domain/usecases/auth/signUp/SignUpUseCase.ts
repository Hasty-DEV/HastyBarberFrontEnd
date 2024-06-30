import { UseCase } from "@/utils/UseCase";
import { DefaultResultError, Result } from "@/utils/Result";

export type SignUpCaseReq = {
  email: string;
  password: string;
};
export type AuthUseCaseRes = Promise<
  Result<
    any,
    | {
        code: "SERIALIZATION";
        payload: Partial<Record<keyof SignUpCaseReq, string[]>>;
      }
    | DefaultResultError
  >
>;

export type SignUpUseCase = UseCase<SignUpCaseReq, AuthUseCaseRes>;
