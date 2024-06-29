import {
  ABANDONED_CART,
  ACTIVE,
  ALL_PRODUCTS,
  CUSTOMERS,
  DASHBOARD_INSITE_CARD,
} from "./constants";
import FolderIcon from "../icons/folder-purple.svg";
import CartIcon from "../icons/cart.svg";

export const dashboardInsiteCardData = [
  {
    type: DASHBOARD_INSITE_CARD,
    icon: FolderIcon,
    isActive: true,
    bg_color: "#5570F1",
    data: [
      {
        label: ALL_PRODUCTS,
        value: "45",
      },
      {
        label: ACTIVE,
        value: "32",
        change: "+24",
        change_color: "#DBDEEE",
      },
    ],
  },
  {
    type: DASHBOARD_INSITE_CARD,
    icon: CartIcon,
    isActive: false,
    bg_color: "#ffffff",
    data: [
      {
        label: ABANDONED_CART,
        value: "20%",
        change: "+0.00%",
        change_color: "#519C66",
        label_color: "#CC5F5F",
      },
      {
        label: CUSTOMERS,
        value: "30",
      },
    ],
  },
];
