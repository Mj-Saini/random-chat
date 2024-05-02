import React, { useState } from "react";
import { strangerTabs } from "./Helper";

const Header = () => {
  const [activeTab, setActiveTab] = useState("0");

  return (
    <div className="flex justify-between bg-[#39462C] items-center px-3 sm:px-6 ">
      <div className=" py-5 flex gap-2 sm:gap-3 h-[80px] overflow-auto w-[280px] sm:w-full">
        {strangerTabs.map((data, index) => (
          <div key={index} className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setActiveTab(index)}
              className={`border border-[#CEDEBD] hover:bg-[#CEDEBD] hover:text-black duration-300 px-3 sm:px-5 py-2 rounded-full text-white text-sm sm:text-base lg:text-xl font-normal capitalize ${
                activeTab === index ? "bg-[#CEDEBD] !text-black" : ""
              }`}
            >
              {data.name}
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-between h-6">
        <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
        <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
        <span className="inline-block w-1 h-1 bg-white rounded-full"></span>
      </div>
    </div>
  );
};

export default Header;
