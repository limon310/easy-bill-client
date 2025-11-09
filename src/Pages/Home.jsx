import React from 'react';
import BillsCategory from '../components/BillsCategory';
import RecentBills from './RecentBills';
import { useLoaderData } from 'react-router';
import RecentBillsCard from '../components/RecentBillsCard';
import Banner from '../components/Banner';

const Home = () => {
    const bills = useLoaderData();
    // console.log(bills);
    // console.log( "data",typeof bills)
    return (
        <div>
            <h3>Home</h3>
            <Banner></Banner>
            <BillsCategory></BillsCategory>
             
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    bills.map(bill => <RecentBillsCard
                    key={bill._id}
                    bill={bill}
                    ></RecentBillsCard>)
                }
            </div>
        </div>
    );
};

export default Home;