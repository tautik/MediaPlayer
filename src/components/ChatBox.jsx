import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import { generateAvatar, generateRandomName } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import sendLiveIcon from "../assets/sendLiveIcon.svg";
const ChatBox = () => {
  const [inputMessage, setInputMessage] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const chatTimer = setInterval(() => {
      dispatch(
        addMessage({
          avatar: generateAvatar(),
          name: generateRandomName(),
          message: makeRandomMessage(25),
        })
      );
    }, 3000);

    return () => clearInterval(chatTimer);
  }, []);
  const ChatMessages = useSelector((store) => store.chat.messages);

  const sendMessage = () => {
    dispatch(
      addMessage({
        avatar: generateAvatar(),
        name: "Tautik",
        message: inputMessage,
      })
    );
  };
  return (
    <div className="w-full">
      <div className=" h-[550px]  border border-black rounded-md overflow-scroll overflow-x-hidden flex flex-col-reverse">
        {ChatMessages.map((msg, i) => (
          <Chat
            key={i}
            name={msg.name}
            message={msg.message}
            userAvatar={msg.avatar}
          />
        ))}
      </div>
      <div className="border border-black mt-1 h-[40px] flex items-center rounded-md w-full">
        <input
          className="w-[85%] h-8 mx-1 justify-center"
          value={inputMessage}
          onChange={(e) => {
            setInputMessage(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              sendMessage();
              setInputMessage("");
            }
          }}
          type="text"
        />
        <button
          className=" h-8 w-[15%] ml-4  items-end"
          onClick={() => {
            sendMessage();
            setInputMessage("");
          }}
        >
          <img src={sendLiveIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
