import React from "react";
import SearchIcon from "../icons/search.svg";

const SearchBar = () => {
  return (
    <div>
      <input
        className="text-[#53545C] h-[29px] border-[1px] p-[0.5rem] rounded-[0.25rem] focus:outline-none pl-[2.5rem]"
        type="text"
        placeholder="Search"
      />
      <img
        className="absolute left-[9px] top-[4px]"
        src={SearchIcon}
        alt="SearchIcon"
      />
    </div>
  );
};

export default SearchBar;
