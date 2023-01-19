import { Medic, Moderator } from "../../models";

export type LoginResponse = {
  user: Medic | Moderator;
  token: string;
};
