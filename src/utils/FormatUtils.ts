import { UserRole } from "../domain/types";

export function translateRole(role?: UserRole): string | undefined {
  if (!role) return;

  switch (role) {
    case "medic":
      return "Medico(a)";

    case "moderator":
      return "Moderador(a)";

    default:
      return;
  }
}

export function translateGender(gender?: string): string | undefined {
  if (!gender) return;

  switch (gender) {
    case "male":
      return "Masculino";

    case "female":
      return "Feminino";

    default:
      return "Outro";
  }
}

export function formatCPF(cpf?: string): string | undefined {
  if (!cpf) return;

  const string = cpf.replace(/([^0-9])+/g, "");
  if (string.length !== 11) return;

  return `${string.slice(0, 3)}.${string.slice(3, 6)}.${string.slice(
    6,
    9
  )}-${string.slice(9, 11)}`;
}

export function formatPostalCode(postalCode?: string): string | undefined {
  if (!postalCode) return;

  const string = postalCode.replace(/([^0-9])+/g, "");
  if (string.length !== 8) return;

  return `${string.slice(0, 5)}-${string.slice(5, 8)}`;
}

export function formatPhoneNumber(phoneNumber?: string): string | undefined {
  if (!phoneNumber) return;

  const string = phoneNumber.replace(/([^0-9])+/g, "");
  if (string.length !== 13) return;

  return `+${string.slice(0, 2)} (${string.slice(2, 4)}) ${string.slice(
    4,
    9
  )}-${string.slice(9, 13)}`;
}
