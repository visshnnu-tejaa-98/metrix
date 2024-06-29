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
import BagWhiteIcon from "../icons/bag-white.svg";

export const sidebarOptions = [
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
