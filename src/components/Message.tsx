import React from "react";

interface info {
  text: any;
  sent: any;
}

const Message = ({ text, sent }: info) => {
  return <div className={`message ${sent ? "sent" : "recieved"}`}>
    <div className="message-bubble">{text}</div>
  </div>;
};

export default Message;
