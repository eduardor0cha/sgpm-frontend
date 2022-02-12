import { PostType } from '../models/post';

export default async function usePosts(): Promise<Array<PostType>> {
  const user = JSON.parse(localStorage.getItem('sgpm-u')!);

  const posts = await fetch(`${process.env.REACT_APP_API_URL}/posts/get`, {
    headers: {
      Authorization: `Bearer ${user!.token}`
    }
  });

  return posts.json();
}
