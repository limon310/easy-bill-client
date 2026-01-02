import React from 'react';
import bannerImg from '../../assets/content5.jpg'
import { Link } from 'react-router';
const Content3 = () => {
    return (
        <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden"
            style={{
                backgroundImage: `url(${bannerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center 50%",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4">
                <div className="text-white max-w-xl space-y-4">

                    {/* Main Headline */}
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Smart Bill Management. Secure Payments.
                    </h1>

                    {/* Sub-heading */}
                    <p className="text-lg md:text-xl">
                        Experience the safest way to track and pay your bills on time, every time.
                    </p>

                    {/* Keywords / Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Secure</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Reliable</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Encrypted</span>
                    </div>

                    {/* CTA Button */}
                    <Link to="/Bills" className="mt-6 px-6 py-3 btn btn-primary rounded-lg font-semibold">
                        Try it Today
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Content3;