import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router';
const AllBilsCard = ({ bill }) => {
    // console.log(bill)
    const { image, title, category, location, amount, _id } = bill;
    return (
        <div>
            <motion.div className="card bg-gray-300 shadow-sm"
                // initial={{ opacity: 0, y: 40 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.8 }}
                // viewport={{ once: true }}
                // whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)" }}
            >
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
                    <motion.div className="card-actions"
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)" }}
                    >
                        <Link to={`/bills-details/${_id}`} className="btn btn-primary text-lg">See Details</Link>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default AllBilsCard;