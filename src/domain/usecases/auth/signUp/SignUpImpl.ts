import { ExceptionHandler } from "@/utils/ExceptionHandler";
import { SignUpUseCase, SignUpCaseReq, AuthUseCaseRes } from "./SignUpUseCase";
import { AuthRepository } from "@/data/repositories/auth/AuthRepository";
import { SignUpEntity } from "@/domain/entities/AuthEntity";
import { Result } from "@/utils/Result";

export class SignUpImplUseCase implements SignUpUseCase {
  constructor(private authRepository: AuthRepository) {}

  @ExceptionHandler()
  async execute(payload: SignUpCaseReq): AuthUseCaseRes {
    const validationResult = SignUpEntity.safeParse(payload);

    if (!validationResult.success) {
      return Result.Error({
        code: "SERIALIZATION",
        payload: validationResult.error.flatten().fieldErrors,
      });
    }

    const { result } = await this.authRepository.signUp(validationResult.data);

    if (result.type === "ERROR") {
      return Result.Error({ code: "UNKNOWN" });
    }

    return Result.Success(result.data);
  }
}
