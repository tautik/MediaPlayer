import React from "react";
import { Link } from "react-router-dom";

const Card = ({
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

  return (
    <div className="w-[270px] mx-4 mt-4">
      <div className="relative">
        <img className="rounded-md bg-cover" src={poster} alt="video-poster" />
        <span className="bg-black text-white text-xs absolute bottom-1 right-1 px-1 font-semibold">
          {duration}
        </span>
      </div>
      <div className="grid grid-flow-col grid-cols-9 my-4">
        <div className="mx-2 col-span-2">
          <img
            className="h-9 w-9 rounded-full bg-cover"
            src={channelImg}
            alt="channel-logo"
          />
        </div>
        <div className="col-span-7">
          <p className="text-base font-medium mb-2 line-clamp-2 ">{title}</p>
          <p className="text-xs font-semibold">{channel}</p>
          <span className="text-xs font-semibold">
            {viewFun(views)} views
          </span>{" "}
          &nbsp;
        </div>
      </div>
    </div>
  );
};

export default Card;
