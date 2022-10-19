import React from "react";
import classes from "./Share.module.css";
import Image from "next/image";
import shareProfilePicture from "../../../public/assests/images/avatars/woman1.jpeg";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Share() {
  return (
    <div className={classes.share}>
      <div className={classes.shareWrapper}>
        <div className={classes.shareTop}>
          <Image
            className={classes.shareProfileImg}
            src={shareProfilePicture.src}
            alt="alt"
            width="64"
            height="64"
          />
          <input
            placeholder="Share anything you want!"
            className={classes.shareInput}
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
          <button className={classes.shareButton}>Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
