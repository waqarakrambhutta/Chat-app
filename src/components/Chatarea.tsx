import React from "react";
import Message from "./Message";

const Chatarea = () => {
  return (
    <div className="chat-area ">
      <div className="chat-header"></div>
      <div className="messages">
        <Message text="Hay! how's it going" sent=''/>
        <Message text="I'm good." sent="recieved"/>
      </div>
    </div>
  );
};

export default Chatarea;
