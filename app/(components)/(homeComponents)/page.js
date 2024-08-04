import React from "react";
import heroimg from "../../_assets/images/bannerimage.png";
import Image from "next/image";
const Hero = () => {
  return (
    <div className=" ">
      <section className="bg-[#334A55] lg:min-h-[800px] min-h-[1200px] md:min-h-[900px] text-gray-100 pt-20  ">
        
        <div className=" container  flex flex-col  p-6 mx-auto sm:py-12 lg:py-24  lg:flex-row justify-between ">
          <div className="flex flex-col mb-8  lg:w-[700px] justify-center p-6  rounded-sm  lg:text-left space-y-4 text-start">
            <h1 className="text-4xl w-full leading-none sm:text-6xl space-y-4">
              <span className="font-bold">WRITING</span> <br />
              <span>Commissioned Works</span>
            </h1>
            <h3 className="font-semibold text-2xl text-[#8ABA51]">Professional Editors</h3>

            <p className="text-[#C6C8CA]">We will write a good job for you</p>
            <p className="mt-6 mb-8 text-lg sm:mb-12 lg:max-w-xl w-full text-start text-[#C6C8CA]">
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
