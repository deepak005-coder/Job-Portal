/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ApplyJobs from "./pages/ApplyJobs";
import Application from "./pages/Application";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apply-jobs/:id" element={<ApplyJobs />} />
      <Route path="/application" element={<Application />} />
    </Routes>
  );
};

export default App;
