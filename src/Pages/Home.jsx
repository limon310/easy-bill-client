import React from 'react';
import BillsCategory from '../components/BillsCategory';
import RecentBills from './RecentBills';
// import { useLoaderData } from 'react-router';
// import RecentBillsCard from '../components/RecentBillsCard';
import Banner from '../components/Banner';
import ReferralSection from '../components/ReferralSection';
import OurPartner from '../components/OurPartner';
import SimpleTypeWriter from '../components/SimpleTypeWriter';

// category bills
const categoryBillsPromise = fetch("https://easy-bill-server.vercel.app/category-bills")
    .then(res => res.json())

const Home = () => {
    // const bills = useLoaderData();
    // console.log(bills);
    // console.log( "data",typeof bills)
    return (
        <div className='w-11/12 mx-auto'>

            <div className="flex   justify-center items-center text-3xl font-bold h-[150px] text-center mt-10 text-yellow-400">
                <SimpleTypeWriter text="Welcome To My Easy-Bill Managemaent App!" speed={80} />
            </div>

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