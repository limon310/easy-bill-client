
import { ArrowRightToLine, DollarSign, Megaphone } from 'lucide-react';
import React from 'react';

const ReferralSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-8 rounded-xl shadow-2xl text-center bg-linear-to-br from-gray-900 via-indigo-900 to-black text-yellow-400">

      <h2 className="text-4xl font-extrabold mb-4 py-3">
        Share the Love, Get Rewards!
      </h2>
      <p className="text-xl text-gray-400">
        Invite your network and unlock exclusive benefits.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 pt-8">

        <div className="p-6 bg-blue-50 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02]">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span><Megaphone /></span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Spread the Word</h3>
          <p className="text-gray-600">Share your unique referral link ** with friends, family, and colleagues.</p>
        </div>

        <div className="p-6 bg-blue-50 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02]">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span><ArrowRightToLine /></span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">They Join & Explore</h3>
          <p className="text-gray-600">They sign up using your link and discover our amazing features and services.</p>
        </div>

        <div className="p-6 bg-blue-50 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02]">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span><DollarSign /></span>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">You Get Rewarded</h3>
          <p className="text-gray-600">Receive exclusive discounts, or bonus points for every successful referral.</p>
        </div>
      </div>

      <button className="px-10 py-4 text-xl font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-150 transform hover:scale-105">
        Start Earning Rewards
      </button>

    </div>
  );
};

export default ReferralSection;