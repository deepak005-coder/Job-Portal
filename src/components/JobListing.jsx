// /* eslint-disable no-unused-vars */
// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import {
//   assets,
//   JobLocations,
//   JobCategories,
//   jobsData,
// } from "../assets/assets";

// import JobCard from "./JobCard";
// import { data } from "react-router-dom";

// const JobListing = (props) => {
//   const { isSearched, displayedSearch, setdisplayedSearch, jobs, setJobs } =
//     useContext(AppContext);

//   //const [categoryFilter, setCategoryFilter] = useState([]);
//   const [dataList, setDataList] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedCategory, setSelectedCategory] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState([]);
//   const [searchedJob, setSearchedJob] = useState("");
//   const [searchedLocation, setSearchedLocation] = useState("");
//   const [filteredData, setFilteredData] = useState(jobs);
//   const removeFilter = (type) => {
//     setdisplayedSearch((prev) => ({ ...prev, [type]: "" }));
//   };
//   const [jobData, setJobData] = useState([]);

//   const filterCategoryHandler = (category) => {
//     setSelectedCategory((prev) => {
//       return prev.includes(category)
//         ? prev.filter((cat) => category !== cat)
//         : [...prev, category];
//     });
//   };

//   const filterLocationHandler = (location) => {
//     setSelectedLocation((prev) => {
//       return prev.includes(location)
//         ? prev.filter((loc) => location !== loc)
//         : [...prev, location];
//     });
//   };

//   useEffect(() => {
//     const filtered = jobs.filter((job) => {
//       const categoryMatch =
//         selectedCategory.length === 0 ||
//         selectedCategory.includes(job.category);
//       const locationMatch =
//         selectedLocation.length === 0 ||
//         selectedLocation.includes(job.location);

//       const searchedJobs =
//         displayedSearch.title === "" ||
//         displayedSearch.title.toLowerCase().includes(job.title.toLowerCase());

//       const searchedLocations =
//         displayedSearch.location === "" ||
//         displayedSearch.location
//           .toLowerCase()
//           .includes(job.location.toLowerCase());
//       return (
//         categoryMatch && locationMatch && searchedJobs && searchedLocations
//       );
//     });

//     setFilteredData(filtered);
//     setCurrentPage(1);
//   }, [jobs, selectedCategory, selectedLocation, displayedSearch]);

//   const pageClickHandler = (index) => {
//     setCurrentPage(index + 1);
//   };

//   function toTitleCase(str) {
//     return str
//       .toLowerCase() // Convert everything to lowercase first
//       .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
//   }

//   return (
//     <div className="flex p-6 space-x-6">
//       {/* Sidebar */}

//       <div className="w-1/5 bg-white p-6 rounded-lg ">
//         {isSearched && (displayedSearch.title || displayedSearch.location) && (
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-4">Current Jobs</h3>
//             <div className="flex flex-wrap gap-2 ">
//               {displayedSearch.title && (
//                 <span className="flex items-center bg-blue-100 text-grey-800 px-3 py-1.5 rounded-[5px] text-sm">
//                   {toTitleCase(displayedSearch.title)}
//                   <img
//                     src={assets.cross_icon}
//                     alt="Remove Title"
//                     className="ml-2 cursor-pointer"
//                     onClick={() => removeFilter("title")}
//                   />
//                 </span>
//               )}

//               {displayedSearch.location && (
//                 <span className="flex items-center bg-red-100 text-grey-800 px-3 py-1.5 rounded-[5px] text-sm">
//                   {toTitleCase(displayedSearch.location)}
//                   <img
//                     src={assets.cross_icon}
//                     alt="Remove Location"
//                     className="ml-2 cursor-pointer"
//                     onClick={() => removeFilter("location")}
//                   />
//                 </span>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Search By Category */}
//         <div className="mb-6">
//           <h4 className="text-lg font-semibold mb-4">Search By Category</h4>
//           {JobCategories.map((category, idx) => (
//             <div key={idx} className="flex items-center mb-2">
//               <input
//                 onChange={() => filterCategoryHandler(category)}
//                 checked={selectedCategory.includes(category)}
//                 type="checkbox"
//                 className="mr-2 w-4 h-4"
//               />
//               <span>{category}</span>
//             </div>
//           ))}
//         </div>

