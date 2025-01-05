import React, { useState } from "react";
import logo from "/svg/logo.svg";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SettingsIcon from "@mui/icons-material/Settings";
import CallIcon from "@mui/icons-material/Call";
import LogoutIcon from "@mui/icons-material/Logout";
import CachedIcon from "@mui/icons-material/Cached";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon
import Database from "/png/database.png";
import { HardCodeData } from "../data.js";
import { Link } from "react-router-dom";
import Register from "./Register.jsx";
export default function Home() {
  const [selectedValue, setSelectedValue] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleChange(e) {
    setSelectedValue(e.target.value);
  }

  function toggleSidebar() {
    setIsSidebarOpen((prev) => !prev);
  }

  return (
    <div className="flex h-full w-full">
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-white z-50 ">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-8" />
          <h1 className="text-2xl font-extrabold">CodeAnt AI</h1>
        </div>
        <button
          onClick={toggleSidebar}
          className="text-gray-700 focus:outline-none md:hidden"
        >
          {isSidebarOpen ? (
            <CloseIcon sx={{ fontSize: 30 }} />
          ) : (
            <MenuIcon sx={{ fontSize: 30 }} />
          )}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full bg-white text-zinc-900 p-4 z-40 shadow-md transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-y-0" : "-translate-y-full"
        } md:static md:translate-y-0 md:w-1/5`}
      >
        <select
          value={selectedValue}
          onChange={handleChange}
          className="py-1 px-5 mt-16 mb-5 w-full rounded-lg border-2 border-gray-500"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <ul className="flex flex-col gap-2 font-medium">
          <li className="flex items-center gap-2 px-5 py-2 text-lg cursor-pointer hover:bg-blue-500 hover:text-white hover:rounded-md">
            <HomeIcon sx={{ fontSize: 30 }} />
            Repositories
          </li>
          <li className="flex items-center gap-2 px-5 py-2 text-lg cursor-pointer hover:bg-blue-500 hover:text-white hover:rounded-md">
            <CodeIcon sx={{ fontSize: 30 }} />
            AI Code Review
          </li>
          <li className="flex items-center gap-2 px-5 py-2 text-lg cursor-pointer hover:bg-blue-500 hover:text-white hover:rounded-md">
            <CloudOutlinedIcon sx={{ fontSize: 30 }} />
            Cloud Security
          </li>
          <li className="flex items-center gap-2 px-5 py-2 text-lg cursor-pointer hover:bg-blue-500 hover:text-white hover:rounded-md">
            <LibraryBooksIcon sx={{ fontSize: 30 }} />
            How to Use
          </li>
          <li className="flex items-center gap-2 px-5 py-2 text-lg cursor-pointer hover:bg-blue-500 hover:text-white hover:rounded-md">
            <SettingsIcon sx={{ fontSize: 30 }} />
            Settings
          </li>
        </ul>

        <ul className="md:w-auto">
          <li className="flex items-center gap-2 px-5 py-2 text-lg text-zinc-700 cursor-pointer hover:bg-blue-500 hover:text-white hover:rounded-md">
            <CallIcon sx={{ fontSize: 30 }} />
            Support
          </li>
          <li className="flex items-center gap-2 px-5 py-2 text-lg text-zinc-700 cursor-pointer hover:bg-blue-500 hover:text-white hover:rounded-md">
            <Link to="/">
              <LogoutIcon sx={{ fontSize: 30 }} />
              Logout
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex-1 border-2 border-gray-300 m-3 rounded-lg shadow-lg h-full w-full mt-16">
        <div className="pl-2 pt-2 flex justify-between flex-wrap flex-1">
          <div>
            <h1 className="text-3xl">Repositories</h1>
            <p className="text-zinc-600">33 total repositories</p>
            <div className="mt-3 border-2 border-gray-300 pl-1 rounded-lg py-1 px-2 h-10 max-w-full bg-white sm:max-w-sm md:max-w-md lg:max-w-lg flex items-center">
              <label className="text-gray-500 mr-2">
                <SearchIcon sx={{ fontSize: 24 }} />
              </label>
              <input
                type="text"
                placeholder="Search Repositories"
                className="outline-none text-base flex-1"
              />
            </div>
          </div>
          <div className="pr-2 mt-2">
            <button className="rounded-lg shadow-md px-1 py-2 border-gray-300 border-2 mr-1 text-zinc-600">
              <CachedIcon sx={{ fontSize: 20 }} /> Refresh All
            </button>
            <button className="rounded-lg shadow-md px-1 py-2 bg-blue-500 text-white">
              <AddIcon sx={{ fontSize: 20 }} /> Add Repository
            </button>
          </div>
        </div>

        <div className="mt-5">
          {HardCodeData.map((hardCode, index) => (
            <div
              key={index}
              className="py-4 px-5 border-t-2 border-gray-300 hover:bg-gray-100"
            >
              <div className="flex items-center gap-5">
                <h2 className="text-lg font-bold">{hardCode.title}</h2>
                <span className="text-xs font-medium text-blue-700 bg-blue-100 border border-blue-400 rounded-lg px-2 py-0.5">
                  {hardCode.type}
                </span>
              </div>
              <div className="flex gap-10">
                <p className="flex items-center gap-1 text-xs">
                  {hardCode.language}
                  <span className="bg-blue-500 w-2 h-2 rounded-full ml-1 mt-0"></span>
                </p>
                <p className="text-xs">
                  <img src={Database} alt="" className="inline w-4 pr-1 mb-1" />
                  {hardCode.size}
                </p>
                <p className="text-xs">{hardCode.updatedAt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
