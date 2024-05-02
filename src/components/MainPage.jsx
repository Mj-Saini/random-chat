import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ChatRoom from "./ChatRoom";

const MainPage = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="lg:w-1/4 h-screen hidden lg:block ">
          <div className="top-0 static h-full">
            <Sidebar />
          </div>
        </div>
        <div className="lg:w-3/4 w-full h-screen">
          <div className="overflow-auto h-full">
            <div className="sticky top-[-1px]">
              <Header />
            </div>
            <ChatRoom />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
