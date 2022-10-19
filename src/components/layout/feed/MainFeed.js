import React from "react";
import Share from "../../share/Share";
import classes from "./MainFeed.module.css";
import Post from "../../post/Post";
import { Posts } from "../../../../db/DUMMY_DATA/DUMMY_DATA";

function MainFeed(props) {
  return (
    <>
      <div className={classes.mainFeed}>
        <div className={classes.feedWrapper}>
          <Share />
          {props.posts.map((post) => {
            return <Post key={post.id} postData={post} users={props.users}/>;
          })}
        </div>
      </div>
    </>
  );
}

export default MainFeed;
