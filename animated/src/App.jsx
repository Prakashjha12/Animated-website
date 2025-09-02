import React, { useRef } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agents from "./pages/Agents";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div className="bg-black text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Agents" element={<Agents />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default App;
