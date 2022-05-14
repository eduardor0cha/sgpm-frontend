import { UserData } from '../models';

type loginData = {
  userData: UserData;
  token: string;
};

export default async function login(
  email: string,
  password: string
): Promise<loginData> {
  const data = await fetch(
    `https://sgpm-backend.herokuapp.com/auth/authenticate`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ email, password })
    }
  );

  return data.json();
}
