import React from "react";
import { PENDING } from "../utils/constants";
import Iphone12 from "../images/iphone12.png";
import Iphone13 from "../images/iphone13.png";

const OrderCard = ({ order }) => {
  return (
    <div>
      <div className="flex font-[Inter] gap-[1rem]">
        <img src={order.image} alt={order.image} />
        <div className="grow">
          <div className="flex justify-between items-between pb-[0.875rem]">
            <p className="font-normal text-[#45464E] text-[0.875rem] leading-4">
              {order.name}
            </p>
            <p className="font-normal text-[#A6A8B1] text-[0.75rem] leading-4">
              {order.date}
            </p>
          </div>
          <div className="flex justify-between items-between">
            <p className="font-medium text-[#33343A] text-[0.875rem] leading-4">
              {order.price}
            </p>
            <p
              className={`${
                order.status === PENDING
                  ? "bg-[#F57E771F] text-[#CC5F5F]"
                  : "bg-[#32936F1F] text-[#519C66]"
              } font-normal rounded-[0.5rem] text-[0.75rem] leading-4 py-[0.125rem] px-[0.9375rem]`}
            >
              {order.status}
            </p>
          </div>
        </div>
      </div>
      <div className="border-b border-[#F1F3F9] my-[0.675rem] bg-red-600" />
    </div>
  );
};

export default OrderCard;
