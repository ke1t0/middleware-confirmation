const PostList = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });
  const posts = await res.json();

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            {post.id}: {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
