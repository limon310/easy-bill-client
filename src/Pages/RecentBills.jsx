import React from 'react';
import RecentBillsCard from '../components/RecentBillsCard';
import { Link, useLoaderData } from 'react-router';
import Loading from '../components/Loading';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';

const RecentBills = () => {
    // const bills = useLoaderData();
    // console.log(bills)
    const axios = useAxios();
    // tanstack query
    const { data: recentBills = [], isLoading } = useQuery({
        queryKey: ["recent-bills"],
        queryFn: async () => {
            const res = await axios.get("/recent-bills")
            return res.data;
        }
    })
    // console.log("recent bill", recentBills)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-3xl font-bold'>Recent <span className='text-secondary'>Bills</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-15'>
                {
                    recentBills.map(bill => <RecentBillsCard
                        key={bill._id}
                        bill={bill}
                    ></RecentBillsCard>)
                }
            </div>
            <div className="flex justify-center items-center mb-15">
                <Link to='/all-bills' className="btn btn-primary text-lg btn-outline">See All Bills</Link>
            </div>
        </div>
    );
};

export default RecentBills;