import React, { } from 'react';
import electricitImg from '../assets/electricity.jpg'
const CategoryCard = ({ categorie }) => {
    // console.log(categorie)
    const {title, category, location, date, image } = categorie;
    return (
        <div className='py-8'>
            <div className="card bg-base-100 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl w-full h-[200px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;