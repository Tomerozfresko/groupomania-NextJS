import classes from "./Profile.module.css";
import Header from "../../components/header/Header.js";
import Leftbar from "../../components/leftBar/LeftBar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightBar/RightBar";
import { useSession } from "next-auth/react";
import useUser from "../../hooks/useUsers";

export default function Profile() {
  const { data: session } = useSession();
  // console.log(session);
  // const { user, userIsLoading, userIsError } = useUser(session.user.email);
  // if (userIsLoading) {
  //   return <p>Loading Profil</p>;
  // }
  // if (userIsError) {
  //   return <p>Error fetching usr</p>;
  // }
  // console.log(user);
  return (
    <>
      {/* <Header /> */}
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
