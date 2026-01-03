import React from 'react';
import bannerImg from '../../assets/content1.jpg'
import { Link } from 'react-router';

const Content1 = () => {
    return (
        <div
            className="w-full h-[60vh] md:h-[70vh] bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${bannerImg})`,
            }}
        >
            <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/20" />

            <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">
                <div className="text-base-100 max-w-xl">
                    <h1 className="text-4xl font-bold">
                        Skip the Line, Pay Online
                    </h1>
                    <p className="mt-4 text-lg">
                        Manage all your utility bills in seconds from the comfort of your home.
                    </p>
                    {/* Keywords (Optional Small Tags) */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Fast</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">Easy</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-sm">24/7</span>
                    </div>
                    <Link to="/Bills" className="mt-6 px-6 py-6 btn btn-primary hover:btn-secondary rounded-lg font-semibold transition">
                        Pay Now
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Content1;