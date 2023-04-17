import React from "react";
import { commentsData } from "../constants/config";

const Comment = (props) => {
  const { name, text } = props.data;
  return (
    <div className="flex my-2 bg-gray-50">
      <div>
        <img
          className="h-12"
          src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
          alt=""
        />
      </div>
      <div className="pl-2">
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ commentInfo }) => {
  return commentInfo.map((data) => {
    return (
      <>
        <div>
          <Comment data={data} />
        </div>
        <div className="ml-5 border-l-2 border-l-slate-500">
          <CommentList commentInfo={data.replies} />
        </div>
      </>
    );
  });
};

const CommentSection = () => {
  return (
    <div className=" w-[900px]">
      <h1 className="font-bold text-[1.6rem]">Comments</h1>
      <CommentList commentInfo={commentsData} />
    </div>
  );
};
//CommentSection -->CommentList where we do recursion for n listed comments
export default CommentSection;
