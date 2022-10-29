import { useEffect, useState } from "react";
import { usePost } from "../../hooks/useUser";
import classes from "./Post.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import heart from "../../../public/assests/images/post/heart.png";
import like from "../../../public/assests/images/post/like.png";

import useSWR from "swr";

function Post(props) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(`/api/posts/${props.post.userId}`, fetcher,   {
    revalidateOnMount: true,
});
  console.log(props.post.userId); // !! userId is not changing
  console.log(data); //data is not refreshing
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  // console.log(props.post.userId);
  // const { user, isLoading, isError } = usePost(1);
  // if (isLoading) return <div>loading...</div>;
  // if (isError) return <div>failed to load</div>;

  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <img
              src={data.userProfilePicture}
              alt="User IMG"
              className={classes.postProfileImg}
            />
            <span className={classes.postUserName}>{data.userName}</span>
            <span className={classes.postDate}>{data.date}</span>
          </div>
          <div className={classes.postTopRight}>
            <MoreVertIcon />
          </div>
        </div>
        <div className={classes.postCenter}>
          <span className={classes.postText}>{data.description}</span>
          <img src={data.photo} alt="Post IMG" className={classes.postImg} />
        </div>
        <div className={classes.postBottom}>
          <div className={classes.postBottomLeft}>
            <img src={heart.src} alt="Heart" className={classes.likeIcon} />
            <img src={like.src} alt="Like" className={classes.likeIcon} />
            <span className={classes.postLikeCounter}>{data.like}</span>
          </div>
          <div className={classes.postRight}>
            <span className={classes.postCommentText}>
              {`${data.comment} comments`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
