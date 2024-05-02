import React from "react";
import { chatRoomChat } from "./Helper";
import { MediaIcon, ReloadIcon, SendIcon } from "./Icon";

const ChatRoom = () => {
  return (
    <div className="px-3 sm:px-6 pt-6">
      <div className="border border-[#D6BC97] bg-[#FFEED6] py-5 rounded-lg">
        <h2 className="text-base lg:text-xl font-normal text-black capitalize text-center">
          about stranger
        </h2>
      </div>
      <div className="mt-10">
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
      <div className="flex gap-1 items-center md:hidden mt-5">
        <span className="bg-[#435334] inline-block px-3 py-2 md:px-5 md:py-4 h-full cursor-pointer rounded">
          <ReloadIcon />
        </span>

        <span className="bg-[#435334] px-3 py-2 md:px-5 flex items-center justify-center  cursor-pointer  md:h-10 sm:h-[60px] md:border-l border-[#D6BC97] rounded">
          <MediaIcon />
        </span>
      </div>
      <div className="border border-[#D6BC97] mb-5 mt-1 md:my-10 rounded-md flex items-center overflow-hidden  h-10 sm:h-[60px]">
        <div className="md:flex items-center hidden">
          <span className="bg-[#435334] inline-block md:px-5 md:py-4 h-full cursor-pointer">
            <ReloadIcon />
          </span>

          <span className="bg-[#435334] px-5 flex items-center justify-center  cursor-pointer  h-10 sm:h-[60px] border-l border-[#D6BC97]">
            <MediaIcon />
          </span>
        </div>
        <input
          placeholder="Typing..."
          className="px-2 text-base lg:text-xl md:ms-4 w-full border-0 outline-none resize-none h-10 sm:h-[60px]"
        />
        <span className="bg-[#435334] px-5 py-4 h-full cursor-pointer rounded flex items-center">
          <SendIcon />
        </span>
      </div>
    </div>
  );
};

export default ChatRoom;
