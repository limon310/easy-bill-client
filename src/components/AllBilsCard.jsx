import React from 'react';
import { Link } from 'react-router';

const AllBilsCard = ({ bill }) => {
    // console.log(bill)
    const { image, title, category, location, amount, _id } = bill;
    return (
        <div>
            <div className="card bg-gray-300 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl w-full h-[200px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <h3 className='text-lg font-medium'>{category}</h3>
                    <p className=''>Location: {location}</p>
                    <p className='text-lg font-bold text-gray-700'>Amount: {amount}</p>
                    <div className="card-actions">
                        <Link to={`/bills-details/${_id}`} className="btn btn-primary text-lg">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBilsCard;