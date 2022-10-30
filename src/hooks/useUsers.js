import useSWR from "swr";

function useUser(id) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(`/api/users/`, fetcher);

  return {
    users: data,
    userIsLoading: !error && !data,
    userIsError: error,
  };
}

export default useUser;
