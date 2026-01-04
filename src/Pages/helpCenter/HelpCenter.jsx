import React from 'react';
import { motion } from 'framer-motion';
import {
    HiOutlineSearch,
    HiOutlineBookOpen,
    HiOutlineShieldCheck,
    HiOutlineCreditCard,
    HiOutlineUserGroup,
    HiOutlineChatAlt2,
    HiOutlineTrendingUp
} from 'react-icons/hi';
import { Link } from 'react-router';

const categories = [
    {
        title: "Getting Started",
        icon: <HiOutlineBookOpen />,
        links: ["Creating an account", "Adding your first bill", "Setting up profile"],
        color: "text-primary"
    },
    {
        title: "Billing & Payments",
        icon: <HiOutlineCreditCard />,
        links: ["Payment methods", "Subscription plans", "Refund policy"],
        color: "text-secondary"
    },
    {
        title: "Security & Privacy",
        icon: <HiOutlineShieldCheck />,
        links: ["Two-factor auth", "Data encryption", "Privacy settings"],
        color: "text-accent"
    },
    {
        title: "Team Management",
        icon: <HiOutlineUserGroup />,
        links: ["Inviting members", "Role permissions", "Shared dashboards"],
        color: "text-success"
    }
];

const HelpCenter = () => {
    return (
        <div className="min-h-screen bg-base-100">
            {/* Hero Search Section */}
            <section className="bg-base-200 py-20 px-4 border-b border-base-300">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-neutral-content mb-6"
                    >
                        How can we <span className="text-primary">help you?</span>
                    </motion.h1>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="card bg-base-200 border border-base-300 p-6 transition-shadow hover:shadow-lg"
                            >
                                <div className={`text-3xl mb-4 ${cat.color}`}>
                                    {cat.icon}
                                </div>
                                <h3 className="text-xl font-bold text-neutral-content mb-4">{cat.title}</h3>
                                <ul className="space-y-3">
                                    {cat.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-neutral hover:text-primary text-sm flex items-center gap-2 group">
                                                <span className="w-1.5 h-1.5 rounded-full bg-base-300 group-hover:bg-primary"></span>
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/bills" className="btn btn-ghost btn-sm text-primary mt-6 p-0 hover:bg-transparent">
                                    View all →
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support CTA */}
            <section className="pb-20 px-4">
                <div className="max-w-4xl mx-auto bg-base-300 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    {/* Decorative Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full"></div>

                    <div className="relative z-10">
                        <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <HiOutlineChatAlt2 className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-neutral-content mb-4">Still need assistance?</h2>
                        <p className="text-neutral-content/70 mb-8 max-w-md mx-auto">
                            Our support team is available 24/7 to help you with any technical or billing issues.
                        </p>
                        <div className="">
                            <Link to="/contuct" className="btn btn-outline text-primary hover:btn-bg-base-200 px-8">Contact Email</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HelpCenter;