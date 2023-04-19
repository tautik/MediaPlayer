import React from "react";

const Chat = ({ name, message, userAvatar }) => {
  return (
    <div className="pl-2 pt-1 flex ">
      <div className="mr-2">
        <img
          className="h-8 w-auto"
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold ">{name}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Chat;
