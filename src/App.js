import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DonorContributions from "./pages/DonorContributions";
import Allocations from "./pages/Allocations";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donor-contributions" element={<DonorContributions />} />
        <Route path="/allocations" element={<Allocations />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
