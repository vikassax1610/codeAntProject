import { NavLink } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Signup from "../Pages/Signup";
import Login2 from "../Pages/Login2";
export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/Login">Log in</NavLink>
        </li>
        <li>
          <NavLink to="/Signin">Sign up</NavLink>
        </li>
        <li>
          <NavLink to="/Login2">Log in</NavLink>
        </li>
      </ul>
    </>
  );
}
