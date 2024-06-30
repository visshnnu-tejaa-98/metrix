import React from "react";
import FilterIcon from "../icons/filter.svg";
import CalenderIcon from "../icons/calender.svg";
import SendIcon from "../icons/send.svg";
import ChevronDownBlack from "../icons/chevron-down-black.svg";
import ChevronDownGrey from "../icons/chevron-down-grey.svg";
import SearchBar from "./SearchBar";
import { ordersTableData } from "../utils/ordersTableData";
import { Table } from "antd";
import CopyIcon from "../icons/copy.svg";
import { COMPLETED, IN_PROGRESS, PENDING } from "../utils/constants";

export const CustomerOrders = () => {
  const columns = [
    {
      title: "Customer Name",
      dataIndex: "customer_name",
    },
    {
      title: "Order Date",
      dataIndex: "order_date",
    },
    {
      title: "Order Type",
      dataIndex: "order_type",
    },
    {
      title: "Tracking ID",
      dataIndex: "tracking_id",
      render: (tracking_id) => (
        <div>
          <div className="flex items-center gap-[0.5rem]">
            <p>{tracking_id}</p>
            <img src={CopyIcon} alt="CopyIcon" />
          </div>
        </div>
      ),
    },
    {
      title: "Order Total",
      dataIndex: "order_total",
    },
    {
      title: "Action",
      dataIndex: "status",
      render: (status) => (
        <div className="w-[109px] h-[23px] bg-[#5E636614] rounded-[0.5rem] flex justify-between px-[0.5rem] text-[0.75rem]">
          <p>{status}</p>
          <img src={ChevronDownGrey} alt="ChevronDownGrey" />
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <div
          className={`${
            status === PENDING
              ? "bg-[#FFF2E2]"
              : status === COMPLETED
              ? "bg-[#32936F29]"
              : "bg-[#5570F129]"
          } max-w-[85px] h-[23px] rounded-[0.5rem] px-[0.5rem] text-[0.75rem] flex justify-center items-center`}
        >
          <p className="">{status}</p>
        </div>
      ),
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  return (
    <div>
      <div
        className={`relative bg-[#ffffff] w-auto rounded-[0.75rem] p-[1rem] mx-[1rem] mb-[1.25rem] grow`}
      >
        <div className="text-[#45464E] flex justify-between items-center pb-[1rem]">
          <p className="font-[Inter] font-medium text-[1rem]">
            Customer Orders
          </p>
          <div className="flex relative gap-[1rem]">
            <SearchBar />
            <button className="w-[67px] h-[29px] border-[1px] text-[#53545C] border-[#53545C] rounded-[0.25rem] p-[0.5rem] flex items-center gap-[0.625rem]">
              <img src={FilterIcon} alt="FilterIcon" />
              <span className="font-[Inter] font-normal text-[0.6875rem] leading-4">
                Filter
              </span>
            </button>
            <button className="w-[67px] h-[29px] border-[1px] text-[#53545C] border-[#53545C] rounded-[0.25rem] p-[0.5rem] flex items-center gap-[0.625rem]">
              <img src={CalenderIcon} alt="CalenderIcon" />
              <span className="font-[Inter] font-normal text-[0.6875rem] leading-4">
                Filter
              </span>
            </button>
            <button className="w-[67px] h-[29px] border-[1px] text-[#53545C] border-[#53545C] rounded-[0.25rem] p-[0.5rem] flex items-center gap-[0.625rem]">
              <img src={SendIcon} alt="SendIcon" />
              <span className="font-[Inter] font-normal text-[0.6875rem] leading-4">
                Filter
              </span>
            </button>
            <button className="w-[99px] h-[29px] border-[1px] text-[#53545C] border-[#53545C] rounded-[0.25rem] p-[0.5rem] flex items-center gap-[0.375rem]">
              <span className="font-[Inter] font-normal text-[0.6875rem] leading-4">
                Bulk Action
              </span>
              <img src={ChevronDownBlack} alt="SendIcon" />
            </button>
          </div>
        </div>
        {/* table */}
        <Table
          columns={columns}
          dataSource={ordersTableData}
          scroll={{
            x: 1300,
          }}
          pagination={false}
          rowSelection={{
            ...rowSelection,
          }}
        />
        {/* Pagination */}
      </div>
    </div>
  );
};