//         {/* Search By Location */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4 pt-5">
//             Search By Location
//           </h4>
//           {JobLocations.map((location, idx) => (
//             <div key={idx} className="flex items-center mb-2">
//               <input
//                 onChange={() => filterLocationHandler(location)}
//                 checked={selectedLocation.includes(location)}
//                 type="checkbox"
//                 className="mr-2 w-4 h-4"
//               />
//               <span>{location}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Job Display */}
//       <div id="jobsData" className=" w-3/4 bg-white p-6 rounded-lg ">
//         <h1 className="text-2xl font-bold mb-2 ">Latest Jobs</h1>
//         <p className="text-gray-600 mb-6">
//           Get your desired job from top companies
//         </p>

//         {/* Job Listings */}
//         <div className="space-y-4 ">
//           <JobCard currentPage={currentPage} jobsData={filteredData} />
//         </div>

//         {/* Pagination */}

//         {filteredData.length > 0 && (
//           <div className="flex justify-center mt-10">
//             <a href="#jobsData">
//               <button
//                 onClick={() =>
//                   setCurrentPage(
//                     currentPage > 1
//                       ? currentPage - 1
//                       : Math.ceil(filteredData.length / 6)
//                   )
//                 }
//                 className="px-4 py-2 mx-1 border rounded-md bg-gray-200 hover:bg-gray-400"
//               >
//                 {"<"}
//               </button>
//             </a>

//             {Array.from({ length: Math.ceil(filteredData.length / 6) }).map(
//               (_, index) => {
//                 return (
//                   <>
//                     <a href="#jobsData">
//                       <button
//                         className={`px-4 py-2 mx-1 border rounded-md ${
//                           currentPage === index + 1
//                             ? "bg-blue-500 text-white"
//                             : "bg-gray-200 text-black"
//                         } hover:bg-blue-500`}
//                         onClick={() => pageClickHandler(index)}
//                       >
//                         {index + 1}
//                       </button>
//                     </a>
//                   </>
//                 );
//               }
//             )}

//             <a href="#jobsData">
//               <button
//                 className="px-4 py-2 mx-1 border rounded-md bg-gray-200 hover:bg-gray-400"
//                 onClick={() =>
//                   setCurrentPage(
//                     currentPage === Math.ceil(filteredData.length / 6)
//                       ? 1
//                       : currentPage + 1
//                   )
//                 }
//               >
//                 {">"}
//               </button>
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobListing;

