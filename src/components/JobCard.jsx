/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React from "react";
// import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
// const JobCard = ({ currentPage, jobsData }) => {
//   //console.log(jobsData);
//   const navigate = useNavigate();
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
//       {jobsData
//         .slice((currentPage - 1) * 6, currentPage * 6)
//         .map((jobsData, id) => (
//           <>
//             <div
//               key={id}
//               className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-[#E1E1E1]"
//             >
//               {/* Company Image */}
//               <div className="p-4 border-b">
//                 <img
//                   src={jobsData.companyId.image}
//                   alt={jobsData.companyId.name}
//                   className="w-10 h-10 object-cover rounded-full mx-auto"
//                 />
//               </div>

//               {/* Job Details */}
//               <div className="p-6">
//                 {/* Job Title */}
//                 <h1 className="text-xl font-semibold text-gray-800 mb-2">
//                   {jobsData.title}
//                 </h1>

//                 {/* Job Tags (Title and Location) */}
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   <span className="flex items-center bg-blue-100 text-grey-800 px-3 py-1.5 rounded-[5px] text-sm">
//                     {jobsData.location}
//                   </span>
//                   <span className="flex items-center bg-red-100 text-grey-800 px-3 py-1 rounded-[5px] text-sm">
//                     {jobsData.level}
//                   </span>
//                 </div>

//                 {/* Job Description */}
//                 <h4 className="text-gray-600 text-sm mb-6 line-clamp-3">
//                   {jobsData.description}
//                 </h4>

//                 {/* Buttons */}
//                 <div className="flex gap-3">
//                   <button
//                     onClick={() => {
//                       navigate(`/apply-jobs/${jobsData._id}`);
//                       scrollTo(0, 0);
//                     }}
//                     className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
//                   >
//                     Apply
//                   </button>
//                   <button
//                     onClick={() => {
//                       navigate(`/apply-jobs/${id}`);
//                       scrollTo(0, 0);
//                     }}
//                     className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-300"
//                   >
//                     Learn More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         ))}
//     </div>
//   );
// };
// JobCard.propTypes = {
//   jobsData: PropTypes.array.isRequired,
//   currentPage: PropTypes.number.isRequired,
// };

// export default JobCard;

import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const JobCard = ({ currentPage, jobsData }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobsData
        .slice((currentPage - 1) * 6, currentPage * 6)
        .map((jobsData, id) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-200"
          >
            {/* Company Image */}
            <div className="p-4 border-b flex justify-center">
              <img
                src={jobsData.companyId.image}
                alt={jobsData.companyId.name}
                className="w-12 h-12 object-cover rounded-full"
              />
            </div>

            {/* Job Details */}
            <div className="p-6">
              <h1 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                {jobsData.title}
              </h1>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-xs font-medium">
                  {jobsData.location}
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1.5 rounded-full text-xs font-medium">
                  {jobsData.level}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                {jobsData.description}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    navigate(`/apply-jobs/${jobsData._id}`);
                    scrollTo(0, 0);
                  }}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
                >
                  Apply
                </button>
                <button
                  onClick={() => {
                    navigate(`/apply-jobs/${id}`);
                    scrollTo(0, 0);
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm hover:bg-gray-300 transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

JobCard.propTypes = {
  jobsData: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default JobCard;
