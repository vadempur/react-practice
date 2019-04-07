import React from "react";
import "./VideoItem.css";
const VideoItem = ({ video, onVideo }) => {
  return (
    <div
      onClick={() => {
        onVideo(video);
      }}
      className="item video-item"
    >
      <img
        className="ui image"
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.description}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
