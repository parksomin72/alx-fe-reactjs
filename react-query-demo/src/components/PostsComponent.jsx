import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

export default function PostsComponent() {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 5000,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()} style={{ marginBottom: "1rem" }}>
        Refetch Posts
      </button>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
