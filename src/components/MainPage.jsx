import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ChatRoom from "./ChatRoom";
import Options from "./Options";

const MainPage = () => {
  const [openOptions, setOpenOptions] = useState(false);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="lg:w-1/4 h-screen hidden lg:block ">
          <div className="top-0 static h-full">
            <Sidebar />
          </div>
        </div>
        <div className="lg:w-3/4 w-full h-screen">
          <div className=" h-full relative">
            {openOptions && (
              <div className="absolute end-0 top-[75px] bg-[#435334]">
                <Options setOpenOptions={setOpenOptions} />
              </div>
            )}
            <div className="sticky top-[-1px]">
              <Header
                setOpenOptions={setOpenOptions}
                openOptions={openOptions}
              />
            </div>
            <ChatRoom />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
