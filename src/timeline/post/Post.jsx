import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { BookmarkBorder, ChatBubbleOutline, Telegram } from "@mui/icons-material";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
          <Avatar>R</Avatar>
          redian_ . <span>12h</span>
        </div>

        <MoreHorizIcon />
      </div>
      <div className="post__image">
        <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" alt="" />
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
        Liked by 21 people.
      </div>
    </div>
  );
}

export default Post;
