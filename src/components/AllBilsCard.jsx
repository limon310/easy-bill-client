import React from 'react';
import { Link } from 'react-router';

const AllBilsCard = ({ bill }) => {
    // console.log(bill)
    const { image, title, category, location, amount, _id } = bill;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <h3>{category}</h3>
                    <p>Location: {location}</p>
                    <p>Amount: {amount}</p>
                    <div className="card-actions">
                        <Link to={`/bills-details/${_id}`} className="btn btn-primary">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBilsCard;