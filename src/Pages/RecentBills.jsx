import React from 'react';
import RecentBillsCard from '../components/RecentBillsCard';
import { useLoaderData } from 'react-router';
// const recentBillsPromise = fetch("http://localhost:3000/recent-bills")
//     .then(res => res.json())
const RecentBills = () => {
    const bills = useLoaderData();
    return (
        <div className=''>
            <h2 className='text-3xl font-bold text-center'>Recent Bills</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-10'>
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

export default RecentBills;