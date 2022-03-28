import { User, UserData } from '../models';

export async function getUser(id: string): Promise<User> {
  const userStored = JSON.parse(localStorage.getItem('sgpm-t')!);

  const user = await fetch(
    `${process.env.REACT_APP_API_URL}/users/getbyid/${id}`,
    {
      headers: {
        Authorization: `Bearer ${userStored!}`
      }
    }
  );

  return user.json();
}

export async function getUserByToken(): Promise<UserData> {
  const userStored = JSON.parse(localStorage.getItem('sgpm-t')!);

  const user = await fetch(
    `${process.env.REACT_APP_API_URL}/users/getbytoken`,
    {
      headers: {
        Authorization: `Bearer ${userStored!}`
      }
    }
  );

  return user.json();
}
