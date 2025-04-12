// /* eslint-disable no-unused-vars */
// import React, { useContext, useEffect, useState } from "react";
// import NavBar from "../components/NavBar";
// import { useParams } from "react-router-dom";
// import { assets } from "../assets/assets.js";
// import { AppContext } from "../context/AppContext.jsx";
// import JobCard from "../components/JobCard.jsx";
// import moment from "moment";
// import Footer from "../components/Footer.jsx";

// const ApplyJobs = () => {
//   let { id } = useParams();
//   const [jobData, setJobData] = useState(null);
//   const { jobs } = useContext(AppContext);

//   useEffect(() => {
//     if (jobs.length > 0) {
//       const data = jobs.filter((job) => job._id === id.toString());
//       if (data.length > 0) {
//         setJobData(data[0]);
//       } else {
//         console.error("Job not found with ID:", id);
//       }
//     }
//   }, [id, jobs]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <NavBar />
//       {jobData && jobData.companyId ? (
//         <div className="flex items-center justify-center p-6 mt-4 ">
//           <div
//             className="w-[1300px] h-[250px] rounded-[10px] border border-[#0260FF] bg-[#F2F7FF] p-8"
//             style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
//           >
//             <div className="flex justify-between h-full items-center">
//               {/* Left Content */}
//               <div className="flex items-center gap-6 h-full">
//                 {/* Company Logo - Larger size */}
//                 <img
//                   src={jobData.companyId.image}
//                   alt="Company Logo"
//                   className="h-20 w-20 object-contain"
//                 />

//                 {/* Job Info */}
//                 <div className="flex flex-col justify-center h-full">
//                   {/* Job Title - Larger and bolder */}
//                   <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
//                     {jobData.title}
//                   </h1>

//                   {/* Job Details - More prominent */}
//                   <div className="flex gap-6">
//                     <span className="flex items-center text-lg font-medium text-gray-700">
//                       <img
//                         src={assets.suitcase_icon}
//                         alt="Location"
//                         className="w-5 h-5 mr-2"
//                       />
//                       {jobData.companyId.name}
//                     </span>
//                     <span className="flex items-center text-lg font-medium text-gray-700">
//                       <img
//                         src={assets.location_icon}
//                         alt="Location"
//                         className="w-5 h-5 mr-2"
//                       />
//                       {jobData.location}
//                     </span>
//                     <span className="flex items-center text-lg font-medium text-gray-700">
//                       <img
//                         src={assets.person_icon}
//                         alt="Level"
//                         className="w-5 h-5 mr-2"
//                       />
//                       {jobData.level}
//                     </span>
//                     <span className="flex items-center text-lg font-medium text-gray-700">
//                       <img
//                         src={assets.money_icon}
//                         alt="Salary"
//                         className="w-5 h-5 mr-2"
//                       />
//                       ₹{jobData.salary}/month
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Content */}
//               <div className="flex flex-col items-end h-full justify-center">
//                 <button className="bg-[#0260FF] text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg font-bold">
//                   Apply now
//                 </button>
//                 <p className="text-sm text-gray-500 mt-2">
//                   Posted {moment(jobData.date).fromNow()}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="max-w-4xl mx-auto p-6">
//           <p>Loading job details...</p>
//         </div>
//       )}

//       {/* side left desc and responbility  */}
//       <div className="flex flex-col lg:flex-row justify-between items-start p-10 ml-2">
//         <div className="w-full lg:w-2/3">
//           <h2 className="font-bold text-2xl mb-4">Job description</h2>
//           <div
//             className="rich-text"
//             dangerouslySetInnerHTML={{ __html: jobData?.description }}
//           ></div>
//           <button
//             // onClick={applyHandler}
//             className="bg-blue-600 p-2.5 px-10 text-white rounded mt-10"
//           >
//             ApplyNow
//             {/* {isAlreadyApplied ? "Already Applied" : "Apply Now"} */}
//           </button>
//         </div>
//         {/* Right Section More Jobs */}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default ApplyJobs;
/* eslint-disable no-unused-vars */

import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx";
import JobCard from "../components/JobCard.jsx";
import moment from "moment";
import Footer from "../components/Footer.jsx";

const ApplyJobs = () => {
  let { id } = useParams();
  const [jobData, setJobData] = useState(null);
  const { jobs } = useContext(AppContext);

  useEffect(() => {
    if (jobs.length > 0) {
      const data = jobs.filter((job) => job._id === id.toString());
      if (data.length > 0) {
        setJobData(data[0]);
      } else {
        console.error("Job not found with ID:", id);
      }
    }
  }, [id, jobs]);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      {jobData && jobData.companyId ? (
        <div className="flex items-center  justify-center p-4 sm:p-6 mt-4">
          <div className="w-full max-w-7xl  min-h-[250px] rounded-lg border border-[#0260FF] bg-[#F2F7FF] p-6 sm:p-8 shadow-md">
            <div className="flex flex-col lg:flex-row justify-between h-full items-center pt-11 gap-6">
              {/* Left Content */}
              <div className="flex items-center gap-6 w-full lg:w-auto">
                <img
                  src={jobData.companyId.image}
                  alt="Company Logo"
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                />

                <div className="flex flex-col">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                    {jobData.title}
                  </h1>

                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center text-base font-medium text-gray-700">
                      <img
                        src={assets.suitcase_icon}
                        alt="Location"
                        className="w-5 h-5 mr-2"
                      />
                      {jobData.companyId.name}
                    </span>
                    <span className="flex items-center text-base font-medium text-gray-700">
                      <img
                        src={assets.location_icon}
                        alt="Location"
                        className="w-5 h-5 mr-2"
                      />
                      {jobData.location}
                    </span>
                    <span className="flex items-center text-base font-medium text-gray-700">
                      <img
                        src={assets.person_icon}
                        alt="Level"
                        className="w-5 h-5 mr-2"
                      />
                      {jobData.level}
                    </span>
                    <span className="flex items-center text-base font-medium text-gray-700">
                      <img
                        src={assets.money_icon}
                        alt="Salary"
                        className="w-5 h-5 mr-2"
                      />
                      ₹{jobData.salary}/month
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col items-end w-full lg:w-auto">
                <button className="bg-[#0260FF] text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md hover:bg-blue-700 transition-colors text-base sm:text-lg font-bold w-full lg:w-auto">
                  Apply now
                </button>
                <p className="text-sm text-gray-500 mt-2 text-right w-full lg:w-auto">
                  Posted {moment(jobData.date).fromNow()}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto p-6">
          <p>Loading job details...</p>
        </div>
      )}

      {/* Job Description and Apply */}
      <div className="flex flex-col lg:flex-row justify-between items-start p-10 ml-2">
        {" "}
        <div className="w-full lg:w-2/3">
          <h2 className="font-bold text-2xl mb-4">Job description</h2>
          <div
            className="rich-text"
            dangerouslySetInnerHTML={{ __html: jobData?.description }}
          ></div>
          <button
            // onClick={applyHandler}
            className="bg-blue-600 p-2.5 px-10 text-white rounded mt-10"
          >
            ApplyNow
            {/* {isAlreadyApplied ? "Already Applied" : "Apply Now"} */}
          </button>
        </div>
        {/* Right Section More Jobs */}
      </div>

      <Footer />
    </div>
  );
};

export default ApplyJobs;
