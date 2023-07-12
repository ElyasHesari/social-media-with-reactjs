import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  BookmarkBorder,
  ChatBubbleOutline,
  Telegram,
} from "@mui/icons-material";

function Post(props) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>{props.user.charAt(0).toUpperCase()}</Avatar>
          {props.user} . <span>{props.timestamp}</span>
        </div>

        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img
          src={props.postImage}
          alt=""
        />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">
            <FavoriteBorderIcon className="postIcon" />
            <ChatBubbleOutline className="postIcon" />
            <Telegram className="postIcon" />
          </div>
          <div className="post__iconSave">
            <BookmarkBorder className="postIcon" />
          </div>
        </div>
        Liked by {props.like} people.
      </div>
    </div>
  );
}

export default Post;
