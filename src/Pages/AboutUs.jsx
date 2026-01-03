// import React from "react";
// import { motion } from "framer-motion";
// const AboutUs = () => {
//     return (
//         <section className="w-11/12 mx-auto bg-gray-900 text-gray-100 py-16 px-6 md:px-20 text-center">
//             <title>Easy Bill About-Us</title>
//             <motion.div
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 viewport={{ once: true }}
//             >
//                 <h2 className="text-3xl md:text-4xl font-bold">
//                     About <span className="text-indigo-600">EasyBill</span>
//                 </h2>
//                 <p className=" max-w-2xl mx-auto mb-12 pt-6">
//                     Managing multiple monthly bills can be stressful — EasyBill makes it simple.
//                     With our smart and secure platform, you can easily <span className="font-semibold">track, pay, and manage </span>
//                     all your utility bills in one place — electricity, water, internet, gas, and more.
//                     Stay organized, avoid late fees, and keep full control over your finances.
//                 </p>

//                 {/* Card Section */}
//                 <div className="grid gap-8 md:grid-cols-3 mt-8">
//                     {/* Card 1 */}
//                     <motion.div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all"
//                         initial={{ opacity: 0, y: 40 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay:  0.2 }}
//                         viewport={{ once: true }}
//                     >
//                         <div className="text-indigo-600 text-4xl mb-4">⚡</div>
//                         <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                             Manage All Bills
//                         </h3>
//                         <p className="text-gray-600">
//                             Keep all your electricity, water, and internet bills organized in one place.
//                         </p>
//                     </motion.div>

//                     {/* Card 2 */}
//                     <motion.div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all"
//                         initial={{ opacity: 0, y: 40 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 1 * 0.2 }}
//                         viewport={{ once: true }}
//                     >
//                         <div className="text-indigo-600 text-4xl mb-4">💳</div>
//                         <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                             Secure Payments
//                         </h3>
//                         <p className="text-gray-600">
//                             Make payments safely with end-to-end encryption and instant confirmation.
//                         </p>
//                     </motion.div>

//                     {/* Card 3 */}
//                     <motion.div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all"
//                         initial={{ opacity: 0, y: 40 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8, delay: 2 * 0.2 }}
//                         viewport={{ once: true }}
//                     >
//                         <div className="text-indigo-600 text-4xl mb-4">📊</div>
//                         <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                             Smart Tracking
//                         </h3>
//                         <p className="text-gray-600">
//                             Track your spending, view past bills, and get monthly expense insights.
//                         </p>
//                     </motion.div>
//                 </div>
//             </motion.div>
//         </section>
//     );
// };

// export default AboutUs;

import React from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Users, 
  TrendingUp, 
  Globe 
} from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Bills Processed', value: '$2M+' },
    { label: 'Time Saved/Mo', value: '12hrs' },
    { label: 'Security Rating', value: 'A+' },
  ];

  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "Bank-Grade Security",
      description: "We use 256-bit encryption to ensure your financial data stays private and protected."
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      title: "Lightning Fast",
      description: "Scan, upload, and pay bills in seconds with our optimized AI processing engine."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "User Centric",
      description: "Built based on feedback from thousands of users who wanted a simpler way to pay."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto bg-base-100 text-base-content py-10">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden  bg-base-200 rounded-lg">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            Simplifying Finance for Everyone
          </h1>
          <p className="text-lg md:text-xl text-base-content max-w-2xl mx-auto mb-10">
            Easy Bill Management was born out of a simple frustration: paying bills is a chore. 
            We're here to turn that monthly headache into a three-click breeze.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn btn-primary  px-8 py-5 rounded-lg text-lg font-semibold transition-all shadow-lg">
              Get Started
            </button>
            <button className="btn btn-secondary px-8 py-3 rounded-lg font-semibold text-lg">
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-base-300 py-12 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-base-content">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our <span className=' text-secondary'>Mission</span></h2>
            <p className="text-neutral-content mb-6 leading-relaxed">
              In a world where digital subscriptions and utility costs are skyrocketing, keeping 
              track of where your money goes shouldn't be a full-time job. 
            </p>
            <ul className="space-y-4">
              {[
                "Eliminate late fees forever",
                "Automate repetitive payment tasks",
                "Provide deep insights into spending habits"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-success w-5 h-5" />
                  <span className="font-medium text-neutral-content">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-100 rounded-2xl h-80 flex items-center justify-center border-2 border-dashed border-blue-300">
             <TrendingUp className="w-32 h-32 text-blue-400 opacity-50" />
          </div>
        </div>
      </section>

      {/* bottom Section */}
      <section className="py-20 bg-slate-800 text-base-100 rounded-lg">
        <div className="container mx-auto px-6 text-center ">
          <h2 className="text-3xl font-bold mb-16">Why People Trust Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-xl bg-slate-800 hover:bg-slate-750 transition-colors border border-slate-700">
                <div className="mb-6 flex justify-center">{v.icon}</div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-slate-400">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

