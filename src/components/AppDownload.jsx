/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-gray-200 rounded-2xl max-w-7xl mx-auto p-8 my-10 shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text and Download Buttons */}
        <div className="text-center md:text-left space-y-6 max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Download our mobile app for better experience
          </h1>
          <p className="text-gray-600 text-lg">
            Enjoy seamless browsing, personalized recommendations, and faster
            performance on the go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <img
              src={assets.play_store}
              alt="Get on Google Play"
              className="h-12 w-auto"
            />

            <img
              src={assets.app_store}
              alt="Download on App Store"
              className="h-12 w-auto"
            />
          </div>
        </div>

        {/* App Preview Image */}
        <div className="flex-shrink-0">
          <img
            className="w-72 md:w-80 lg:w-96 h-[300px] "
            src={assets.app_main_img}
            alt="App preview"
          />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
