import React, { Fragment, useState, useEffect } from "react";
// import { useSession } from "next-auth/react";
import useUser from "../../hooks/useUser";
import usePost from "../../hooks/usePost";

import Header from "../../components/header/Header";
import LeftBar from "../../components/leftBar/LeftBar";
import MainFeed from "../../components/feed/Feed";
import RightBar from "../../components/rightBar/RightBar";
import classes from "./Main.module.css";

function Main() {
  const { users, userIsLoading, userIsError } = useUser();
  const { posts, postIsLoading, postIsError } = usePost();

  if (userIsLoading || postIsLoading) return <p>loading...</p>;

  if (userIsError || postIsError) return <p>This is an error</p>;

  // if (postIsLoading) return <p>loading...</p>;
  // if (postIsError) return <p>This is an error</p>;

  // const [users, setUsers] = useState([]);
  // const [posts, setPosts] = useState([]);

  // useEffect(async () => {
  //   let res = await fetch("api/users");
  //   let recUsers = await res.json();
  //   console.log("in the main page:", recUsers);
  //   let resPosts = await fetch("api/posts/read");
  //   let recPosts = await resPosts.json();

  //   setUsers(recUsers);
  //   setPosts(recPosts);
  //   console.log(recUsers);
  // }, []);

  return (
    <Fragment>
      <Header />
      <div className={classes.MainContainer}>
        <LeftBar users={users} />
        <MainFeed posts={posts} />
        <RightBar users={users} />
      </div>
    </Fragment>
  );
}

export default Main;
