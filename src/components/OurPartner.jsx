import React, { useState } from 'react';
import nogodImg from '../assets/nogod.png'
import bikashLogo from '../assets/bkash.png'
import airterLogo from '../assets/airter.png'
import grameenLogo from '../assets/grameen.png'

const OurPartner = () => {;

  return (
    <section className="py-16 mt-20 mb-20 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center justify-center mt-10">
         <div className='flex flex-col justify-center items-center'>
            <img className='w-[100px] h-[100px]  rounded-full border-2 border-green-400 p-1' src={nogodImg} alt="" />
            <h2 className='text-2xl font-semibold'>Nogod</h2>
         </div>
         <div className='flex flex-col justify-center items-center'>
            <img className='w-[100px] h-[100px]  rounded-full border-2 border-green-400 p-1' src={bikashLogo} alt="" />
            <h2 className='text-2xl font-semibold'>Bikash</h2>
         </div>
         <div className='flex flex-col justify-center items-center'>
            <img className='w-[100px] h-[100px]  rounded-full border-2 border-green-400 p-1' src={airterLogo} alt="" />
            <h2 className='text-2xl font-semibold'>Airtel</h2>
         </div>
         <div className='flex flex-col justify-center items-center'>
            <img className='w-[100px] h-[100px]  rounded-full border-2 border-green-400 p-1' src={grameenLogo} alt="" />
            <h2 className='text-2xl font-semibold'>GrameenPhone</h2>
         </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;