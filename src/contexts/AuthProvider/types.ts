export type UserLogin = {
  id?: string;
  token?: string;
};

export type Context = UserLogin & {
  authenticate: (email?: string, password?: string) => Promise<void>;
  logout: () => void;
};

export type Provider = {
  children: JSX.Element;
};
