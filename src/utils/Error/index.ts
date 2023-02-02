import { AxiosError } from "axios";

export function getErrorMessage(error: unknown): string {
  if (error instanceof AxiosError) return error.response?.data.message;

  return "Algo inexperado aconteceu.";
}
