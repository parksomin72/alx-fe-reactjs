import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: "2rem" }}>
        <h1>React Query Demo</h1>
        <PostsComponent />
      </div>

      {/* Devtools let you inspect queries, cache, refetching, etc. */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
