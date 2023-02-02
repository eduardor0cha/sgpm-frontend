import { UserType } from "./UserRoles";

export type LoginResponse = {
  user: UserType;
  token: string;
};
