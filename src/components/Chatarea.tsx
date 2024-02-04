import React from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";
import withAuthenctication from "../utils/withAuthentication";

const Chatarea = () => {
  return (
    <div className="chat-area ">
      <div className="chat-header"></div>
      <div className="messages">
        <Message text="Hay! how's it going" sent=''/>
        <Message text="I'm good." sent="recieved"/>
      </div>
      <MessageInput/>
    </div>
  );
};


export default withAuthenctication(Chatarea);
