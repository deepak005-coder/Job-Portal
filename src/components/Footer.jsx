/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-8 lg:px-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Top Row - Logo, Copyright, Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Logo - Left */}
          <div className="md:flex-1 flex justify-start">
            <img
              src={assets.logo}
              alt="CineBuddy Logo"
              className="h-14 w-auto"
            />
          </div>

          {/* Copyright - Center */}
          <div className="md:flex-1 flex justify-center">
            <p className="text-gray-600 text-sm">
              Copyright © {new Date().getFullYear()} Deepak Gajwal | All rights
              reserved
            </p>
          </div>

          {/* Social Links - Right */}
          <div className="md:flex-1 flex justify-end gap-5">
            <a
              href="https://leetcode.com/u/Deepak_Gajwal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-yellow-500 transition-colors text-sm font-semibold px-3 py-1 rounded-md "
            >
              LeetCode
            </a>
            <a
              href="https://github.com/deepak005-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm font-semibold px-3 py-1 rounded-md hover:bg-gray-100"
            >
              GitHub
            </a>
            <a
              href="http://www.linkedin.com/in/deepak-gajwal-74610416b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors text-sm font-semibold px-3 py-1 rounded-md hover:bg-blue-50"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Row - Centered "Made by" */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Made with <span className="text-red-500">❤️</span> by Deepak Gajwal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
