import React from "react";
import HomeIcon from "../icons/home-icon.svg";

const Breadgrums = () => {
  return (
    <div className="py-[4px] px-[20px] border-[1px] border-[#F1F3F9]">
      <div>
        <img src={HomeIcon} alt="HomeIcon" />
      </div>
    </div>
  );
};

export default Breadgrums;
