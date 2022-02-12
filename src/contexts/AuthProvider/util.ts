import { UserLogin } from './types';

export function setUserLocalStorage(user: UserLogin | null) {
  localStorage.setItem('sgpm-u', JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('sgpm-u');

  if (!json) {
    return null;
  }

  const user = JSON.parse(json);

  return user ?? null;
}

export async function LoginRequest(email?: string, password?: string) {
  try {
    const request = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/authenticate`,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ email, password })
      }
    );

    return request.json();
  } catch (error) {
    return null;
  }
}
