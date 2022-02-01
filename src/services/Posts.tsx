export default {
  async getPosts() {
    const posts = await fetch('http://localhost:3330/posts/get');

    return posts.json();
  }
};
