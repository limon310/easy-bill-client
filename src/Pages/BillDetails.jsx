import React from 'react';
import { Link, useLoaderData } from 'react-router';

const BillDetails = () => {
    const bill = useLoaderData();
    console.log(bill);
    const { title, category, location, description, image, amount, date } = bill;
    console.log(amount)
    return (
        <div className='mt-10'>
            <h2 className='mb-10'>Bill details Page</h2>
            <div className='flex gap-5 p-10 bg-gray-300 rounded-2xl'>
                <div className='w-[750px]'>
                    <img className='rounded-2xl'
                     src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="" />
                </div>
                <div className=''>
                    <h2 className='text-2xl font-bold '>{title}</h2>
                    <p>{category}</p>
                    <p>{description}</p>
                    <p>{location}</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
};

export default BillDetails; <h2>Bill details</h2>