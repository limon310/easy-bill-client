import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, LayoutDashboard, CalendarCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      title: "Add Your Bill",
      description: "Quickly input your bill details, including the provider, total amount, and due date into our simple form.",
      icon: <PlusCircle className="w-10 h-10 text-primary" />,
      badge: "Quick Entry"
    },
    {
      id: "02",
      title: "View Status",
      description: "Check your organized dashboard to see at a glance which bills are paid and which ones are still pending.",
      icon: <LayoutDashboard className="w-10 h-10 text-secondary" />,
      badge: "Easy Tracking"
    },
    {
      id: "03",
      title: "Stay Updated",
      description: "Review your upcoming deadlines on the dashboard to ensure timely payments and avoid late fees.",
      icon: <CalendarCheck className="w-10 h-10 text-accent" />,
      badge: "Save Money"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="pb-24 bg-base-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Process</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-neutral-content tracking-tight mb-4">
            Manage your bills in <span className='text-secondary'>3 simple steps</span>
          </h3>
          <p className="text-neutral opacity-70 max-w-2xl mx-auto text-lg">
            No complex setup. Just a straightforward way to keep your household utilities organized and under control.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div 
              key={step.id} 
              variants={stepVariants}
              className="group p-8 bg-base-200 rounded-3xl border border-base-300 hover:border-primary/40 hover:bg-base-100 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Step Number */}
              <span className="absolute -right-4 -bottom-6 text-9xl font-black text-base-300/30 group-hover:text-primary/5 transition-colors duration-500 pointer-events-none">
                {step.id}
              </span>

              {/* Icon Container */}
              <div className="w-16 h-16 bg-base-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-base-300 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Badge Tag */}
              <div className="inline-block px-3 py-1 rounded-full border border-neutral/20 text-[10px] font-bold uppercase tracking-tighter mb-4 text-neutral opacity-70 group-hover:border-primary group-hover:text-primary transition-colors">
                {step.badge}
              </div>

              {/* Text Content */}
              <h4 className="text-2xl font-bold text-neutral-content mb-3 tracking-tight">
                {step.title}
              </h4>
              <p className="text-neutral opacity-80 leading-relaxed text-base">
                {step.description}
              </p>

              {/* Decorative Animated Line */}
              <div className="mt-8 h-1 w-10 bg-base-300 group-hover:w-full group-hover:bg-primary transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="mt-20 text-center">
          <Link to="/" className="btn btn-primary btn-lg rounded-full px-12 shadow-xl hover:shadow-primary/30 transition-all group">
            Start Managing Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;