import React from 'react';
import BillsCategory from '../components/BillsCategory';
import RecentBills from './RecentBills';
// import { useLoaderData } from 'react-router';
// import RecentBillsCard from '../components/RecentBillsCard';
import Banner from '../components/Banner';
import ReferralSection from '../components/ReferralSection';
import OurPartner from '../components/OurPartner';

// category bills
const categoryBillsPromise = fetch("http://localhost:3000/category-bills")
.then(res=> res.json())

const Home = () => {
    // const bills = useLoaderData();
    // console.log(bills);
    // console.log( "data",typeof bills)
    return (
        <div>
            <Banner></Banner>

            {/* bill category */}
            <BillsCategory categoryBillsPromise={categoryBillsPromise}></BillsCategory>

            {/* recent bills */}
             <RecentBills></RecentBills>

            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {
                    bills.map(bill => <RecentBillsCard
                    key={bill._id}
                    bill={bill}
                    ></RecentBillsCard>)
                }
            </div> */}

            <ReferralSection></ReferralSection>
            <OurPartner></OurPartner>

        </div>
    );
};

export default Home;