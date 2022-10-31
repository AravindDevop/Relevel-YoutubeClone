import React from "react";

function VideoCard({ video }) {
  return (
    <div className="video-card">
      <img src={video.snippet.thumbnails.medium.url} />
      <p>{video.snippet.title}</p>
    </div>
  );
}

export default VideoCard;
