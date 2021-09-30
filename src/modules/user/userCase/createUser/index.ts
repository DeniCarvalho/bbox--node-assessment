import { PsqlUserRepository } from "../../repository/implementations/PsqlUserRespository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const psqlUserRepository = new PsqlUserRepository();

const createUserUseCase = new CreateUserUseCase(psqlUserRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
