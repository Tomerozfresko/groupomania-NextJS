import classes from "./RightBar.module.css";
import giftImg from "../../../public/assests/images/post/gift.png";

import { Fragment, useState, useEffect } from "react";

import React from "react";

function RightBar(props) {
  const HomeRightBar = () => {
    return (
      <Fragment>
        <div className={classes.birthdayContainer}>
          <img src={giftImg.src} alt="" className={classes.birthdayImg} />
          <span className={classes.birthdayText}>
            <b>Gila</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img
          src={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgraphicriver.img.customer.envatousercontent.com%2Ffiles%2F182859243%2FUP407.jpg%3Fauto%3Dcompress%252Cformat%26q%3D80%26fit%3Dcrop%26crop%3Dtop%26max-h%3D8000%26max-w%3D590%26s%3D73378e227b4e2458b5cfe06bfe45372a&f=1&nofb=1&ipt=38643c2a85dfd2e66da0a12f34a90bb07c782db9aed8579e146da79240af132c&ipo=images"
          }
          alt=""
          className={classes.rightbarAd}
        />
        <h4 className={classes.rightbarTitle}>Online Colleagues</h4>
        <ul className={classes.rightbarFriendList}>
          {props.users.map((user) => {
            return (
              <li key={user.id} className={classes.rightbarFriend}>
                <div className={classes.rightbarProfileImgContainer}>
                  <img
                    src={user.profilepicture}
                    alt={`Profile of ${user.username}`}
                    className={classes.rightbarProfileImg}
                  />
                  <span className={classes.rightbarOnline}></span>
                </div>
                <span className={classes.rightbarUserName}>
                  {user.username}
                </span>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  };

  const ProfileRightBar = () => {
    return (
      <Fragment>
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
      </Fragment>
    );
  };

  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarWrapper}>
        {props.profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default RightBar;
