import React, { useState } from "react";
import Logo from "../images/logo.svg";
import DashboardIconActive from "../icons/dashboard-icon-active.svg";
import DashboardIcon from "../icons/dashboard-icon.svg";
import BagIcon from "../icons/bag.svg";
import TwoUserIcon from "../icons/two-users.svg";
import TwoUserIconWhite from "../icons/two-user-active.svg";
import FolderIcon from "../icons/folder.svg";
import FolderIconWhite from "../icons/folder-white.svg";
import ChatIcon from "../icons/chat.svg";
import ChatIconWhite from "../icons/chat-white.svg";
import SettingIcon from "../icons/setting.svg";
import SettingIconWhite from "../icons/setting-white.svg";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import BootomArrow from "../icons/bottom-arrow.svg";
import BellIcon from "../icons/bell.svg";
import LoginAvatar from "../images/login-avatar.svg";
import BagWhiteIcon from "../icons/bag-white.svg";
import HeadphonesIcon from "../icons/headphones.svg";
import GiftIcon from "../icons/gift-icon.svg";
import DownChevron from "../icons/down-chevron.svg";
import LogoutIcon from "../icons/logout-icon.svg";

const Sidebar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const sidebarOptions = [
    {
      path: "/dashboard",
      activeIcon: DashboardIconActive,
      icon: DashboardIcon,
      name: "Dashboard",
    },
    {
      path: "/orders",
      activeIcon: BagWhiteIcon,
      icon: BagIcon,
      name: "Orders",
      notifications: 3,
    },
    {
      path: "/customers",
      icon: TwoUserIcon,
      activeIcon: TwoUserIconWhite,
      name: "Customers",
    },
    {
      path: "/inventory",
      icon: FolderIcon,
      activeIcon: FolderIconWhite,
      name: "Inventory",
    },
    {
      path: "/conversations",
      icon: ChatIcon,
      activeIcon: ChatIconWhite,
      name: "Conversations",
    },
    {
      path: "/settings",
      icon: SettingIcon,
      activeIcon: SettingIconWhite,
      name: "Settings",
    },
  ];

  const isActive = (path) => {
    if (path === location.pathname) {
      return true;
    } else {
      return false;
    }
  };

  const toggleSideBar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className="flex">
      <div
        className={`${
          isSidebarOpen ? " w-[280px]" : "w-[88px]"
        } h-[100vh] duration-150`}
      >
        <div
          className={`${
            isSidebarOpen ? "pl-[35px]" : "pl-[20px]"
          }  pt-[14px] flex items-center gap-[5px] font-bold text-[1.25rem] leading-[1.875rem]`}
          onClick={toggleSideBar}
        >
          <img src={Logo} alt="Logo" />
          {isSidebarOpen && <h3>Metrix</h3>}
        </div>
        <div
          className={`${
            isSidebarOpen ? "mx-[1.25rem]" : "mx-[1rem]"
          } pt-[3.875rem] `}
        >
          <div>
            {sidebarOptions &&
              sidebarOptions.map((option) => (
                <NavLink
                  to={option.path}
                  className={`${
                    isSidebarOpen
                      ? "pl-[1rem]"
                      : "Pl-[13px] flex justify-center"
                  } link text-[#53545C] flex py-[1rem] items-center gap-[1rem] h-[3.5rem] relative`}
                  activeclassName="bg-[#5570F1] rounded-[0.75rem] text-[#ffffff]"
                >
                  <img
                    src={
                      isActive(option.path) ? option.activeIcon : option.icon
                    }
                    alt="DashboardIcon"
                  />
                  {option?.notifications && (
                    <span
                      className={`${
                        (isActive(option.path) || isSidebarOpen) && "hidden"
                      } absolute w-[1.5rem] h-[1.5rem] rounded-full bg-[#FFCC91] flex justify-center items-center text-[#1C1D22] font-normal text-[0.75rem] leading-4 top-[2px] right-[-3px]`}
                    >
                      {option?.notifications}
                    </span>
                  )}
                  {isSidebarOpen && (
                    <>
                      <p className="font-normal text-[14px] leading-4">
                        {option.name}
                      </p>
                      {option?.notifications && (
                        <span
                          className={`${
                            isActive(option.path) && "hidden"
                          } w-[1.5rem] h-[1.5rem] rounded-full bg-[#FFCC91] flex justify-center items-center text-[#1C1D22] font-normal text-[0.75rem] leading-4`}
                        >
                          {option?.notifications}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
          </div>
          <div
            className={`${
              !isSidebarOpen && "w-[56px]"
            } absolute bottom-0 duration-150`}
          >
            <div>
              <div className="bg-[#5E63661A] text-[#1C1D22] rounded-[1rem] flex items-center gap-[0.625rem] py-[0.6875rem] px-[1rem]">
                <img src={HeadphonesIcon} alt="HeadphonesIcon" />
                {isSidebarOpen && (
                  <p className="font-normal text-[0.875rem]">Contact Support</p>
                )}
              </div>
            </div>
            <div className="bg-[#FFF5E9] rounded-[1rem] py-[0.6875rem] px-[1.25rem] my-[1rem] px-[1rem]">
              <div
                className={`${
                  isSidebarOpen && "pb-[0.875rem]"
                } flex items-center font-normal text-[0.875rem] text-[#1C1D22] leading-4 gap-[1rem]`}
              >
                <img src={GiftIcon} alt="GiftIcon" />
                {isSidebarOpen && <p>Free Gift Awaits You!</p>}
              </div>
              {isSidebarOpen && (
                <div className="flex items-center font-normal text-[0.75rem] text-[#6E7079] leading-[0.9125rem] gap-[1rem]">
                  <p>Upgrade your account</p>
                  <img src={DownChevron} alt={DownChevron} />
                </div>
              )}
            </div>
            <div>
              <div
                className={`${
                  isSidebarOpen ? "px-[1.25rem]" : "flex justify-center"
                } text-[#CC5F5F] font-normal text-[0.875rem] leading-4 flex items-center gap-[1rem] py-[0.6875rem] mb-[1rem] `}
              >
                <img src={LogoutIcon} alt="LogoutIcon" />
                {isSidebarOpen && <p>Logout</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[calc(100vw-88px)] bg-[#ffffff] duration-150">
        <div className="py-[14px] px-[21px] flex justify-between">
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
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
