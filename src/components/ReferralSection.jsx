
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineClipboardCopy, 
  HiOutlineUserAdd, 
  HiOutlineGift, 
  HiOutlineCash 
} from 'react-icons/hi';

const ReferralSection = () => {
  const [copied, setCopied] = useState(false);
  const referralCode = "EASYBILL2026";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      icon: <HiOutlineUserAdd className="w-6 h-6" />,
      title: "Invite Friends",
      desc: "Share your unique link or code.",
      color: "text-primary"
    },
    {
      icon: <HiOutlineGift className="w-6 h-6" />,
      title: "They Sign Up",
      desc: "Friends get $5 on their first bill.",
      color: "text-secondary"
    },
    {
      icon: <HiOutlineCash className="w-6 h-6" />,
      title: "Get Rewarded",
      desc: "You earn 10% commission per bill.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-20 px-4 bg-base-100">
      <div className="max-w-7xl mx-auto">
        <div className="bg-base-200 rounded-3xl overflow-hidden border border-base-300 shadow-2xl flex flex-col lg:flex-row">
          
          {/* Left Side: CTA */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 bg-linear-to-br from-base-200 to-base-300">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="badge badge-primary font-bold mb-4 px-4 py-3">REFERRAL PROGRAM</span>
              <h2 className="text-4xl md:text-5xl font-black text-neutral-content leading-tight">
                Share the Ease, <br />
                <span className="text-primary font-outline-2">Earn the Rewards.</span>
              </h2>
              <p className="mt-6 text-neutral text-lg max-w-md">
                Invite your colleagues to Easy Bill. When they manage their first bill, you both get premium rewards.
              </p>

              {/* Referral Box */}
              <div className="mt-10">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral mb-2 block">
                  Your Personal Code
                </label>
                <div className="flex items-center gap-2 p-2 bg-base-100 rounded-xl border-2 border-dashed border-primary/30 w-full max-w-sm">
                  <span className="flex-1 px-4 font-mono font-bold text-xl text-neutral-content tracking-wider">
                    {referralCode}
                  </span>
                  <button 
                    onClick={handleCopy}
                    className={`btn ${copied ? 'btn-success' : 'btn-primary'} btn-square transition-all duration-300`}
                  >
                    {copied ? <span className="text-xs">Copied!</span> : <HiOutlineClipboardCopy className="w-6 h-6" />}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Process */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 bg-base-300 flex flex-col justify-center">
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className={`p-3 rounded-2xl bg-base-100 shadow-md ${step.color}`}>
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-neutral-content">{step.title}</h4>
                    <p className="text-neutral">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="mt-12 p-6 rounded-2xl bg-accent/10 border border-accent/20 text-center"
            >
              <p className="text-neutral-content font-medium italic">
                "Easy Bill has saved me 10+ hours a month. Their referral program paid for my entire yearly subscription!"
              </p>
              <p className="mt-2 text-sm font-bold text-accent">— Sarah Jenkins, Freelancer</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReferralSection;