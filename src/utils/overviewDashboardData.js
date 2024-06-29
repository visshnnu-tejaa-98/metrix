import SplitPi from "../icons/split-pi.svg";
import TwoPeopleIcon from "../icons/two-user-orange-bg.svg";
import BagIcon from "../icons/bag-orange-bg.svg";
import {
  ACTIVE,
  ALL_ORDERS,
  COMPLETED,
  CUSTOMERS,
  LARGE_OVERVIEW_CARD,
  PENDING,
  SALES,
  SMALL_OVERVIEW_CARD,
  VOLUME,
} from "../utils/constants";

export const overviewDashboardData = [
  {
    type: SMALL_OVERVIEW_CARD,
    icon: SplitPi,
    bg_color: "#ffffff",
    data: [
      {
        label: SALES,
        value: "₦4,000,000.00",
      },
      {
        label: VOLUME,
        value: "450",
        change: "+20.00",
        change_color: "#519C66",
      },
    ],
  },
  {
    type: SMALL_OVERVIEW_CARD,
    icon: TwoPeopleIcon,
    bg_color: "#ffffff",
    data: [
      {
        label: CUSTOMERS,
        value: "1,250",
        change: "+15.80%",
        change_color: "#519C66",
      },
      {
        label: ACTIVE,
        value: "1,180",
        change: "+85%",
        change_color: "#519C66",
      },
    ],
  },
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
        value: "445",
      },
    ],
  },
];
