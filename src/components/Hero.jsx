/* eslint-disable no-unused-vars */
// import React, { useContext } from "react";
// import { assets } from "../assets/assets.js";
// import { AppContext } from "../context/AppContext.jsx";

// const Hero = () => {
//   const {
//     searchFilter,
//     setSearchFilter,
//     isSearched,
//     setIsSearched,
//     displayedSearch,
//     setdisplayedSearch,
//   } = useContext(AppContext);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setSearchFilter((prev) => {
//       return { ...prev, [name]: value };
//     });
//   };

//   const onSearch = () => {
//     setdisplayedSearch((prev) => ({
//       title: searchFilter.title || prev.title,
//       location: searchFilter.location || prev.location,
//     }));
//     setIsSearched(true);
//     setSearchFilter({ title: "", location: "" });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
//       {/* Hero Container */}
//       <div
//         className="flex flex-col items-center justify-center w-full max-w-6xl rounded-xl h-64 md:h-72 mt-5 p-6"
//         style={{
//           background: "linear-gradient(90deg, #4f0487 0%, #130121 100%)",
//         }}
//       >
//         {/* Hero Heading and Paragraph */}
//         <div className="text-center max-w-2xl">
//           <h3 className="text-2xl md:text-3xl font-medium leading-snug text-white">
//             Over 10,000+ jobs to apply
//           </h3>
//           <p className="text-sm md:text-base font-normal leading-relaxed text-white mt-2">
//             Your Next Big Career Move Starts Right Here - Explore the Best Job
//             Opportunities and Take the First Step Toward Your Future!
//           </p>
//         </div>

//         {/* Search Container */}
//         <div className="flex flex-col sm:flex-row items-center w-full max-w-2xl bg-white gap-2 p-1 rounded-lg mt-5">
//           <div className="flex items-center w-full sm:w-auto">
//             <img
//               src={assets.search_icon}
//               alt="Search"
//               className="w-5 h-5 ml-2"
//             />
//             <input
//               onChange={handleChange}
//               className="flex-1 p-2 border-none outline-none text-sm placeholder:text-gray-400 w-full"
//               type="text"
//               name="title"
//               value={searchFilter.title}
//               placeholder="Search for Jobs"
//             />
//           </div>

//           <div className="hidden sm:block w-px h-6 bg-gray-300"></div>

//           <div className="flex items-center w-full sm:w-auto">
//             <img
//               src={assets.location_icon}
//               alt="Location"
//               className="w-5 h-5 ml-2"
//             />
//             <input
//               onChange={handleChange}
//               className="flex-1 p-2 border-none outline-none text-sm placeholder:text-gray-400 w-full"
//               type="text"
//               name="location"
//               value={searchFilter.location}
//               placeholder="Enter Location"
//             />
//           </div>

//           <button
//             onClick={onSearch}
//             className="w-full sm:w-36 h-10 bg-blue-600 rounded text-white font-bold cursor-pointer hover:bg-blue-700 transition-colors mt-2 sm:mt-0"
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Trusted By Banner */}
//       <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-6xl h-auto sm:h-20 rounded-lg mt-5 p-4 bg-white bg-opacity-20 border border-gray-200 shadow-sm">
//         <p className="font-medium text-white">Trusted By</p>
//         <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
//           {[
//             assets.microsoft_logo,
//             assets.walmart_logo,
//             assets.accenture_logo,
//             assets.amazon_logo,
//             assets.adobe_logo,
//             assets.samsung_logo,
//           ].map((logo, index) => (
//             <img
//               key={index}
//               src={logo}
//               alt="Company Logo"
//               className="h-5 sm:h-6 w-auto opacity-80 hover:opacity-100 transition-opacity"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

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
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Hero Container */}
      <div
        className="flex flex-col items-center justify-center w-full max-w-7xl rounded-2xl h-auto md:h-80 mt-6 p-6 sm:p-10 shadow-lg"
        style={{
          background: "linear-gradient(90deg, #4f0487 0%, #130121 100%)",
        }}
      >
        {/* Hero Heading and Paragraph */}
        <div className="text-center max-w-2xl">
          <h3 className="text-2xl md:text-4xl font-semibold text-white">
            Over 10,000+ jobs to apply
          </h3>
          <p className="text-sm md:text-base text-white mt-3 opacity-90">
            Your Next Big Career Move Starts Right Here — Explore the Best Job
            Opportunities and Take the First Step Toward Your Future!
          </p>
        </div>

        {/* Search Container */}
        <div className="flex flex-col sm:flex-row items-stretch w-full max-w-2xl bg-white gap-2 p-2 sm:p-3 rounded-xl mt-6 shadow-md">
          <div className="flex items-center bg-white rounded-lg px-3 py-2 flex-1">
            <img
              src={assets.search_icon}
              alt="Search"
              className="w-5 h-5 mr-2"
            />
            <input
              onChange={handleChange}
              className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-gray-500"
              type="text"
              name="title"
              value={searchFilter.title}
              placeholder="Search for Jobs"
            />
          </div>

          <div className="flex items-center bg-white rounded-lg px-3 py-2 flex-1">
            <img
              src={assets.location_icon}
              alt="Location"
              className="w-5 h-5 mr-2"
            />
            <input
              onChange={handleChange}
              className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-gray-500"
              type="text"
              name="location"
              value={searchFilter.location}
              placeholder="Enter Location"
            />
          </div>

          <button
            onClick={onSearch}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      {/* Trusted By Banner */}
      <div className="w-full max-w-7xl mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-md px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-black font- text-sm sm:text-base mb-2 sm:mb-0 whitespace-nowrap">
            Trusted By
          </p>
          <div className="flex flex-wrap justify-evenly gap-2 sm:gap-6 w-full">
            {[
              assets.microsoft_logo,
              assets.walmart_logo,
              assets.accenture_logo,
              assets.amazon_logo,
              assets.adobe_logo,
              assets.samsung_logo,
            ].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Company Logo ${index}`}
                className="h-5 sm:h-6 max-w-[100px] object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
