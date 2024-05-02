import React from "react";
import { ProfileIcon } from "./Icon";
import { sidebarTabs } from "./Helper";

const Sidebar = () => {
  return (
    <div className="bg-[#435334] pb-10 h-full">
      <h2 className="ff_rubik ps-6 text-white text-5xl py-5 border-b border-white h-[80px]">
        ChatHat
      </h2>
      <div className="bg-[#39462C] rounded-full py-5 text-center flex items-center justify-center gap-1 max-w-[244px] xl:w-[244px] mx-6 ps-6 mt-10">
        <span className="text-white text-xl">+</span>
        <input
          type="text"
          placeholder="find prople"
          className="border-0 outline-none bg-transparent text-white font-normal text-base capitalize w-full"
          name=""
          id=""
        />
      </div>
      <div className="my-10 ps-6">
        {sidebarTabs.map((data, index) => (
          <div key={index} className="flex gap-2 items-center mt-5">
            <span>
              <ProfileIcon />
            </span>
            <h2 className="text-base lg:text-xl font-normal text-white capitalize">
              {data.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
