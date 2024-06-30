import { injectable, singleton } from "tsyringe";

import { ExceptionHandler } from "@/utils/ExceptionHandler";
import { Result } from "@/utils/Result";

import { RemoteDataSource } from "@/data/datasource/RemoteDatasource";
import { AuthRepository, SignUpReq, SignUpRes } from "./AuthRepository";
import { SignUpEntity } from "@/domain/entities/AuthEntity";

@injectable()
@singleton()
export class AuthRepositoryImpl implements AuthRepository {
  constructor() {}

  @ExceptionHandler()
  async signUp(req: SignUpReq): SignUpRes {
    const api = new RemoteDataSource("http://localhost:3000");
    api.post({
      model: SignUpEntity,
      url: "/api/signUp",
      body: {
        email: req.email,
        password: req.password,
      },
    });

    if (!api) {
      return Result.Error({ code: "NOT_FOUND" });
    }

    return Result.Success({});
  }
}
