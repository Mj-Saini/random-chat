import React from "react";
import { FemaleIcon, MaleIcon } from "./Icon";
import { Link } from "react-router-dom";

const ChooseGender = () => {
  return (
    <div className="mt-5 flex flex-col items-center justify-center relative h-full">
      <h2 className="font-bold text-xl md:text-2xl lg:text-4xl text-black mt-10 capitalize">
        Gender
      </h2>
      <p className="font-normal text-base lg:text-xl text-[#343434] mt-5">
        Choose you gender
      </p>
      <div className="flex gap-5 gl:gap-10 mt-10">
        <div className="flex flex-col gap-5">
          <span className="flex items-center justify-center w-[135px] h-[135px] rounded-full bg-[#FAF1E4]">
            <MaleIcon />
          </span>
          <h2 className="text-4xl font-normal text-black text-center uppercase">
            male
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <span className="flex items-center justify-center w-[135px] h-[135px] rounded-full bg-[#FAF1E4]">
            <FemaleIcon />
          </span>
          <h2 className="text-4xl font-normal text-black text-center uppercase">
            female
          </h2>
        </div>
      </div>
      <Link
        to="/chat"
        className="border border-black text-base lg:text-xl font-bold capitalize py-2 px-6 rounded-full my-5 hover:text-[#434334] hover:border-[#434334] duration-300"
      >
        next
      </Link>
    </div>
  );
};

export default ChooseGender;
