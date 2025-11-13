import React, { } from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const RecentBillsCard = ({ bill }) => {
    const { title, category, date, location, _id } = bill;
    // console.log(_id)
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)" }}>
                

            <motion.div className="card bg-base-300 shadow-sm "

            >
                <div className="card-body items-center text-center h-[300px]">
                    <h2 className="card-title text-2xl font-bold text-amber-500">{title}</h2>
                    <h3 className='text-xl font-semibold'>{category}</h3>
                    <p className='text-lg text-gray-700'>Location: {location}</p>
                    <p className='text-lg'>Date: {date}</p>
                    <div className="card-actions">
                        <Link to={`/bills-details/${_id}`} className="btn btn-primary text-lg">See Details</Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default RecentBillsCard;

