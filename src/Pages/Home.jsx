import React from 'react';
import BillsCategory from '../components/BillsCategory';
import RecentBills from './RecentBills';
// import { useLoaderData } from 'react-router';
// import RecentBillsCard from '../components/RecentBillsCard';
import Banner from '../components/banner/Banner';
import ReferralSection from '../components/ReferralSection';
import OurPartner from '../components/OurPartner';
import SimpleTypeWriter from '../components/SimpleTypeWriter';
import UpcomingBillsSection from '../components/UpcomingBillsSection';
import ProblemSolution from '../components/banner/home/ProblemSolution';
import HowItWorks from '../components/banner/home/HowItWorks';
import Testimonials from '../components/testimonials/Testimonials';
import Pricing from '../components/banner/pricing/Pricing';


const Home = () => {
    return (
        <div className=''>

            {/* <div className="flex  justify-center items-center heading py-10">
                <SimpleTypeWriter text="Welcome To My Easy-Bill Managemaent App!" speed={80} />
            </div> */}

            <Banner></Banner>

            {/* bill category section */}
            <BillsCategory></BillsCategory>
            
            {/* recent bills section */}
            <RecentBills></RecentBills>

            {/* problem and solution */}
            <ProblemSolution></ProblemSolution>

            {/* how it works section */}
            <HowItWorks></HowItWorks>

            <ReferralSection></ReferralSection>
            <UpcomingBillsSection></UpcomingBillsSection>

            {/* testimonial section */}
            <Testimonials></Testimonials>
            
            {/* pricing section */}
            <Pricing></Pricing>

            {/* <OurPartner></OurPartner> */}

        </div>
    );
};

export default Home;