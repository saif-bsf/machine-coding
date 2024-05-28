import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";

const CHAT_MESSAGE_LIMIT = 10;
const data = [];

const ChatWindow = () => {
  const [messages, setMessages] = useState(data);

  const fetchData = () => {
    const data = [
      {
        id: 2,
        name: "Saif",
        photo:
          "https://yt4.ggpht.com/ytc/AIdro_loZEw7_CMARFOXlavFw65KIXCZHZ3ccKUUa7x9uS1Ldk21=s64-c-k-c0x00ffffff-no-rj",
        message: "Masterstroke from Kejriwal",
      },
      {
        id: 2,
        name: "Narender Modi",
        photo:
          "https://yt4.ggpht.com/ytc/AIdro_loZEw7_CMARFOXlavFw65KIXCZHZ3ccKUUa7x9uS1Ldk21=s64-c-k-c0x00ffffff-no-rj",
        message: "Masterstroke from Kejriwal",
      },
    ];
    setMessages((messages) => {
      let newMessageList = [...data, ...messages];
      newMessageList = newMessageList.splice(0, CHAT_MESSAGE_LIMIT);
      return newMessageList;
    });
  };

  useEffect(() => {
    const s = setInterval(fetchData, 5000);
    return () => clearInterval(s);
  }, []);
  return (
    <div className="flex flex-col-reverse w-full h-[600px] overflow-y-scroll border border-black mt-5">
      {messages.map((message, index) => (
        <ChatMessage key={index} {...message} />
      ))}
    </div>
  );
};

export default ChatWindow;
