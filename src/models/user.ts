export type User = {
  cpf: string;
  username: string;
  email: string;
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
