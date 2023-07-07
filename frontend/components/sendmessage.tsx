"use client";
import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "@/app/redux/feature/testChat";

export default function SendMessage() {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      console.log("Sending message:", message);
      const userMessage = { content: message, isUser: true };
      dispatch(addMessage(userMessage));
      const botMessage = { content: "bot response for:\n" + message, isUser: false };
      dispatch(addMessage(botMessage));
      setMessage("");
    }
  };

  return (
      <div className="p-4" style={{ width: "calc(100vw - 14rem)" }}>
        <textarea
          className="shadow-2xl rounded-lg px-5 py-3 text-sm max-h-32 overflow-auto"
          style={{ width: "calc(100vw - 14rem)", height: "8rem" }}
          placeholder="Send a Message"
          value={message}
          onChange={handleMessageChange}
        />
        <button
          className={`fixed p-1 rounded-md md:bottom-12 md:p-2 md:right-5 dark:hover:bg-gray-900 ${
            message.trim() === ""
              ? "dark:disabled:hover:bg-transparent"
              : "bg-blue-500"
          } text-white right-2 disabled:text-gray-400 bottom-1.5 transition-colors ${
            message.trim() === "" ? "disabled:opacity-100" : ""
          }`}
          disabled={message.trim() === ""}
          onClick={handleSendMessage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="none"
            className="h-4 w-4 m-1 md:m-0"
            strokeWidth="2"
          >
            <path
              d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
  );
}
