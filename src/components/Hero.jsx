/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { assets } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";

const Hero = () => {
  const {
    searchFilter,
    setSearchFilter,
    isSearched,
    setIsSearched,
    displayedSearch,
    setdisplayedSearch,
  } = useContext(AppContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchFilter((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSearch = () => {
    setdisplayedSearch((prev) => ({
      title: searchFilter.title || prev.title,
      location: searchFilter.location || prev.location,
    }));
    setIsSearched(true);
    setSearchFilter({ title: "", location: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Hero Container */}
      <div
        className="flex flex-col items-center justify-center border rounded-[15px] w-[1300px] h-[290px] mt-5"
        style={{
          background: "linear-gradient(90deg, #4f0487 0%, #130121 100%)",
        }}
      >
        {/* Hero Heading and Paragraph */}
        <div className="text-center">
          <h3 className="text-[30px] font-medium leading-[1.2] text-white font-sans">
            Over 10,000+ jobs to apply
          </h3>
          <p className="text-[14px] font-normal leading-[1.4] text-white font-sans mt-2.5">
            Your Next Big Career Move Starts Right Here - Explore the Best Job
            Opportunities and Take the First Step Toward Your Future!
          </p>
        </div>

        {/* Search Container */}
        <div className="flex items-center justify-center bg-white gap-2.5 p-1 rounded-[10px] mt-5">
          <img src={assets.search_icon} alt="Search" className="w-6 h-6" />
          <input
            onChange={handleChange}
            className="flex-1 p-2.5 border-none outline-none text-[14px] placeholder:text-lg"
            type="text"
            name="title"
            value={searchFilter.title}
            placeholder="Search for Jobs"
          />
          <p className="w-[1.5px] h-[15px] bg-[#9d9d9d]"></p>
          <img src={assets.location_icon} alt="Location" className="w-6 h-6" />
          <input
            onChange={handleChange}
            className="flex-1 p-2.5 border-none outline-none text-[14px] placeholder:text-lg"
            type="text"
            name="location"
            value={searchFilter.location}
            placeholder="Enter Location"
          />
          <button
            onClick={onSearch}
            className="w-[146px] h-[40px] bg-[#0260ff] rounded-[5px] text-white font-bold cursor-pointer hover:bg-[#0f3b86]"
          >
            Search
          </button>
        </div>
      </div>

      {/* Trusted By Banner */}
      <div
        className="flex items-center justify-evenly gap-5 w-[1300px] h-[80px] rounded-[8px] mt-5"
        style={{
          background: "#ffffff33",
          border: "1px solid #e1e1e1",
          boxShadow: "0px 4px 15px 0px #0000000d",
        }}
      >
        <p className="font-sans font-medium">Trusted By</p>
        <img
          src={assets.microsoft_logo}
          alt="Microsoft"
          className="w-[104px] h-[22.2px]"
        />
        <img
          src={assets.walmart_logo}
          alt="Walmart"
          className="w-[104px] h-[22.2px]"
        />
        <img
          src={assets.accenture_logo}
          alt="Accenture"
          className="w-[104px] h-[22.2px]"
        />
        <img
          src={assets.amazon_logo}
          alt="Amazon"
          className="w-[104px] h-[22.2px]"
        />
        <img
          src={assets.adobe_logo}
          alt="Adobe"
          className="w-[104px] h-[22.2px]"
        />
        <img
          src={assets.samsung_logo}
          alt="Samsung"
          className="w-[104px] h-[22.2px]"
        />
      </div>
    </div>
  );
};

export default Hero;
