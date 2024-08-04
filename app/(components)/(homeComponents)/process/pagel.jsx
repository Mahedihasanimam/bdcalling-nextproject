import Image from 'next/image';
import React from 'react';
import image1 from "../../../_assets/images/process1.png"
import image2 from "../../../_assets/images/process2.png"
import image3 from "../../../_assets/images/process3.png"
import image4 from "../../../_assets/images/process4.png"
import image5 from "../../../_assets/images/process5.png"
import image6 from "../../../_assets/images/process6.png"
const Process = () => {
    return (
        <div className='container mx-auto my-12'>
            <div className='text-center space-y-6 mb-4 '>
                <h1 className='text-4xl font-medium text-[#334A55] '>What does the process of writing a job <br/> with editors.com look like?</h1>
                <p className='text-[#758888] '>6 simple steps to complete your order</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 p-2'>
                <div className='bg-[#F1F3F3] border lg:flex gap-4 items-center justify-center rounded-md p-2'>
                    <Image className='block mx-auto' src={image1} height={200} width={200}/>
                    <div className='text-center space-y-2'>
                        <h3 className='text-[#334A55] text-xl font-semibold'>Submit your order</h3>
                        <p className='text-[#232323]'>Fill out the form on the website. Our offer preparation is free of charge.</p>
                    </div>
                </div>
                <div className='bg-[#F1F3F3] border lg:flex gap-4 items-center justify-center rounded-md p-2'>
                    <Image className='block mx-auto' src={image2} height={200} width={200}/>
                    <div className='text-center space-y-2'>
                        <h3 className='text-[#334A55] text-xl font-semibold'>Submit your order</h3>
                        <p className='text-[#232323]'>Fill out the form on the website. Our offer preparation is free of charge.</p>
                    </div>
                </div>
                <div className='bg-[#F1F3F3] border lg:flex gap-4 items-center justify-center rounded-md p-2'>
                    <Image className='block mx-auto' src={image3} height={200} width={200}/>
                    <div className='text-center space-y-2'>
                        <h3 className='text-[#334A55] text-xl font-semibold'>Submit your order</h3>
                        <p className='text-[#232323]'>Fill out the form on the website. Our offer preparation is free of charge.</p>
                    </div>
                </div>
                <div className='bg-[#F1F3F3] border lg:flex gap-4 items-center justify-center rounded-md p-2'>
                    <Image className='block mx-auto' src={image4} height={200} width={200}/>
                    <div className='text-center space-y-2'>
                        <h3 className='text-[#334A55] text-xl font-semibold'>Submit your order</h3>
                        <p className='text-[#232323]'>Fill out the form on the website. Our offer preparation is free of charge.</p>
                    </div>
                </div>
                <div className='bg-[#F1F3F3] border lg:flex gap-4 items-center justify-center rounded-md p-2'>
                    <Image className='block mx-auto' src={image5} height={200} width={200}/>
                    <div className='text-center space-y-2'>
                        <h3 className='text-[#334A55] text-xl font-semibold'>Submit your order</h3>
                        <p className='text-[#232323]'>Fill out the form on the website. Our offer preparation is free of charge.</p>
                    </div>
                </div>
                <div className='bg-[#F1F3F3] border lg:flex  gap-4 items-center justify-center rounded-md p-2'>
                    <Image className='block mx-auto' src={image6} height={200} width={200}/>
                    <div className='text-center space-y-2'>
                        <h3 className='text-[#334A55] text-xl font-semibold'>Submit your order</h3>
                        <p className='text-[#232323]'>Fill out the form on the website. Our offer preparation is free of charge.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Process;