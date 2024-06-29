import React from "react";

import ChevronDownIcon from "../icons/chevron-down.svg";
import { LARGE_OVERVIEW_CARD, DASHBOARD_INSITE_CARD } from "../utils/constants";

const OverviewCard = ({ data }) => {
  return (
    <div
      className={`${
        data.type === LARGE_OVERVIEW_CARD ? "w-[40%]" : "w-[30%]"
      } bg-[${data.bg_color}] ${
        data.type === DASHBOARD_INSITE_CARD ? "w-auto" : "min-w-[321px]"
      }  rounded-[0.75rem] p-[1rem] mx-[0.4375rem] mb-[1.25rem] grow`}
    >
      <div>
        <div className="flex justify-between">
          <div>
            <img src={data.icon} alt="SplitPi" />
          </div>
          <div className="flex items-center gap-[0.4375rem]">
            <p
              className={`${
                data.isActive === true ? "text-[#ffffff]" : "text-[#BEC0CA]"
              } leading-4 font-normal text-[0.75rem] font-[Inter]`}
            >
              This Week
            </p>
            <img src={ChevronDownIcon} alt="ChevronDownIcon" />
          </div>
        </div>
        <div
          className={`pt-[2rem] grid ${
            data.type === LARGE_OVERVIEW_CARD ? "grid-cols-3" : "grid-cols-2"
          } `}
        >
          {data.data &&
            data.data.map((i) => (
              <div>
                <p
                  className={`${
                    data.isActive === true ? "text-[#ffffff]" : "text-[#BEC0CA]"
                  } ${
                    i.label_color && `text-[${i.label_color}]`
                  } leading-4 font-normal text-[0.875rem] font-[Inter] pb-[0.4375rem] leading-[1rem]`}
                >
                  {i.label}
                </p>
                <div className="flex items-center gap-[0.4375rem]">
                  <h3
                    className={`${
                      data.isActive === true
                        ? "text-[#ffffff]"
                        : "text-[#45464E]"
                    } font-medium text-[1.25rem] leading-[30px]`}
                  >
                    {i.value}
                  </h3>
                  {i.change && (
                    <span
                      className={`leading-4 font-normal text-[0.75rem] text-[${i.change_color}]`}
                    >
                      {i?.change}
                    </span>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
