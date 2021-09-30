import User from "../../entity/User";
import { IUserRepository } from "../IUserRespository";

export class PsqlUserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<User> {
    const user = await User.findOne({ email: email });
    return user;
  }
  async save(user: User): Promise<void> {
    await user.save();
  }
}
