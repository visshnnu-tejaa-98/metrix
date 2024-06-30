import React from "react";
import HomeIcon from "../icons/home-icon.svg";
import { useLocation } from "react-router-dom";

const Breadgrums = () => {
  const location = useLocation();

  return (
    <div className="py-[4px] px-[20px] border-[1px] border-[#F1F3F9] bg-[#ffffff]">
      <div className="font-[Inter] font-normal text-[0.75rem] leading-4 text-[#8B8D97] flex justify-start gap-[0.6875rem]">
        <img src={HomeIcon} alt="HomeIcon" />
        {location.pathname === "/orders" && <p>/</p>}
        {location.pathname === "/orders" && <p>Orders</p>}
      </div>
    </div>
  );
};

export default Breadgrums;
