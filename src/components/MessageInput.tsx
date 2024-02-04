import { log } from "console";
import React, { useState } from "react";

const MessageInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    console.log("Message sent");
  };

  return (
    <>
      <div className="message-input">
        <textarea
          placeholder="Type your message"
          value={inputValue}
          onChange={handleInputValue}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </>
  );
};

export default MessageInput;
