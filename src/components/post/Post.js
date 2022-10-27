import classes from "./Post.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import heart from "../../../public/assests/images/post/heart.png";
import like from "../../../public/assests/images/post/like.png";

function Post(props) {
  let imgSrc = props.users.filter(
    (user) => +user.id === +props.postData.userId
  )[0].profilepicture;
  console.log(imgSrc);

  let userName = props.users.filter(
    (user) => +user.id === +props.postData.userId
  )[0].username;

    // useEffect(async () => {
  //   let res = await fetch("api/users");
  //   let recUsers = await res.json();
  //   let resPosts = await fetch("api/posts");
  //   let recPosts = await resPosts.json();

  //   setUsers(recUsers);
  //   setPosts(recPosts);
  // }, []);

  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postTop}>
          <div className={classes.postTopLeft}>
            <img
              src={imgSrc}
              alt="User IMG"
              className={classes.postProfileImg}
            />
            <span className={classes.postUserName}>{userName}</span>
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
