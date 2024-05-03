import React, { useState } from "react";
import AddedPopup from "./AddedPopup";
import { addNewStrangerTab, optionsData } from "./Helper";

const Options = ({ setOpenOptions }) => {
  const [openPopupIndex, setOpenPopupIndex] = useState(null);

  const handleOptionClick = (index) => {
    setOpenOptions(false);

    setOpenPopupIndex(index);
    if (index === 0) {
      addNewStrangerTab("New");
    }
  };

  return (
    <>
      {optionsData.map((data, index) => (
        <div key={index}>
          <h2
            onClick={() => handleOptionClick(index)}
            className="font-normal text-base text-black bg-[#FAF1E4] capitalize px-5 py-4 mt-1 cursor-pointer"
          >
            {data.title}
          </h2>
          {openPopupIndex === index && index === 1 && (
            <div className="fixed top-[77px] right-0.5">
              <AddedPopup />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Options;
