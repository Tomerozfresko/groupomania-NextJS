import React from "react";
import classes from "./Share.module.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useSession } from "next-auth/react";
import useUser from "../../hooks/useUser";
import { useRef } from "react";

function Share() {
  // !! protect this path // const session = useSession();
  const descriptionRef = useRef();
  const { data: session } = useSession();
  const { user, userIsLoading, userIsError } = useUser(session.user.email);
  if (userIsLoading) {
    return <p>Loading User</p>;
  }
  if (userIsError) {
    return <p>Error fetching usr</p>;
  }
  // console.log(user);

  async function submitHandler() {
    try {
      const postDetailes = {
        description: descriptionRef.current.value,
        photo: "https://picsum.photos/810",
        date: "just now",
        like: 0,
        comment: 0,
        userId: user.id,
      };
      console.log("button clicked");
      console.log(postDetailes);
      const fetchOptions = {
        method: "POST",
        body: JSON.stringify(postDetailes),
        headers: { "Content-Type": "application/json" },
      };
      await fetch("/api/posts/create", fetchOptions);
    } catch (error) {
      console.log("Error creating post", error);
    }
  }

  return (
    <div className={classes.share}>
      <div className={classes.shareWrapper}>
        <div className={classes.shareTop}>
          <img
            className={classes.shareProfileImg}
            src={user.profilepicture}
            alt="alt"
            width="64"
            height="64"
          />
          <input
            placeholder={`How is your day?`}
            className={classes.shareInput}
            ref={descriptionRef}
          />
        </div>
        <hr className={classes.shareHr} />
        <div className={classes.shareBottom}>
          <div className={classes.shareOptions}>
            <div className={classes.shareOption}>
              <PermMediaIcon htmlColor="tomato" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Photo/Video</span>
            </div>
            <div className={classes.shareOption}>
              <LabelIcon htmlColor="blue" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Tag</span>
            </div>
            <div className={classes.shareOption}>
              <LocationOnIcon htmlColor="green" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Location</span>
            </div>
            <div className={classes.shareOption}>
              <EmojiEmotionsIcon
                htmlColor="goldenrod"
                className={classes.shareIcon}
              />
              <span className={classes.shareOptionText}>Feelings</span>
            </div>
          </div>
          <button onClick={submitHandler} className={classes.shareButton}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default Share;
