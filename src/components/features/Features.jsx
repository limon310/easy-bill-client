import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineShieldCheck, 
  HiOutlineLightningBolt, 
  HiOutlineChartPie, 
  HiOutlineBell, 
  HiOutlineCloudUpload, 
  HiOutlineDeviceMobile 
} from 'react-icons/hi';

const features = [
  {
    title: "Instant Invoicing",
    description: "Generate professional bills in seconds with our lightning-fast interface.",
    icon: <HiOutlineLightningBolt className="w-8 h-8 text-primary" />,
  },
  {
    title: "Secure Data",
    description: "Your financial data is encrypted and protected with enterprise-grade security.",
    icon: <HiOutlineShieldCheck className="w-8 h-8 text-secondary" />,
  },
  {
    title: "Smart Analytics",
    description: "Visualize your spending habits and revenue with intuitive, real-time charts.",
    icon: <HiOutlineChartPie className="w-8 h-8 text-accent" />,
  },
  {
    title: "Due Reminders",
    description: "Never miss a payment again with automated SMS and email notifications.",
    icon: <HiOutlineBell className="w-8 h-8 text-primary" />,
  },
  {
    title: "Cloud Sync",
    description: "Access your bills from anywhere. Your data is always backed up and synced.",
    icon: <HiOutlineCloudUpload className="w-8 h-8 text-secondary" />,
  },
  {
    title: "Mobile Ready",
    description: "Manage your business on the go with a fully responsive mobile experience.",
    icon: <HiOutlineDeviceMobile className="w-8 h-8 text-accent" />,
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="bg-base-100 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-2">
            Why Choose Us
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-content">
            Effortless Billing <span className="text-secondary">&</span> Management
          </h1>
          <p className="mt-4 text-neutral max-w-2xl mx-auto">
            Everything you need to manage your finances, track payments, and grow your business in one simple platform.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="p-8 rounded-2xl bg-base-200 border border-base-300 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="bg-base-100 w-14 h-14 rounded-lg flex items-center justify-center shadow-inner mb-6 group-hover:border-primary border transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-content mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
