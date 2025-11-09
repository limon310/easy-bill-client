import React from 'react';
import { useLoaderData } from 'react-router';
import BillsCard from '../components/BillsCard';

const Bills = () => {
    const bills = useLoaderData();
    console.log(bills);
    return (
        <div>
            <h2>Bills</h2>
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

export default Bills;