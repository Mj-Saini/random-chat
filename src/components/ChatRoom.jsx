import React, { useState } from "react";
import { chatRoomChat } from "./Helper";
import { MediaIcon, ReloadIcon, SendIcon } from "./Icon";

const ChatRoom = () => {
  const [message, setMessage] = useState({
    message: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    const newMessage = {
      profile: "M", // Assuming "a" is for the user's own profile
      name: "You", // Assuming the name for the user is "You"
      msg: message.message,
      cls: "justify-end",
      rightHide: "hidden",
    };
    chatRoomChat.push(newMessage);
    console.log(newMessage.msg);
    setMessage({ message: "" });
  };

  return (
    <div className="px-3 sm:px-6 pt-6">
      <div className="border border-[#D6BC97] bg-[#FFEED6] py-5 rounded-lg">
        <h2 className="text-base lg:text-xl font-normal text-black capitalize text-center">
          about stranger
        </h2>
      </div>
      <div className="h-[330px]">
        <div className="mt-10 mb-24 overflow-auto h-full ">
          {chatRoomChat.map((data, index) => (
            <div key={index} className={`flex mt-5 ${data.cls}`}>
              <div className={`bg-[#FFEED6] p-3 rounded-lg inline-flex gap-2 `}>
                <div>
                  <span
                    className={`flex justify-center items-center rounded-full h-8 w-8 sm:h-10 sm:w-10 text-white bg-[#39462C] capitalize ${data.rightHide}`}
                  >
                    {data.profile}
                  </span>
                </div>
                <div>
                  <h2
                    className={`text-base lg:text-xl text-black font-bold capitalize ${data.nameCls}`}
                  >
                    {data.name}
                  </h2>
                  <p className="text-base lg:text-xl text-black font-normal">
                    {data.msg}
                  </p>
                </div>
                <div>
                  <span
                    className={`flex justify-center items-center rounded-full h-8 w-8 sm:h-10 sm:w-10 text-white bg-[#39462C] capitalize ${data.hide}`}
                  >
                    {data.profile}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-0 lg:w-[70%] w-[95%]">
        <div className="flex gap-1 items-center md:hidden mt-5">
          <span className="bg-[#435334] inline-block px-3 py-2 md:px-5 md:py-4 h-full cursor-pointer rounded">
            <ReloadIcon />
          </span>

          <span className="bg-[#435334] inline-block px-3 py-2 md:px-5 md:py-4 h-full cursor-pointer rounded">
            <MediaIcon />
          </span>
        </div>
        <form
          onSubmit={handleSendMessage}
          className="border border-[#D6BC97] mb-5 mt-1  rounded-md flex items-center overflow-hidden  h-10 sm:h-[60px]"
        >
          <div className="md:flex items-center hidden bg-[#435334]">
            <span className=" flex md:px-5 md:py-4 h-full cursor-pointer">
              <ReloadIcon />
            </span>

            <span className="bg-[#435334] px-5 flex items-center justify-center  cursor-pointer  h-10 sm:h-[60px] border-l border-[#D6BC97]">
              <MediaIcon />
            </span>
          </div>
          <input
            onChange={handleOnChange}
            value={message.message}
            name="message"
            placeholder="Typing..."
            className="px-2 text-base lg:text-xl md:ms-4 w-full border-0 outline-none resize-none h-10 sm:h-[60px]"
          />
          <button
            type="submit"
            className="bg-[#435334] px-5 py-4 h-full cursor-pointer rounded flex items-center"
          >
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
