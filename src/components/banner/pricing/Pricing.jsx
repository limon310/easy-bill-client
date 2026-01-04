import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Zap, Crown, ArrowRight } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: "Individual",
            price: "$0",
            description: "Perfect for students and individuals managing personal utilities.",
            features: [
                { text: "Unlimited Bill Tracking", included: true },
                { text: "Basic Consumption Analytics", included: true },
                { text: "Email Reminders", included: true },
                { text: "Automated Payments", included: false },
                { text: "Roommate Bill Splitting", included: false },
                { text: "Export to PDF/CSV", included: false },
            ],
            buttonText: "Get Started Free",
            highlight: false,
        },
        {
            name: "Household Pro",
            price: "$4.99",
            period: "/month",
            description: "Ideal for shared apartments and families needing advanced tools.",
            features: [
                { text: "Unlimited Bill Tracking", included: true },
                { text: "Advanced AI Analytics", included: true },
                { text: "SMS & Push Notifications", included: true },
                { text: "Automated Payments", included: true },
                { text: "Roommate Bill Splitting", included: true },
                { text: "One-click PDF Exports", included: true },
            ],
            buttonText: "Try Pro Features",
            highlight: true,
        }
    ];

    return (
        <section className="py-24 bg-base-100 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Pricing</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-neutral-content tracking-tight mb-4">
                        The <span className="italic font-light text-primary">Easy</span> Choice
                    </h3>
                    <p className="text-neutral opacity-70 max-w-md mx-auto">
                        Choose the plan that fits your lifestyle. No hidden fees, just simple management.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative p-8 rounded-[2.5rem] border-2 transition-all duration-300 ${plan.highlight
                                    ? 'bg-base-200 border-primary shadow-xl shadow-primary/10'
                                    : 'bg-base-100 border-base-300 hover:border-neutral/20'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                                    <Zap size={12} className="fill-white" /> Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${plan.highlight ? 'bg-primary text-white' : 'bg-base-200 text-neutral'}`}>
                                    {plan.highlight ? <Crown size={24} /> : <Zap size={24} />}
                                </div>
                                <h4 className="text-2xl font-bold text-neutral-content mb-2">{plan.name}</h4>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-neutral-content">{plan.price}</span>
                                    {plan.period && <span className="text-neutral opacity-60 font-medium">{plan.period}</span>}
                                </div>
                                <p className="mt-4 text-neutral opacity-70 text-sm leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            {/* Feature List */}
                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm">
                                        {feature.included ? (
                                            <Check className="text-secondary shrink-0" size={18} />
                                        ) : (
                                            <X className="text-error opacity-40 shrink-0" size={18} />
                                        )}
                                        <span className={`${feature.included ? 'text-neutral-content' : 'text-neutral opacity-40 italic'}`}>
                                            {feature.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`btn w-full rounded-2xl group transition-all duration-300 ${plan.highlight
                                    ? 'btn-primary shadow-lg shadow-primary/20'
                                    : 'btn-outline border-base-300 hover:bg-base-300'
                                }`}>
                                {plan.buttonText}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Support Disclaimer */}
                <p className="text-center mt-12 text-sm text-neutral opacity-50 italic">
                    * This is a student project. Free tier is always available for academic purposes.
                </p>
            </div>
        </section>
    );
};

export default Pricing;