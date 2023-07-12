import React, { useState } from "react";
import Sugesstions from "./Sugesstions";
import "./Timeline.css";
import Post from "./post/Post";
function Timeline() {
  const [posts, setPost] = useState([
    {
      user: "redian_",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      likes: 12,
      timestamp: "2d",
    },
    {
      user: "johndoe",
      postImage:
        "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      likes: 56,
      timestamp: "12h",
    },
    {
      user: "juisse",
      postImage:
        "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      likes: 421,
      timestamp: "1d",
    },
    {
      user: "redian_",
      postImage:
        "https://images.unsplash.com/photo-1613323593608-abc90fec84ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
      likes: 14,
      timestamp: "30m",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((item) => {
            return (
              <Post
                user={item.user}
                postImage={item.postImage}
                like={item.likes}
                timestamp={item.timestamp}
              />
            );
          })}
        </div>
      </div>
      <div className="timeline__right">
        <Sugesstions />
      </div>
    </div>
  );
}

export default Timeline;
