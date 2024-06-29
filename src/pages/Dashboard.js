import React from "react";
import Breadgrums from "../components/Breadgrums";
import OverviewCard from "../components/OverviewCard";
import BarChart from "../images/barChart.png";
import { overviewDashboardData } from "../utils/overviewDashboardData";
import { dashboardInsiteCardData } from "../utils/dashboardInsiteData";
import PieChart from "../components/PieChart";
import RecentOrders from "../components/RecentOrders";
import { Summary } from "../components/Summary";

const Dashboard = () => {
  return (
    <div className="bg-[#F4F5FA] h-[calc(100vh-62px)] overflow-scroll overflow-x-auto">
      <div className="sticky top-0 z-20">
        <Breadgrums />
      </div>
      <div className="mx-[0.4375rem] mt-[0.875rem]">
        <div className="flex">
          {overviewDashboardData &&
            overviewDashboardData.map((data) => <OverviewCard data={data} />)}
        </div>

        {/* Layout */}
        <div className="w-[100%] flex">
          {/* left div */}
          <div className="w-[60%] h-[50vh] flex flex-col">
            <div className="block w-[100%]">
              <div className="flex">
                {/* pie chart */}
                <div className="w-[50%]">
                  <PieChart />
                </div>
                {/* cards */}
                <div className="w-[50%] flex flex-col">
                  {dashboardInsiteCardData &&
                    dashboardInsiteCardData.map((item) => (
                      <OverviewCard data={item} />
                    ))}
                </div>
              </div>
            </div>
            {/* bar graph */}
            <div className="h-[50vh]">
              <Summary />
            </div>
          </div>
          {/* Recent orders */}
          <div className="w-[40%]">
            <RecentOrders />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
