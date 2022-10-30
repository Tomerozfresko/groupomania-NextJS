import React from "react";
import classes from "./LeftBar.module.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import EventIcon from "@mui/icons-material/Event";
import WorkIcon from "@mui/icons-material/Work";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

function LeftBar(props) {
  // console.log(props);
  return (
    <div className={classes.leftBar}>
      <div className={classes.leftBarWrapper}>
        <ul className={classes.leftBarList}>
          <li key={"1"} className={classes.leftBarListItem}>
            <RssFeedIcon className={classes.leftBarIcon} />
            <span className={classes.leftBarListItemText}>Feed</span>
          </li>
          <li key={"2"} className={classes.leftBarListItem}>
            <GroupIcon className={classes.leftBarIcon} />
            <span className={classes.leftBarListItemText}>Groups</span>
          </li>
          <li key={"3"} className={classes.leftBarListItem}>
            <BookmarkIcon className={classes.leftBarIcon} />
            <span className={classes.leftBarListItemText}>Bookmarks</span>
          </li>
          <li key={"4"} className={classes.leftBarListItem}>
            <QuestionMarkIcon className={classes.leftBarIcon} />
            <span className={classes.leftBarListItemText}>Questions</span>
          </li>
          <li key={"5"} className={classes.leftBarListItem}>
            <WorkIcon className={classes.leftBarIcon} />
            <span className={classes.leftBarListItemText}>Jobs</span>
          </li>
          <li key={"6"} className={classes.leftBarListItem}>
            <EventIcon className={classes.leftBarIcon} />
            <span className={classes.leftBarListItemText}>Events</span>
          </li>
          <li key={"7"} className={classes.leftBarListItem}>
            <ChatBubbleIcon className={classes.leftBarIcon} />
            <span className={classes.leftBarListItemText}>Chat</span>
          </li>
          <li key={"8"} className={classes.leftBarListItem}>
            <OndemandVideoIcon className={classes.leftBarIcon} />
            <span className={classes.leftBarListItemText}>Videos</span>
          </li>
          <li key={"9"} className={classes.leftBarListItem}>
            <ImportContactsIcon className={classes.leftBarIcon} />
            <span className={classes.leftBarListItemText}>Courses</span>
          </li>
        </ul>
        <button className={classes.leftBarButton}>Show more</button>
        <hr className={classes.leftBarHr} />
        <ul className={classes.leftBarFriendList}>
          {props.users.map((user) => {
            return (
              <li key={user.id} className={classes.leftBarFriend}>
                <img
                  className={classes.leftBarImg}
                  src={user.profilepicture}
                  alt={`profile photo of ${user.profilepicture}`}
                />
                <span className={classes.leftBarFriendName}>
                  {user.username}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default LeftBar;
