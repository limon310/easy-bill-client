import React from 'react';
import RecentBillsCard from '../components/RecentBillsCard';
const recentBillsPromise = fetch("http://localhost:3000/recent-bills")
.then(res=> res.json())
const RecentBills = () => {
    return (
        <div>
            <h2>Recent Bills</h2>
            <RecentBillsCard recentBillsPromise={recentBillsPromise}></RecentBillsCard>
        </div>
    );
};

export default RecentBills;