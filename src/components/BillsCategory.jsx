import React, { use } from 'react';
import CategoryCard from './CategoryCard';

// const categoryBillsPromise = fetch("http://localhost:3000/category-bills")
// .then(res=> res.json())

const BillsCategory = ({categoryBillsPromise}) => {
    const categoryBills = use(categoryBillsPromise);
    console.log(categoryBills);
    return (
        <div className='py-15'>
            <h2 className='text-3xl font-bold text-center'>Bills Category</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    categoryBills.map(categorie => <CategoryCard key={categorie._id} categorie={categorie}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default BillsCategory;