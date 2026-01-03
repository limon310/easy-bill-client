import { motion } from 'framer-motion';
import React, { } from 'react';

const CategoryCard = ({ categorie }) => {
    // console.log(categorie)
    const { title, image } = categorie;
    return (
        <div className='py-8'>
            <motion.div 
            className="card bg-base-200 text-base-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)" }}>
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl w-full h-[200px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                </div>
            </motion.div>
        </div>
    );
};

export default CategoryCard;