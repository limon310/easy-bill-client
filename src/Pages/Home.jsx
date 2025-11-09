import React from 'react';
import BillsCategory from '../components/BillsCategory';
import RecentBills from './RecentBills';
import { useLoaderData } from 'react-router';
import BillsCard from '../components/BillsCard';

const Home = () => {
    const bills = useLoaderData();
    // console.log(bills);
    // console.log( "data",typeof bills)
    return (
        <div>
            <h3>Home</h3>
            <BillsCategory></BillsCategory>
              {/* {
                data.map(product => <ProductsCard
                key={product._id}
                product={product}
                ></ProductsCard>)
            } */}
            {/* <RecentBills></RecentBills> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    bills.map(bill => <BillsCard
                    key={bill._id}
                    bill={bill}
                    ></BillsCard>)
                }
            </div>
        </div>
    );
};

export default Home;