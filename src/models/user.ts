export type User = {
  cpf: string;
  username: string;
  email: string | null;
  password: string;
  firstName: string;
  lastName?: string;
  gender?: string;
  phoneNumber?: string;
  street?: string;
  postalCode?: string;
  district?: string;
  city?: string;
  state?: string;
  createAt: Date;
  updatedAt: Date;
};

export type UserData = {
  cpf: string;
  username: string;
  email: string | null;
  firstName: string;
  lastName?: string;
  gender?: string;
  phoneNumber?: string;
  street?: string;
  postalCode?: string;
  district?: string;
  city?: string;
  state?: string;
  createAt: Date;
  updatedAt: Date;
};