/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import {
  assets,
  JobLocations,
  JobCategories,
  jobsData,
} from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = (props) => {
  const { isSearched, displayedSearch, setdisplayedSearch, jobs, setJobs } =
    useContext(AppContext);

  const [dataList, setDataList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [searchedJob, setSearchedJob] = useState("");
  const [searchedLocation, setSearchedLocation] = useState("");
  const [filteredData, setFilteredData] = useState(jobs);
  const [jobData, setJobData] = useState([]);

  const removeFilter = (type) => {
    setdisplayedSearch((prev) => ({ ...prev, [type]: "" }));
  };

  const filterCategoryHandler = (category) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => category !== cat)
        : [...prev, category]
    );
  };

  const filterLocationHandler = (location) => {
    setSelectedLocation((prev) =>
      prev.includes(location)
        ? prev.filter((loc) => location !== loc)
        : [...prev, location]
    );
  };

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const categoryMatch =
        selectedCategory.length === 0 ||
        selectedCategory.includes(job.category);
      const locationMatch =
        selectedLocation.length === 0 ||
        selectedLocation.includes(job.location);
      const searchedJobs =
        displayedSearch.title === "" ||
        displayedSearch.title.toLowerCase().includes(job.title.toLowerCase());
      const searchedLocations =
        displayedSearch.location === "" ||
        displayedSearch.location
          .toLowerCase()
          .includes(job.location.toLowerCase());

      return (
        categoryMatch && locationMatch && searchedJobs && searchedLocations
      );
    });

    setFilteredData(filtered);
    setCurrentPage(1);
  }, [jobs, selectedCategory, selectedLocation, displayedSearch]);

  const pageClickHandler = (index) => {
    setCurrentPage(index + 1);
  };

  function toTitleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 md:p-6">
      {/* Sidebar */}
      <div className="lg:w-1/4 w-full bg-white p-4 md:p-6 rounded-lg border ">
        {isSearched && (displayedSearch.title || displayedSearch.location) && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Current Jobs</h3>
            <div className="flex flex-wrap gap-2">
              {displayedSearch.title && (
                <span className="flex items-center bg-blue-100 text-gray-800 px-3 py-1.5 rounded-md text-sm">
                  {toTitleCase(displayedSearch.title)}
                  <img
                    src={assets.cross_icon}
                    alt="Remove Title"
                    className="ml-2 cursor-pointer w-4 h-4"
                    onClick={() => removeFilter("title")}
                  />
                </span>
              )}
              {displayedSearch.location && (
                <span className="flex items-center bg-red-100 text-gray-800 px-3 py-1.5 rounded-md text-sm">
                  {toTitleCase(displayedSearch.location)}
                  <img
                    src={assets.cross_icon}
                    alt="Remove Location"
                    className="ml-2 cursor-pointer w-4 h-4"
                    onClick={() => removeFilter("location")}
                  />
                </span>
              )}
            </div>
          </div>
        )}

        {/* Search By Category */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-4">Search By Category</h4>
          {JobCategories.map((category, idx) => (
            <div key={idx} className="flex items-center mb-2">
              <input
                onChange={() => filterCategoryHandler(category)}
                checked={selectedCategory.includes(category)}
                type="checkbox"
                className="mr-2 w-4 h-4"
              />
              <span className="text-sm">{category}</span>
            </div>
          ))}
        </div>

        {/* Search By Location */}
        <div>
          <h4 className="text-lg font-semibold mb-4 pt-2">
            Search By Location
          </h4>
          {JobLocations.map((location, idx) => (
            <div key={idx} className="flex items-center mb-2">
              <input
                onChange={() => filterLocationHandler(location)}
                checked={selectedLocation.includes(location)}
                type="checkbox"
                className="mr-2 w-4 h-4"
              />
              <span className="text-sm">{location}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Job Display */}
      <div
        id="jobsData"
        className="flex-1 w-full bg-white p-4 md:p-6 rounded-lg border "
      >
        <h1 className="text-2xl font-bold mb-2">Latest Jobs</h1>
        <p className="text-gray-600 mb-6">
          Get your desired job from top companies
        </p>

        {/* Job Listings */}
        <div className="space-y-4">
          <JobCard currentPage={currentPage} jobsData={filteredData} />
        </div>

        {/* Pagination */}
        {filteredData.length > 0 && (
          <div className="flex flex-wrap justify-center mt-10 gap-2">
            <a href="#jobsData">
              <button
                onClick={() =>
                  setCurrentPage(
                    currentPage > 1
                      ? currentPage - 1
                      : Math.ceil(filteredData.length / 6)
                  )
                }
                className="px-3 py-2 border rounded-md bg-gray-200 hover:bg-gray-300 text-sm"
              >
                {"<"}
              </button>
            </a>

            {Array.from({ length: Math.ceil(filteredData.length / 6) }).map(
              (_, index) => (
                <a href="#jobsData" key={index}>
                  <button
                    className={`px-3 py-2 border rounded-md text-sm ${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    } hover:bg-blue-500 hover:text-white transition`}
                    onClick={() => pageClickHandler(index)}
                  >
                    {index + 1}
                  </button>
                </a>
              )
            )}

            <a href="#jobsData">
              <button
                className="px-3 py-2 border rounded-md bg-gray-200 hover:bg-gray-300 text-sm"
                onClick={() =>
                  setCurrentPage(
                    currentPage === Math.ceil(filteredData.length / 6)
                      ? 1
                      : currentPage + 1
                  )
                }
              >
                {">"}
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListing;
