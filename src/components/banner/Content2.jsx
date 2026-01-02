import React from 'react';
import bannerImg from '../../assets/content02.jpg'
import { Link } from 'react-router';
const Content2 = () => {
    return (
        <div
            className="w-full h-[60vh] md:h-[70vh] relative overflow-hidden"
        style={{
            backgroundImage: `url(${bannerImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
        }}
        >
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/20"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4">
                <div className="text-base-100 max-w-xl space-y-4">

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        One Platform. Every Bill.
                    </h1>

                    {/* Sub-heading */}
                    <p className="text-lg md:text-xl">
                        From electricity and water to internet and gas—we’ve got you covered.
                    </p>

                    {/* Keywords (Optional Small Tags) */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Integrated</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Simple</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">All Utilities</span>
                    </div>

                    {/* CTA Button */}
                    <Link to="/Bills" className="mt-6 px-6 py-6 btn btn-primary rounded-lg font-semibold">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Content2;