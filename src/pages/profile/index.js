import classes from "./Profile.module.css";
import Header from "../../components/layout/header/Header.js";
import Leftbar from "../../components/layout/leftBar/LeftBar";
import Feed from "../../components/layout/feed/MainFeed";
import Rightbar from "../../components/layout/rightBar/RightBar";

export default function Profile() {
  return (
    <>
      <Header />
      <div className={classes.profile}>
        <Leftbar />
        <div className={classes.profileRight}>
          <div className={classes.profileRightTop}>
            <div className={classes.profileCover}>
              <img
                className={classes.profileCoverImg}
                src="https://picsum.photos/801"
                alt=""
              />
              <img
                className={classes.profileUserImg}
                src="https://joeschmoe.io/api/v1/random"
                alt=""
              />
            </div>
            <div className={classes.profileInfo}>
              <h4 className={classes.profileInfoName}>Tomer Oz Fresko</h4>
              <span className={classes.profileInfoDesc}>Let's play!</span>
            </div>
          </div>
          <div className={classes.profileRightBottom}>
            <Feed />
            <Rightbar profile={true} />
            {/* location indicator */}
          </div>
        </div>
      </div>
    </>
  );
}
