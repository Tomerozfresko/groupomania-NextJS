import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useAllPosts(id) {
  const { data, error } = useSWR("/api/posts/read", fetcher);
  return {
    posts: data,
    postIsLoading: !error && !data,
    postIsError: error,
  };
}

export default useAllPosts;
