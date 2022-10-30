import React, { useEffect } from "react";
import classes from "./Header.module.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import useUser from "../../hooks/useUser";
import { useState } from "react";

function Header() {
  const { data: session } = useSession();
  const { user, userIsLoading, userIsError } = useUser(session.user.email);
  if (userIsLoading) {
    return <p>Loading User</p>;
  }
  if (userIsError) {
    return <p>Error fetching usr</p>;
  }
  // console.log(user);

  function logoutHandler() {
    signOut();
  }
  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerLeft}>
        <span className={classes.logo}>
          <Link href="/main">Groupomania</Link>
        </span>
      </div>
      <div className={classes.headerCenter}>
        <div className={classes.searchBar}>
          <SearchIcon className={classes.searchIcon} />
          <input
            placeholder={`Hey ${user.username}`}
            className={classes.searchInput}
          />
        </div>
      </div>
      <div className={classes.headerRight}>
        <div className={classes.headerLinks}>
          <span className={classes.headerLink}>Profil</span>
          <span onClick={logoutHandler} className={classes.headerLink}>
            Logout
          </span>
        </div>
        <div className={classes.headerIcons}>
          <div className={classes.headerIconItem}>
            <PersonIcon />
            <span className={classes.headerIconBadge}>2</span>
          </div>
          <div className={classes.headerIconItem}>
            <ChatIcon />
            <span className={classes.headerIconBadge}>1</span>
          </div>
          <div className={classes.headerIconItem}>
            <NotificationsIcon />
            <span className={classes.headerIconBadge}>4</span>
          </div>
        </div>
        <img
          src={user.profilepicture}
          alt="user profile"
          className={classes.headerAvatar}
        />
      </div>
    </div>
  );
}

export default Header;
