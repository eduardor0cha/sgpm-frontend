import { Medic, Moderator } from "../../domain/models";
import { LoginResponse } from "../../domain/types";
import { UserRole } from "../../domain/types/Auth/UserRoles";
import APIClient from "../APIClient";

class AuthAPI {
  static async login(login: string, password: string): Promise<LoginResponse> {
    const response = await APIClient.post("/auth/login", {
      login: login,
      password: password,
    });

    switch (response.data.user.role as UserRole) {
      case "medic":
        return {
          user: Medic.fromJSON(response.data.user),
          token: response.data.token,
        };
      case "moderator":
        return {
          user: Moderator.fromJSON(response.data.user),
          token: response.data.token,
        };
    }
  }

  static setAuthToken(token: string): boolean {
    APIClient.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
    return true;
  }

  static removeAuthToken(): boolean {
    APIClient.defaults.headers.common = {
      Authorization: undefined,
    };
    return true;
  }
}

export default AuthAPI;
