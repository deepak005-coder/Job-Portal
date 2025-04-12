/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */

// import React from "react";
// import { assets } from "../assets/assets.js";
// import "../components/NavBar.css";

// import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
// import { Link } from "react-router-dom";
// import Application from "../pages/Application.jsx";
// import { useNavigate } from "react-router-dom";
// const NavBar = () => {
//   const { openSignIn } = useClerk();
//   const { user } = useUser();
//   const navigate = useNavigate();
//   return (
//     <div className="nav-bar-container">
//       <div className="nav-logo-container">
//         <img
//           onClick={() => {
//             navigate(`/`);
//             scrollTo(0, 0);
//           }}
//           src={assets.logo}
//           alt=""
//         />
//       </div>

//       {user ? (
//         <div className="nav-button-container">
//           <div className="applied-job-btn">
//             <Link to={"/Application"} className="link">
//               Applied Jobs
//             </Link>
//           </div>

//           <p>|</p>
//           <p>Hi, {user.firstName + " " + user.lastName}</p>
//           <UserButton />
//         </div>
//       ) : (
//         <div className="nav-button-container">
//           <button className="recruite-btn">Recruiter Login</button>
//           <button onClick={openSignIn} className="reg-btn">
//             {" "}
//             Register{" "}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavBar;

import React from "react";
import { assets } from "../assets/assets.js";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={assets.logo}
            alt="Logo"
            className="h-10 cursor-pointer hover:scale-105 transition-transform"
            onClick={() => {
              navigate(`/`);
              scrollTo(0, 0);
            }}
          />
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-6">
          {user ? (
            <>
              <Link
                to="/Application"
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium hover:bg-blue-200 transition-colors"
              >
                Applied Jobs
              </Link>

              <span className="text-gray-700 font-medium">
                Hi, {user.firstName + " " + user.lastName}
              </span>

              <UserButton />
            </>
          ) : (
            <>
              <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors font-medium">
                Recruiter Login
              </button>

              <button
                onClick={openSignIn}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
