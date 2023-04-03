import { Medic, Moderator } from "../../domain/models";
import { UserRole, UserType } from "../../domain/types";
import APIClient from "../APIClient";

class UserAPI {
  static async update(userId: string, data: FormData): Promise<boolean> {
    await APIClient.put(`/user/${userId}`, data);

    return true;
  }

  static async findById(userId: string): Promise<UserType> {
    const response = await APIClient.get(`/user/${userId}`);

    switch (response.data.role as UserRole) {
      case "medic":
        return Medic.fromJSON(response.data);

      case "moderator":
        return Moderator.fromJSON(response.data);
    }
  }
}

export default UserAPI;
