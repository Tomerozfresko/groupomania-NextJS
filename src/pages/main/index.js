import React, { Fragment, useState, useEffect } from "react";
import Header from "../../components/layout/header/Header";
import LeftBar from "../../components/layout/leftBar/LeftBar";
import MainFeed from "../../components/layout/feed/MainFeed";
import RightBar from "../../components/layout/rightBar/RightBar";
import classes from "./FeedPage.module.css";

function FeedPage() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    let res = await fetch("api/users");
    let users = await res.json();
    let resPosts = await fetch("api/posts");
    let posts = await resPosts.json();
    setUsers(users);
    setPosts(posts);
  }, []);

  return (
    <Fragment>
      <Header />
      <div className={classes.MainContainer}>
        <LeftBar users={users}/>
        <MainFeed posts={posts} users={users} />
        <RightBar users={users} />
      </div>
    </Fragment>
  );
}

export default FeedPage;
