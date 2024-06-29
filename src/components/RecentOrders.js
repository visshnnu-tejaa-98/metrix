import React from "react";
import Iphone12 from "../images/iphone12.png";
import Iphone13 from "../images/iphone13.png";
import OrderCard from "./OrderCard";
import { orders } from "../utils/orders";

const RecentOrders = () => {
  return (
    <div
      className={`relative bg-[#ffffff] w-auto rounded-[0.75rem] p-[1rem] mx-[0.4375rem] mb-[1.25rem] grow`}
    >
      <p className="text-[#45464E] text-[1rem] font-medium font-[Inter] leading-5 pb-[0.895rem]">
        RecentOrders
      </p>
      {orders && orders.map((order) => <OrderCard order={order} />)}
    </div>
  );
};

export default RecentOrders;
