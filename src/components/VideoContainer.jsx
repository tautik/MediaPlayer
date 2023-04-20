import React, { useEffect, useState } from "react";
import { youtubeAPI } from "../constants/youtubeAPI";
import { Link } from "react-router-dom";
import Card from "./Card";
const VideoContainer = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(youtubeAPI);
    const json = await data.json();
    setVideo(json.items);
  };

  return (
    <div className="w-full h-[79vh] scrollbar-thin scrollbar-thumb-[#ff0000] scrollbar-track-gray-100 scrollbar-thumb-rounded-md overflow-auto   mt-8 flex flex-wrap justify-start">
      {video.map((item) => (
        <Link to={"/watch?v=" + item.id} key={item.id}>
          <Card
            channel={item.snippet?.channelTitle}
            title={item.snippet?.localized?.title}
            views={item.statistics?.viewCount}
            published={item.snippet?.publishedAt}
            poster={item.snippet?.thumbnails?.medium?.url}
            channelImg={item.snippet?.thumbnails?.default?.url}
            duration={item.contentDetails?.duration}
          />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
