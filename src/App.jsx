import "./App.css";
import React from "react";
import Home from "./components/Home";
import { HardCodeData } from "./data";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login2 from "./Pages/Login2";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login2" element={<Login2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
