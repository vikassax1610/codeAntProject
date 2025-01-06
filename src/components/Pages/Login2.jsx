import fadeLogo from "/png/fadelogo.png";
import logo from "/svg/logo.svg";
import GraphAuth from "/png/GrapAuth.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import gitlab from "/svg/gitlab.svg";
import KeyIcon from "@mui/icons-material/Key";
import { Link } from "react-router-dom";
import "./Signup.css";
export default function Login2() {
  return (
    <>
      <div className="container w-full">
        {/* Left Section */}
        <div className="left w-1/2">
          <div className="left1 bg-white">
            <h1 className="leftHeading">
              <img src={logo} alt="Logo" className="leftLogo" />
              AI to Detect & Autofix Bad Code
            </h1>

            <div className="leftdown1">
              <div>
                <h1 className="font-extrabold text-center tracking-wider">
                  30+
                </h1>
                <p>Language Support</p>
              </div>

              <div>
                <h1 className="font-extrabold text-center tracking-wider">
                  10k+
                </h1>
                <p>Developers</p>
              </div>

              <div>
                <h1 className="font-extrabold text-center tracking-wider">
                  100k+
                </h1>
                <p>Hours Saved</p>
              </div>
            </div>
          </div>

          <div className="left2 flex flex-col gap-4 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-start">
                <img src={GraphAuth} alt="Graph Auth" className="w-12" />
                <div className="mt-2">
                  <p className="font-bold">Issues Fixed</p>
                  <p className="text-2xl font-bold tracking-wide">500k+</p>
                </div>
              </div>
              <div className="font-bold flex flex-col items-center ml-28 mb-20">
                <p className="flex items-center text-blue-600">
                  <span>
                    <ArrowUpwardIcon sx={{ fontSize: 25 }} />
                  </span>
                  14%
                </p>
                <span className="text-sm font-normal">This Week</span>
              </div>
            </div>
          </div>
          <img src={fadeLogo} alt="Fade Logo" className="fadeLogo" />
        </div>

        {/* Right Section */}
        <div className="right flex flex-col mt-2 w-1/2   max-h-min">
          <div className=" right-main bg-white rounded-xl mt-24 p-10 shadow-lg mr-10 ml-44">
            <div className="top-right flex flex-col gap-10 ">
              <h1 className="logo inline text-3xl leading-snug tracking-tighter text-center ">
                <img src={logo} alt="Logo" className="inline pr-3" />
                CodeAnt AI
              </h1>
            </div>
            <div className="mt-5 p-5 rounded-lg flex flex-col items-center">
              <h1 className="text-3xl font-extrabold mb-5  tracking-tighter">
                Log in
              </h1>
              <div className=" form flex flex-col  w-80 gap-2">
                <input
                  className="text-xl px-2 py-2 rounded-lg  w-full bg-slate-100 shadow-md mb-2 "
                  type="text"
                  name="username"
                  placeholder="Enter your username or Email"
                  required
                ></input>

                <input
                  className="text-xl px-2 py-2 rounded-lg  w-full bg-slate-100 shadow-md mb-2"
                  type="password"
                  name="password"
                  placeholder="Enter your password here"
                  required
                ></input>
                <Link
                  to="/Home"
                  className="text-xl font-bold bg-blue-400 active:bg-blue-600 text-white py-2 rounded-lg shadow-md text-center"
                >
                  <button>Login</button>
                </Link>
              </div>
            </div>
          </div>
          <p className="lastPara text-base ml-56 tracking-tight mt-4">
            By signing up you agree to the
            <span className="font-bold"> Privacy Policy.</span>
          </p>
        </div>
      </div>
    </>
  );
}
