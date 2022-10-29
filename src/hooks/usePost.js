import useSWR from "swr";

function useUser(id) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR("/api/posts/read", fetcher);

  return {
    posts: data,
    postIsLoading: !error && !data,
    postIsError: error,
  };
}

export default useUser;
