import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { chatData } from "~/constants";

export interface Message {
  id: number;
  sender: "user" | "otherUser";
  message: string;
}

const ChatScreen: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const [messages, setMessages] = useState<Message[]>(chatData);
  const navigate = useNavigate();

  const sendMessage = () => {
    if (message.trim() !== "") {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: "user",
        message: message.trim(),
      };

      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <div
        className="p-4 sticky top-0 bg-gray-200 hover:text-blue-800 cursor-pointer"
        onClick={() => navigate("/chat")}
        onKeyUp={() => null}
      >
        Back
      </div>
      <div className="flex-1 max-w-xs mx-auto pb-0 ">
        <div className="flex flex-col overflow-y-auto p-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`mb-4 ${
                msg.sender === "user"
                  ? "text-right self-end"
                  : "text-left self-start"
              }`}
            >
              <div
                className={`px-2 py-1 rounded ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
              >
                {msg.message}
              </div>
            </div>
          ))}
        </div>
        <div className="sticky bottom-0 flex items-center p-4  bg-gray-200">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow p-2 border rounded-l focus:outline-none"
            placeholder="Type a message..."
          />
          <button
            type="button"
            onClick={sendMessage}
            className="p-2 bg-blue-500 text-white rounded-r"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
