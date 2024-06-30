import React, { useEffect, useState } from "react";
import { PieChart as PChart, Pie, Cell } from "recharts";
import ChevronDownIcon from "../icons/chevron-down.svg";
import { ACQUISITION, PURCHASE, RETENTION } from "../utils/constants";

const PieChart = () => {
  const pieData = [
    { name: RETENTION, value: 100 },
    { name: PURCHASE, value: 300 },
    { name: ACQUISITION, value: 600 },
  ];
  const COLORS = ["#97A5EB", "#FFCC91", "#5570F1"];
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div
      className={`relative bg-[#ffffff] w-auto rounded-[0.75rem] p-[1rem] mx-[0.4375rem] mb-[1.25rem] grow`}
    >
      <div>
        <div>
          <div className="flex justify-between pb-[0.75rem]">
            <div>
              <h1 className="font-medium text-[1rem] leading-5">Marketting</h1>
            </div>
            <div className="flex items-center gap-[0.4375rem]">
              <p
                className={`text-[#BEC0CA] leading-4 font-normal text-[0.75rem] font-[Inter]`}
              >
                This Week
              </p>
              <img src={ChevronDownIcon} alt="ChevronDownIcon" />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-[0.5rem]">
            <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-[#5570F1]"></div>
            <p className="text-[#A6A8B1] font-normal text-[0.6875rem]">
              {ACQUISITION}
            </p>
          </div>
          <div className="flex items-center gap-[0.5rem]">
            <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-[#97A5EB]"></div>
            <p className="text-[#A6A8B1] font-normal text-[0.6875rem]">
              {PURCHASE}
            </p>
          </div>
          <div className="flex items-center gap-[0.5rem]">
            <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-[#FFCC91]"></div>
            <p className="text-[#A6A8B1] font-normal text-[0.6875rem]">
              {RETENTION}
            </p>
          </div>
        </div>
      </div>
      <div className="p-[1.22rem] flex justify-center relative">
        <div className="w-[205px] h-[205px] rounded-full relative bg-[#EEF0FA]">
          <div className="w-[90px] h-[90px] rounded-full bg-[#ffffff] absolute top-[27%] left-[28%]"></div>
        </div>

        <div
          className={`absolute top-[6%] left-[${
            isSidebarOpen ? "19%" : "22%"
          }] z-10`}
        >
          <PChart width={205} height={205}>
            <Pie
              data={pieData}
              cx={116}
              cy={100}
              innerRadius={65}
              outerRadius={85}
              startAngle={90}
              endAngle={450}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PChart>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
