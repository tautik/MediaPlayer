import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { offToggle } from "../utils/toogleSlice";
import { useSearchParams } from "react-router-dom";
import CommentSection from "./CommentSection";
import SuggestionSidebar from "./SuggestionSidebar";
import ChatBox from "./ChatBox";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const params = searchParams.get("v");

  //dispatching to always keep off sidebar when page opens
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(offToggle());
  }, []);
  return (
    <div className=" m-3 w-[100%] ">
      <div className="flex flex-row w-[100%] ">
        <div className="">
          <iframe
            className="w-75%"
            width="1000"
            height="600"
            src={"https://www.youtube.com/embed/" + params}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="ml-4  w-[27%] rounded-xl">
          <ChatBox />
        </div>
      </div>
      <div className="flex">
        <CommentSection />
        <SuggestionSidebar />
      </div>
    </div>
  );
};

export default WatchPage;
