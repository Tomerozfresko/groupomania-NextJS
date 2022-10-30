import useOnePost from "../../hooks/useOnePost";
import classes from "./Post.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import heart from "../../../public/assests/images/post/heart.png";
import like from "../../../public/assests/images/post/like.png";

function Post(props) {
  console.log(props.post.id);
  const { post, postIsLoading, postIsError } = useOnePost(props.post.id);
  // console.log(post);

  if (postIsLoading) return <p>Loading post...</p>;

  if (postIsError) return <p>This is an error</p>;

  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <img
              src={post.userProfilePicture}
              alt="User IMG"
              className={classes.postProfileImg}
            />
            <span className={classes.postUserName}>{post.userName}</span>
            <span className={classes.postDate}>{post.date}</span>
          </div>
          <div className={classes.postTopRight}>
            <MoreVertIcon />
          </div>
        </div>
        <div className={classes.postCenter}>
          <span className={classes.postText}>{post.description}</span>
          <img src={post.photo} alt="Post IMG" className={classes.postImg} />
        </div>
        <div className={classes.postBottom}>
          <div className={classes.postBottomLeft}>
            <img src={heart.src} alt="Heart" className={classes.likeIcon} />
            <img src={like.src} alt="Like" className={classes.likeIcon} />
            <span className={classes.postLikeCounter}>{post.like}</span>
          </div>
          <div className={classes.postRight}>
            <span className={classes.postCommentText}>
              {`${post.comment} comments`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
