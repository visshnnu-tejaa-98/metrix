import SplitPi from "../icons/split-pi.svg";
import TwoPeopleIcon from "../icons/two-user-orange-bg.svg";
import BagIcon from "../icons/bag-orange-bg.svg";
import CartIcon from "../icons/cart.svg";

import {
  ABANDONED_CART,
  ACTIVE,
  ALL_ORDERS,
  CANCELLED,
  COMPLETED,
  CUSTOMERS,
  DAMAGED,
  LARGE_OVERVIEW_CARD,
  PENDING,
  RETURNED,
  SALES,
  SMALL_OVERVIEW_CARD,
  VOLUME,
} from "../utils/constants";

export const overviewOrdersData = [
  {
    type: LARGE_OVERVIEW_CARD,
    icon: BagIcon,
    bg_color: "#ffffff",
    data: [
      {
        label: ALL_ORDERS,
        value: "450",
      },
      {
        label: PENDING,
        value: "5",
      },
      {
        label: COMPLETED,
        value: "320",
      },
    ],
  },
  {
    type: LARGE_OVERVIEW_CARD,
    icon: BagIcon,
    bg_color: "#ffffff",
    data: [
      {
        label: CANCELLED,
        value: "30",
        change: "-20%",
        change_color: "#CC5F5F",
      },
      {
        label: RETURNED,
        value: "20",
      },
      {
        label: DAMAGED,
        value: "5",
      },
    ],
  },

  {
    type: SMALL_OVERVIEW_CARD,
    icon: CartIcon,
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
