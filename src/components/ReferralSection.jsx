// import React from 'react';
// // import './ReferralSection.css'; // Assuming you'll have a CSS file for styling

// const ReferralSection = () => {
//   return (
//     <div className="referral-section-container bg-gradient-to-br from-black via-gray-900 to-gray-800 text-yellow-400">
//       <h2 className="referral-section-title">Share the Love, Get Rewards!</h2>
//       <p className="referral-section-description">Invite your network and unlock exclusive benefits.</p>

//       <div className="referral-steps-grid">
//         <div className="referral-step-item">
//           <div className="step-icon-wrapper">
//             {/* Replace with an actual icon component or SVG */}
//             <svg className="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//               <circle cx="9" cy="7" r="4"></circle>
//               <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//               <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//             </svg>
//           </div>
//           <h3 className="step-heading">Spread the Word</h3>
//           <p className="step-text">Share your unique referral link with friends, family, and colleagues.</p>
//         </div>

//         <div className="referral-step-item">
//           <div className="step-icon-wrapper">
//             {/* Replace with an actual icon component or SVG */}
//             <svg className="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M10 12l2 2l4-4"></path>
//               <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
//             </svg>
//           </div>
//           <h3 className="step-heading">They Join & Explore</h3>
//           <p className="step-text">They sign up using your link and discover our amazing features.</p>
//         </div>

//         <div className="referral-step-item">
//           <div className="step-icon-wrapper">
//             {/* Replace with an actual icon component or SVG */}
//             <svg className="step-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <circle cx="12" cy="12" r="10"></circle>
//               <line x1="12" y1="16" x2="12" y2="12"></line>
//               <line x1="12" y1="8" x2="12" y2="8"></line>
//             </svg>
//           </div>
//           <h3 className="step-heading">You Get Rewarded</h3>
//           <p className="step-text">Receive exclusive perks, discounts, or bonus points for every successful referral.</p>
//         </div>
//       </div>

//       <button className="referral-call-to-action">Start Earning Rewards</button>
//     </div>
//   );
// };

// export default ReferralSection;


import React from 'react';

const ReferralSection = () => {
  return (
    <div className=" mx-auto p-8 rounded-xl shadow-2xl text-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-yellow-400">
      
      {/* Header */}
      <h2 className="text-4xl font-extrabold text-gray-200 mb-4 py-3">
        Share the Love, Get Rewards!
      </h2>
      <p className="text-xl text-gray-400">
        Invite your network and unlock exclusive benefits.
      </p>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 pt-8">
        
        {/* Step 1: Spread the Word */}
        <div className="p-6 bg-blue-50 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02]">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            {/* Icon (Replace with a proper React Icon component like Lucide or Heroicons) */}
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 11-8 0 4 4 0 018 0zm14 0a4 4 0 11-8 0 4 4 0 018 0zm-4 4h-4"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">Spread the Word</h3>
          <p className="text-gray-600">Share your unique **referral link** with friends, family, and colleagues.</p>
        </div>

        {/* Step 2: They Join & Explore */}
        <div className="p-6 bg-blue-50 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02]">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            {/* Icon */}
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">They Join & Explore</h3>
          <p className="text-gray-600">They sign up using your link and discover our amazing features and services.</p>
        </div>

        {/* Step 3: You Get Rewarded */}
        <div className="p-6 bg-blue-50 rounded-lg shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.02]">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            {/* Icon */}
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">You Get Rewarded</h3>
          <p className="text-gray-600">Receive exclusive **perks, discounts, or bonus points** for every successful referral.</p>
        </div>
      </div>

      {/* Call to Action Button */}
      <button className="px-10 py-4 text-xl font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-150 transform hover:scale-105">
        Start Earning Rewards
      </button>

    </div>
  );
};

export default ReferralSection;