import React from "react";
import heroimg from "../../_assets/images/bannerimage.png";
import Image from "next/image";
import Navbar from "../(common)/nav/pages";
const Hero = () => {
  return (
    <div className=" ">
      <section className="bg-[#334A55]  min-h-[700px] text-gray-100 pt-20  ">
        
        <div className=" container  flex flex-col  p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row justify-between ">
          <div className="flex flex-col  lg:w-[700px] justify-center p-6 text-center rounded-sm  lg:text-left space-y-4">
            <h1 className="text-4xl w-full leading-none sm:text-6xl space-y-4">
              <span className="font-bold">WRITING</span> <br />
              <span>Commissioned Works</span>
            </h1>
            <h3 className="font-semibold text-2xl text-[#8ABA51]">Professional Editors</h3>

            <p className="text-[#C6C8CA]">We will write a good job for you</p>
            <p className="mt-6 mb-8 text-lg sm:mb-12 max-w-xl text-[#C6C8CA]">
            You take control of selecting the editor for your diploma thesis and decide the payment terms. By completing the form, you await offers from editors, choosing the most suitable one. Correspondence with the chosen editor allows you to track the progress of your thesis. Upon completion, you collect your work, make the payment, and leave a review.
            </p>
           
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-96 lg:h-96 xl:h-112 2xl:h-128">
            <Image height={200} width={400} src={heroimg} alt="" className="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
