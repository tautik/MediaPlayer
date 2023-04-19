import React, { useEffect, useState } from "react";
import { youtubeAPI } from "../constants/youtubeAPI";
import { Link } from "react-router-dom";

const SidebarVideoCard = ({
  channel,
  title,
  views,
  published,
  poster,
  channelImg,
  duration,
}) => {
  const viewFun = (view) => {
    return view < 1000
      ? view
      : view > 1000 && view < 1000000
      ? (view / 1000).toFixed(0) + "K"
      : (view / 1000000).toFixed(1) + "M";
  };
  if (title.length >= 38) {
    title = title.slice(0, 38);
    title = title + "...";
  }
  return (
    <div className="w-[100%] flex justify-center bg-gray-50 py-4 ">
      <div className="flex ml-2">
        <div className="flex-1">
          <img className="bg-cover " src={poster} alt="" />
        </div>
        <div className="ml-2 flex-1 ">
          <h2 className="text-[1rem] font-semibold">{title}</h2>
          <h3 className="text-[0.9rem]">{channel}</h3>
          <div className="flex text-[0.8rem]">
            <p>{viewFun(views)} views</p>
            <p className=" ml-1">· Streamed ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuggestionSidebar = () => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(youtubeAPI);
    const json = await data.json();
    setVideo(json.items);
    console.log(json.items);
  };
  return (
    <div className=" ml-4 w-[27%] border border-black mt-4 rounded-md">
      {video.map((item) => (
        <Link to={"/watch?v=" + item.id} key={item.id}>
          <SidebarVideoCard
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

export default SuggestionSidebar;
