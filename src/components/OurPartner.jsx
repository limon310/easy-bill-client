import React, { } from 'react';
import nogodImg from '../assets/nogod.png'
import bikashLogo from '../assets/bkash.png'
import airterLogo from '../assets/airter.png'
import grameenLogo from '../assets/grameen.png'

const OurPartner = () => {
  ;

  return (
    <section className="max-w-7xl mx-auto py-16 mt-20 mb-20 bg-linear-to-r from-purple-500 via-gray-500 to-rose-500 text-white rounded-2xl">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-12">Our Valuable Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center justify-center mt-10">
          <div className='flex flex-col justify-center items-center'>
            <img className='w-[100px] h-[100px]  rounded-full border-2 border-green-400 p-1' src={nogodImg} alt="" />
            <h2 className='text-2xl font-semibold text-yellow-400'>Nogod</h2>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-[100px] h-[100px]  rounded-full border-2 border-green-400 p-1' src={bikashLogo} alt="" />
            <h2 className='text-2xl font-semibold text-yellow-400'>Bikash</h2>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-[100px] h-[100px]  rounded-full border-2 border-green-400 p-1' src={airterLogo} alt="" />
            <h2 className='text-2xl font-semibold text-yellow-400'>Airtel</h2>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img className='w-[100px] h-[100px]  rounded-full border-2 border-green-400 p-1' src={grameenLogo} alt="" />
            <h2 className='text-2xl font-semibold text-yellow-400'>GrameenPhone</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartner;