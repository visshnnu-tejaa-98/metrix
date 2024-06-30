import React from "react";
import Breadgrums from "../components/Breadgrums";
import OverviewCard from "../components/OverviewCard";
import { overviewOrdersData } from "../utils/ordersDashboardData";
import AddIcon from "../icons/add-icon.svg";
import { CustomerOrders } from "../components/CustomerOrders";

const Orders = () => {
  return (
    <div className="bg-[#F4F5FA] h-[calc(100vh-62px)] overflow-scroll overflow-x-auto">
      <div className="sticky top-0 z-20">
        <Breadgrums />
      </div>
      <div className="flex justify-between items-center pt-[1rem] px-[1rem]">
        <p className="font-medium font-[Inter] text-[1rem] leading-5 text-[#45464E]">
          Orders Summary
        </p>
        <button className="bg-[#5570F1] rounded-[0.75rem] w-[200px] h-[36px] text-[#ffffff] flex items-center justify-center gap-[0.625rem]">
          <img src={AddIcon} alt="AddIcon" />
          <p className="text-[0.875rem]">Create a New Order</p>
        </button>
      </div>
      <div className="mx-[0.4375rem] mt-[0.875rem]">
        <div className="flex">
          {overviewOrdersData &&
            overviewOrdersData.map((data) => <OverviewCard data={data} />)}
        </div>
      </div>
      <CustomerOrders />
    </div>
  );
};

export default Orders;
