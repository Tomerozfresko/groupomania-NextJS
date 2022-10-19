import classes from "../rightBar/RightBar.module.css";
import giftImg from "../../../../public/assests/images/post/gift.png";
import adImg from "../../../../public/assests/images/post/ad.png";

import { Users } from "../../../../db/DUMMY_DATA/DUMMY_DATA";
import { Fragment } from "react";

import React from "react";

function ProfileRightBar(props) {
  return (
    <Fragment>
      <div className={classes.rightbar}>
        <div className={classes.rightbarWrapper}>
          <h4 className={classes.rightbarTitle}>User Information</h4>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>City:</span>
            <span className={classes.rightbarInfoKey}>New York</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>From:</span>
            <span className={classes.rightbarInfoKey}>Madrid</span>
          </div>
          <div className={classes.rightbarInfoItem}>
            <span className={classes.rightbarInfoKey}>Relationship:</span>
            <span className={classes.rightbarInfoKey}>Single</span>
          </div>
          <h4 className={classes.rightbarTitle}>User Friends</h4>
          <div className={classes.rightbarFollowings}>
            <div className={classes.rightbarFollowing}>
              <img
                src={"https://joeschmoe.io/api/v1/1"}
                alt={"place holder"}
                className={classes.rightbarFollowingImg}
              />
              <span className={classes.rightbarFollowingName}>John Carter</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProfileRightBar;
