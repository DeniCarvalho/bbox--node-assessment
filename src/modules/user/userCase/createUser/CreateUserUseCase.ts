import User, { UserEvent, UserRole } from "../../entity/User";
import { IUserRepository } from "../../repository/IUserRespository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);
    if (userAlreadyExists) {
      throw new Error("Usuário já existe");
    }
    const user = User.create(data);
    user.role = UserRole.CLIENT;
    user.currentEvent = UserEvent.CREATION;

    user.creationDate = new Date();

    await this.userRepository.save(user);
  }
}
