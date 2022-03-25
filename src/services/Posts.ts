import { PostType } from '../models';

export default async function usePosts(): Promise<Array<PostType>> {
  const userStored = JSON.parse(localStorage.getItem('sgpm-u')!);

  const posts = await fetch(`${process.env.REACT_APP_API_URL}/posts/get`, {
    headers: {
      Authorization: `Bearer ${userStored!.token}`
    }
  });

  return posts.json();
}
