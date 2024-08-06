'use client'
import Image from "next/image";
import loginimage from "../../_assets/images/login.png";
import logo2 from "../../_assets/images/logo2.png";
import Link from "next/link";

import { IoEyeOffOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa6";

import { useState } from "react";
const page = () => {
const [showpas,setshowpas]=useState(false)

  const handleShow=()=>{
    setshowpas(!showpas)
  }
  return (
    <div className="bg-[#334A55] py-36">
      <div className="lg:flex md:flex  items-center justify-center  max-w-6xl mx-auto bg-[#455B65] rounded-lg p-8 gap-12">
        <div className="">
          <Image height={0} width={0} className=" " src={loginimage} alt="" />
        </div>
        <div className="w-full max-w-lg">
          <div className="w-full overflow-hidden  rounded-lg  dark:bg-gray-800">
            <div className="px-6 py-4">
              <a className=" text-xl">
                <Image
                  className="lg:w-full md:w-full w-11/12"
                  src={logo2}
                  height={0}
                  width={0}
                  alt="Logo"
                />
              </a>

              <p className="mt-1 text-center text-white dark:text-gray-400">
                Great to have you back !
              </p>
              <div className="text-center text-white my-4">
                <input
                  type="radio"
                  name="radio-5"
                  className="radio border-white checked:bg-[#8ABA51] mr-2 "
                  defaultChecked
                />{" "}
                <span className=" mr-6">User</span>
                <input
                  type="radio"
                  name="radio-5"
                  className="radio border-white checked:bg-[#8ABA51] mr-2"
                />
                <span>Editor</span>
              </div>
              <form>
                <div className="w-full mt-4">
                  <label className=" text-white ">First Name</label>
                  <input
                    required
                    className="block w-full border border-[#8ABA51] px-4 py-2 mt-2 bg-transparent text-white placeholder-gray-500 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-white focus:border-[#8ABA51] dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#8ABA51]"
                    type="email"
                    placeholder="Enter your name"
                    aria-label="Email Address"
                  />
                </div>
                <div className="w-full mt-4">
                  <label className=" text-white ">Last Name</label>
                  <input
                    required
                    className="block w-full border border-[#8ABA51] px-4 py-2 mt-2 bg-transparent text-white placeholder-gray-500 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-white focus:border-[#8ABA51] dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#8ABA51]"
                    type="email"
                    placeholder="Enter your name"
                    aria-label="Email Address"
                  />
                </div>
                <div className="w-full mt-4">
                  <label className=" text-white ">Contact Number</label>
                  <input
                    required
                    className="block w-full border border-[#8ABA51] px-4 py-2 mt-2 bg-transparent text-white placeholder-gray-500 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-white focus:border-[#8ABA51] dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#8ABA51]"
                    type="email"
                    placeholder="+88#########48"
                    aria-label="Email Address"
                  />
                </div>
                <div className="w-full mt-4">
                  <label className=" text-white ">Email</label>
                  <input
                    required
                    className="block w-full border border-[#8ABA51] px-4 py-2 mt-2 bg-transparent text-white placeholder-gray-500 rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-white focus:border-[#8ABA51] dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#8ABA51]"
                    type="email"
                    placeholder=".....@gmail.com"
                    aria-label="Email Address"
                  />
                </div>

                <div className="w-full mt-4 relative">
                  <div className="flex items-center justify-between mt-4">
                    <label className=" text-white ">New password</label>
                  </div>

                  <input
                    required
                    className="block rounded-md w-full border border-[#8ABA51] px-4 py-2 mt-2 bg-transparent text-white placeholder-gray-500   dark:bg-gray-800 dark:border-gray-600 dark:placeholder-white focus:border-[#8ABA51] dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#8ABA51]"
                    type={showpas ? 'text' : 'password'}
                    name="newpass"
                    
                    placeholder="New password"
                    aria-label="password"
                  />
                  <div>
                    <span onClick={handleShow} className="absolute  top-1/2 cursor-pointer right-4">
                    {
                      
                    showpas?
                    <FaRegEye className="text-white" size={25}/>:<IoEyeOffOutline className="text-white" size={25}/>
                    }
                    </span>
                  </div>
                </div>
                <div className="w-full mt-4">
                  <label className=" text-white ">Confirm password</label>
                  <input
                    required
                    className="block rounded-md w-full border border-[#8ABA51] px-4 py-2 mt-2 bg-transparent text-white placeholder-gray-500   dark:bg-gray-800 dark:border-gray-600 dark:placeholder-white focus:border-[#8ABA51] dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-[#8ABA51]"
                    type="password"
                    placeholder="Confirm password"
                    aria-label="password"
                  />
                </div>

                <div className="flex items-center justify-between mt-4">
                  <button className=" text-sm font-medium tracking-wide  p-2 transition-colors duration-300 transform bg-[#334A55]  hover:bg-[#334A55]  w-full text-[#FDFDFD] border rounded-sm uppercase focus:outline-none ">
                    Sign In
                  </button>
                </div>
              </form>
            </div>

            <div className="flex items-center justify-center py-4 gap-12 text-center  dark:bg-gray-700">
              <span className="text-sm text-white ">Already have an account? </span>

              <Link
                href={"/login"}
                className="mx-2 text-sm font-normal text-[#8ABA51] border-b-2 border-[#8ABA51] "
              >Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
