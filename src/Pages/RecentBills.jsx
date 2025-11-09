import React from 'react';
import BillsCard from '../components/BillsCard';
const recentBillsPromise = fetch("http://localhost:3000/recent-bills")
.then(res=> res.json())
const RecentBills = () => {
    return (
        <div>
            <h2>Recent Bills</h2>
            <BillsCard recentBillsPromise={recentBillsPromise}></BillsCard>
        </div>
    );
};

export default RecentBills;