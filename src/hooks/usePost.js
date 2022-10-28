import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function usePost(id) {
  const { data, error } = useSWR(`/api/posts/${id}`, fetcher);

  return {
    post: data,
    isLoading: !error && !data,
    isError: error,
  };
}
