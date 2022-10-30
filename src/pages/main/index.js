import React, { Fragment, useState, useEffect } from "react";
// import { useSession } from "next-auth/react";
import useUsers from "../../hooks/useUsers";
import useAllPosts from "../../hooks/useAllPosts";

import Header from "../../components/header/Header";
import LeftBar from "../../components/leftBar/LeftBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightBar/RightBar";
import classes from "./Main.module.css";

function Main() {
  const { users, userIsLoading, userIsError } = useUsers();
  const { posts, postIsLoading, postIsError } = useAllPosts();

  if (userIsLoading || postIsLoading) return <p>Loading...</p>;

  if (userIsError || postIsError) return <p>This is an error</p>;

  return (
    <Fragment>
      <Header />
      <div className={classes.MainContainer}>
        <LeftBar users={users} />
        <Feed posts={posts} />
        <RightBar users={users} />
      </div>
    </Fragment>
  );
}

export default Main;
