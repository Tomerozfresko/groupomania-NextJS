import React from "react";
import classes from "./Post.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import heart from "../../../public/assests/images/post/heart.png";
import like from "../../../public/assests/images/post/like.png";

function Post(props) {
  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <img
              src={
                props.users.filter(
                  (user) => user.id == props.postData.userid
                )[0].profilepicture
              }
              alt="User IMG"
              className={classes.postProfileImg}
            />
            <span className={classes.postUserName}>
              {
                props.users.filter(
                  (user) => user.id == props.postData.userid
                )[0].username
              }
            </span>
            <span className={classes.postDate}>{`${props.postData.date}`}</span>
          </div>
          <div className={classes.postTopRight}>
            <MoreVertIcon />
          </div>
        </div>
        <div className={classes.postCenter}>
          <span className={classes.postText}>{props.postData.desc}</span>
          <img
            src={`${props.postData.photo}`}
            alt="Post IMG"
            className={classes.postImg}
          />
        </div>
        <div className={classes.postBottom}>
          <div className={classes.postBottomLeft}>
            <img src={heart.src} alt="Heart" className={classes.likeIcon} />
            <img src={like.src} alt="Like" className={classes.likeIcon} />
            <span
              className={classes.postLikeCounter}
            >{`${props.postData.like}`}</span>
          </div>
          <div className={classes.postRight}>
            <span
              className={classes.postCommentText}
            >{`${props.postData.comment} Comments`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
