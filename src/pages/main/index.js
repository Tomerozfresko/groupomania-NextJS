import React, { Fragment, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Header from "../../components/header/Header";
import LeftBar from "../../components/leftBar/LeftBar";
import MainFeed from "../../components/feed/Feed";
import RightBar from "../../components/rightBar/RightBar";
import classes from "./FeedPage.module.css";

function FeedPage() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    let res = await fetch("api/users");
    let recUsers = await res.json();
    let resPosts = await fetch("api/posts/read");
    let recPosts = await resPosts.json();

    setUsers(recUsers);
    setPosts(recPosts);
    console.log(recUsers);
  }, []);

  return (
    <Fragment>
      <Header />
      <div className={classes.MainContainer}>
        <LeftBar users={users} />
        <MainFeed posts={posts} users={users} />
        <RightBar users={users} />
      </div>
    </Fragment>
  );
}

export default FeedPage;
