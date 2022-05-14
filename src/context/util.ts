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
    `${process.env.REACT_APP_API_URL}/auth/authenticate`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ email, password })
    }
  );

  console.log(`${process.env.REACT_APP_API_URL}/auth/authenticate`);

  return data.json();
}
