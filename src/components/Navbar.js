import React from "react";
import BootomArrow from "../icons/bottom-arrow.svg";
import BellIcon from "../icons/bell.svg";
import LoginAvatar from "../images/login-avatar.svg";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="py-[14px] px-[21px] flex justify-between bg-[#ffffff]">
      <div className="font-medium leading-[30px]">
        <h1>Dashboard</h1>
      </div>
      <div className="flex gap-[20px] items-center">
        <div>
          <div className="py-[5px] px-[12px] bg-[#FEF5EA] rounded-[8px] font-normal w-[154px] flex justify-between">
            <p>Nanny's Shop</p>
            <img src={BootomArrow} alt="BootomArrow" />
          </div>
        </div>
        <div>
          <img src={BellIcon} alt="BellIcon" />
        </div>
        <div>
          <img src={LoginAvatar} alt="LoginAvatar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
