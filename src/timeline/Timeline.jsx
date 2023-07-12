import React from "react";
import Sugesstions from "./Sugesstions";
import "./Timeline.css";
import Post from "./post/Post";
function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          <Post />
          <Post />
          <Post />
          
        </div>
      </div>
      <div className="timeline__right">
        <Sugesstions />
      </div>
    </div>
  );
}

export default Timeline;
