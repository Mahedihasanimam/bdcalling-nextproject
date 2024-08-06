import Link from "next/link";
import React from "react";
import logo2 from "../../../_assets/images/logo2.png";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const navitem = (
    <>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/editors'}>Our Editors</Link>
      </li>
      <li>
        <Link href={'#'}>How to order?</Link>
      </li>
    </>
  );
  return (
    <div className=" absolute w-full">
      <div className="navbar container  border-2 border-slate-400 border-opacity-10 mx-auto mt-6 bg-[#455B65] rounded-md text-white">
        <div className="navbar-start lg:w-1/3">
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
              {navitem}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <Image className="lg:w-full md:w-full w-11/12" src={logo2} height={0} width={0} alt="Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex  justify-center">
          <ul className="menu menu-horizontal px-1">{navitem}</ul>
          <input type="checkbox" className="toggle bg-[#8ABA51] hover:bg-[#8ABA51] text-black border-none" defaultChecked />
        </div>
        <div className="navbar-end md:w-1/3  flex justify-end">
        <Link href={'/login'}>

        <button className="  rounded-md lg:btn btn-sm lg:bg-transparent bg-transparent lg:text-white flex gap-1 p-1 hover:bg-transparent border text-white">
            <FaRegUserCircle size={25} /> Join Now
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
