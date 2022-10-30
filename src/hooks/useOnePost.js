import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useOnePost(id) {
  const { data, error } = useSWR(`/api/posts/${id}`, fetcher);
  return {
    post: data,
    postIsLoading: !error && !data,
    postIsError: error,
  };
}

export default useOnePost;
