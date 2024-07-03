import React from "react";
import PrimaryBtn from "../../../components/PrimaryBtn";
import logo from "../../../assets/logo dark.png";

const Navbar = () => {
  const navLinks = (
    <div className="flex text-primaryColor gap-6 text-base *:cursor-pointer">
      <li className="hover:text-primaryColor/60">Home</li>
      <li className="hover:text-primaryColor/60">Services</li>
      <li className="hover:text-primaryColor/60">Blog</li>
      <li className="hover:text-primaryColor/60">About us</li>
    </div>
  );

  return (
    <div className="max-w-[1480px] mt-4 mx-auto w-[87%]">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <img src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <PrimaryBtn text={"Appointment"} color="#020043"></PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
