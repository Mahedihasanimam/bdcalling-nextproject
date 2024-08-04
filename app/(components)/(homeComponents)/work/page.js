import Image from 'next/image';
import React from 'react';
import workimg from '../../../_assets/images/professional.png'
const Allwork = () => {
    return (
        
    <div className=" ">
      <section className="bg-[#D4DADA]   text-[#232323] ">
        
        <div className=" container  flex flex-col  p-6 mx-auto  lg:flex-row justify-between ">
          <div className="flex flex-col   justify-center p-6 text-center rounded-sm  lg:text-left space-y-4">
            <h3 className="font-semibold text-4xl text-[#232323]">Have your work done by professionals!</h3>

            
            <p className="mt-6 mb-8 text-lg sm:mb-12 max-w-xl text-[#232323]">
            You tBy entrusting us with the preparation of your diploma or final thesis, you can be sure that you will receive professional and competent help.
            </p>
           <div className='grid grid-cols-2 gap-6'>
                <div className=''>
                    <h1 className='text-4xl text-[#334A55] font-bold'>234</h1>
                    <p className='text-[#758888]'>total providers</p>
                </div>
                <div className=''>
                    <h1 className='text-4xl text-[#334A55] font-bold'>431</h1>
                    <p className='text-[#758888]'>total customars</p>
                </div>
                <div className=''>
                    <h1 className='text-4xl text-[#334A55] font-bold'>99.5%</h1>
                    <p className='text-[#758888]'>Average rating for  timely  <br/>
                    execution of order</p>
                </div>
                <div className=''>
                    <h1 className='text-4xl text-[#334A55] font-bold'>33217</h1>
                    <p className='text-[#758888]'>Order completed by our <br/>
                    provider</p>
                </div>
           </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-96 lg:h-96 xl:h-112 2xl:h-128">
            <Image height={200} width={500} src={workimg} alt="" className="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Allwork;