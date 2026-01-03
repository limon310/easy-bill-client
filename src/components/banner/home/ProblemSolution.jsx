import React from 'react';
import { motion } from 'framer-motion';
import { MailWarning, TrendingUp, BellRing, CheckCircle2 } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const ProblemSolution = () => {
  const cards = [
    {
      id: 1,
      problem: "Lost in paper mail?",
      solution: "Go 100% Digital",
      description: "Stop digging through envelopes. Scan and store every bill in a secure cloud vault.",
      icon: <MailWarning className="w-8 h-8 text-error" />,
      successIcon: <CheckCircle2 className="w-8 h-8 text-secondary" />,
    },
    {
      id: 2,
      problem: "Surprise high bills?",
      solution: "Predictive Analytics",
      description: "Get alerted before your bill arrives if your usage is higher than usual.",
      icon: <TrendingUp className="w-8 h-8 text-accent" />,
      successIcon: <CheckCircle2 className="w-8 h-8 text-secondary" />,
    },
    {
      id: 3,
      problem: "Missed due dates?",
      solution: "Smart Reminders",
      description: "Multi-channel alerts via SMS, Email, and Push so you never pay a late fee again.",
      icon: <BellRing className="w-8 h-8 text-primary" />,
      successIcon: <CheckCircle2 className="w-8 h-8 text-secondary" />,
    }
  ];

  return (
    <section className="py-20 mb-20 bg-base-200 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with Typewriter */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-content mb-4">
            Solving your{' '}
            <span className="text-primary">
              <Typewriter
                words={['billing headaches', 'late fee stress', 'paper clutter']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h2>
          <p className="text-neutral opacity-80 text-lg max-w-2xl mx-auto">
            We took the complexity out of utility management so you can focus on what matters.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ y: -8 }}
              className="group relative p-8 bg-base-100 rounded-2xl border border-base-300 shadow-sm hover:shadow-xl hover:border-secondary/50 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-base-200 group-hover:bg-secondary/10 transition-colors duration-300">
                <div className="group-hover:hidden transition-all duration-300">
                  {card.icon}
                </div>
                <div className="hidden group-hover:block animate-in zoom-in duration-300">
                  {card.successIcon}
                </div>
              </div>

              {/* Title Logic */}
              <div className="h-8 mb-2">
                <h3 className="text-xl font-bold text-neutral-content group-hover:hidden tracking-tight">
                  {card.problem}
                </h3>
                <h3 className="text-xl font-bold text-secondary hidden group-hover:block tracking-tight">
                  {card.solution}
                </h3>
              </div>
              
              <p className="text-neutral opacity-70 leading-relaxed group-hover:opacity-100 transition-opacity">
                {card.description}
              </p>

              {/* Decorative Accent Line */}
              <div className="mt-8 h-1 w-12 bg-base-300 group-hover:w-full group-hover:bg-secondary transition-all duration-500 rounded-full" />
              
              {/* Subtle Badge for "Problem" state */}
              <div className="absolute top-4 right-6 text-[10px] uppercase tracking-widest font-bold opacity-20 group-hover:opacity-0 transition-opacity">
                Pain Point
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;