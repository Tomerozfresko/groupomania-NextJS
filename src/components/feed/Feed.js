import Share from "../share/Share";
import classes from "./MainFeed.module.css";
import Post from "../post/Post";

function Feed(props) {
  const posts = props.posts;
  return (
    <>
      <div className={classes.mainFeed}>
        <div className={classes.feedWrapper}>
          <Share />
          {posts.map((post) => {
            // console.log(post);
            return <Post key={post.id} post={post} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Feed;
