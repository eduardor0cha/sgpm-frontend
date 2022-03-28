import { PostType } from '../models';

export default async function usePosts(): Promise<Array<PostType>> {
  const token = JSON.parse(localStorage.getItem('sgpm-t')!);

  const posts = await fetch(`${process.env.REACT_APP_API_URL}/posts/get`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return posts.json();
}
