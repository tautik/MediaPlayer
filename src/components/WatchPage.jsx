import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { offToggle } from "../utils/toogleSlice";
import { useSearchParams } from "react-router-dom";
import CommentSection from "./CommentSection";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const params = searchParams.get("v");
  console.log(params);
  //dispatching to always keep off sidebar when page opens
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(offToggle());
  }, []);
  return (
    <div className="m-3 flex flex-col">
      <div>
        <iframe
          width="900"
          height="450"
          src={"https://www.youtube.com/embed/" + params}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-4">
        <CommentSection />
      </div>
    </div>
  );
};

export default WatchPage;
