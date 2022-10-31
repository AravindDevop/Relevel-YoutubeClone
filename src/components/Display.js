import React, { useState, useEffect } from "react";
import VideoCard from "./VideoCard";
import { youtubeApi } from "./../apis/youtubeApi";

function Display({ searchInput }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      return youtubeApi.get("/search", {
        params: {
          q: searchInput,
        },
      });
    };
    getVideos().then((response) => {
      setVideos(response.data.items);
    });
  }, [searchInput]);
  return (
    <div className="video-grid">
      {videos.map((video) => (
        <VideoCard key={video.id.videoId} video={video}></VideoCard>
      ))}
    </div>
  );
}

export default Display;
