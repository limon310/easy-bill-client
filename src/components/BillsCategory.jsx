import React, { use } from 'react';
import CategoryCard from './CategoryCard';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';
import Loading from './Loading';

// const categoryBillsPromise = fetch("http://localhost:3000/category-bills")
// .then(res=> res.json())

const BillsCategory = () => {
    // const categoryBills = use(categoryBillsPromise);
    // console.log(categoryBills);
    const axios = useAxios();

    // tanstack query data get
    const {data: categoryBills=[], isLoading} = useQuery({
        queryKey: ["bills-category"],
        queryFn: async() =>{
            const res = await axios.get('/category-bills')
            return res.data;
        }
    })
    // console.log(categoryBills);

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='max-w-7xl mx-auto py-10'>
            <h2 className='text-3xl font-bold text-center'>Bill <span className='text-accent'>Category</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    categoryBills.map(categorie => <CategoryCard key={categorie._id} categorie={categorie}></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default BillsCategory;