import useSWR from "swr";

// const options = {
//   key:"/api/users/user",
//   method: "POST",
//   body: JSON.stringify(email),
//   headers: { "Content-Type": "application/json" },
// };

const fetcher = (...args) => fetch(...args).then((res) => res.json());
// console.log(...args);

function useUser(email) {
  // console.log("receive request with: ", email);

  const { data, error } = useSWR(`/api/users/${email}`, fetcher);

  return {
    user: data,
    userIsLoading: !error && !data,
    userIsError: error,
  };
}

export default useUser;
