import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
export enum UserRole {
  ADMIN = "ADMIN",
  CLIENT = "CLIENT",
}

export enum UserEvent {
  CREATION = "CREATION",
  ACCEPTANCE = "ACCEPTANCE",
  REFUSAL = "REFUSAL",
}

@Entity("users")
export default class User extends BaseEntity {
  constructor(props: User, uuid?: string) {
    super();
    Object.assign(this, props);

    if (!uuid) {
      this.uuid = uuidv4();
    }
  }

  @PrimaryColumn()
  public readonly uuid: string;

  @Column({ name: "first_name" })
  firstName: string;

  @Column({ name: "last_name" })
  lastName: string;

  @Column({ name: "email" })
  email: string;

  @Column({ name: "phone_number" })
  phoneNumber: string;

  @Column({ name: "password" })
  password: string;

  @Column({ name: "role", type: "enum", enum: UserRole })
  role: UserRole;

  @Column({ name: "created_at" })
  creationDate: Date;

  @Column({ name: "current_event", type: "enum", enum: UserEvent })
  currentEvent: UserEvent;
}
