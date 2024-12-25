import fadeLogo from "/png/fadelogo.png";
import logo from "/svg/logo.svg";
import GraphAuth from "/png/GrapAuth.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import gitlab from "/svg/gitlab.svg";
import KeyIcon from "@mui/icons-material/Key";
import "./Register.css";

export default function Login() {
  return (
    <>
      <div className="container">
        {/* Left Section */}
        <div className="left">
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
        <div className="right flex flex-col mt-20">
          <div className=" right-main bg-white rounded-lg">
            <div className="top-right flex flex-col gap-10">
              <h1 className="logo inline text-3xl leading-snug tracking-tighter pl-64">
                <img src={logo} alt="Logo" className="inline pr-3" />
                CodeAnt AI
              </h1>
              <h2 className=" welcome-msg text-2xl text-left pl-48 font-bold">
                Welcome to Code Ant AI
              </h2>
              <div className=" flex ">
                <button className="saas text-xl rounded-lg px-32 py-2 font-semibold tracking-wider text-zinc-700 bg-slate-200 ml-10">
                  SAAS
                </button>
                <button className=" self-hosted bg-blue-500 text-white text-xl rounded-lg px-32 py-2 font-semibold tracking-wider mr-5">
                  Self Hosted
                </button>
              </div>
            </div>
            <br />
            <br />
            <hr />

            <div className="right-bottom flex flex-col items-center mt-10 w-full gap-5 mb-5">
              <button className="sign-btn border-2 border-gray-300 text-base font-bold w-80 py-2 rounded-lg">
                <img
                  src={gitlab}
                  alt="GitLab"
                  className="w-8 inline pr-3 mb-1"
                />
                Self Hosted GitLab
              </button>
              <button className="sign-btn border-2 border-gray-300 text-base font-bold w-80 py-2 rounded-lg">
                <KeyIcon
                  sx={{ fontSize: 20, transform: "rotate(135deg) scaleX(1)" }}
                  className="mr-2"
                />
                Sign in with SSO
              </button>
              <br />
              <br />
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
