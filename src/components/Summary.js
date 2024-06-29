import React from "react";
import ChevronDownIcon from "../icons/chevron-blue-down.svg";
import ChevronDownIconBlack from "../icons/chevron-down.svg";

export const Summary = () => {
  const summaryData = [
    {
      label: "Sep 10",
      value: 90,
    },
    {
      label: "Sep 11",
      value: 40,
    },
    {
      label: "Sep 12",
      value: 70,
    },
    {
      label: "Sep 13",
      value: 25,
    },
    {
      label: "Sep 14",
      value: 80,
    },
    {
      label: "Sep 15",
      value: 50,
    },
    {
      label: "Sep 16",
      value: 80,
    },
    // {
    //   label: "Sep 16",
    //   value: 80,
    // },
  ];
  return (
    <div
      className={`relative bg-[#ffffff] w-auto rounded-[0.75rem] p-[1rem] mx-[0.4375rem] mb-[1.25rem] grow`}
    >
      <div className="flex justify-between items-center pb-[2.0625rem]">
        <div className="flex items-center gap-[1.3125rem]">
          <p className="text-[#45464E] text-[1rem] font-medium font-[Inter] leading-5">
            Summary
          </p>
          <div className="w-[6.1875rem] h-[1.875rem] bg-[#5570F114] text-[#5570F1] rounded-[0.5rem] p-[0.75rem] flex justify-between items-center">
            <p className="text-[0.875rem] leading-4 font-normal">Sales</p>
            <img src={ChevronDownIcon} alt="ChevronDownIcon" />
          </div>
        </div>
        <div className="flex items-center gap-[0.4375rem]">
          <p
            className={`leading-4 font-normal text-[0.75rem] font-[Inter] text-[#1C1D22]`}
          >
            This Week
          </p>
          <img src={ChevronDownIconBlack} alt="ChevronDownIcon" />
        </div>
      </div>
      <div>
        <div className="flex justify-between h-[100%]">
          <div className="font-[Inter] font-normal text-[0.6875rem] leading-4 text-[#BEC0CA] flex flex-col">
            <p className="pb-[calc(15rem/7)]">100k</p>
            <p className="pb-[calc(15rem/7)]">80k</p>
            <p className="pb-[calc(15rem/7)]">60k</p>
            <p className="pb-[calc(15rem/7)]">40k</p>
            <p className="pb-[calc(15rem/7)]">20k</p>
          </div>
          {summaryData &&
            summaryData.map((d) => (
              <div className="relative text-center w-[2.5rem] flex flex-col items-center gap-[1.2rem]">
                <div className="h-[15rem] w-[0.8125rem] bg-[#EEF0FA] rounded-[3.125rem] relative">
                  <div
                    className={`h-[calc(100%-${d.value}%)] w-inherit bg-[#EEF0FA] rounded-[3.125rem]`}
                  ></div>
                  <div
                    className={`h-[${d.value}%] w-inherit bg-[#5570F1] rounded-[3.125rem]`}
                  ></div>
                </div>
                <p className="font-[Inter] font-normal text-[0.6875rem] leading-4 text-[#BEC0CA]">
                  {d.label}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
