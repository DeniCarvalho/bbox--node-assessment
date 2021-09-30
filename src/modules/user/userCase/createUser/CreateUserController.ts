import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { firstName, lastName, email, phoneNumber, password } = request.body;

    try {
      await this.createUserUseCase.execute({
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      });
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Ocorreu um erro",
      });
    }
  }
}
