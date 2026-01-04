
import React from 'react';
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldCheck,
  Zap,
  Users,
  TrendingUp,
  Globe
} from 'lucide-react';
import { Link } from 'react-router';

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
            <Link to="/bills" className="btn btn-primary  px-8 py-5 rounded-lg text-lg font-semibold transition-all shadow-lg">
              Get Started
            </Link>
            <button className="btn btn-secondary px-8 py-3 rounded-lg font-semibold text-lg">
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-base-300 py-12 border-y border-slate-100">
        <motion.div className="container mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-base-content">{stat.value}</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
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

