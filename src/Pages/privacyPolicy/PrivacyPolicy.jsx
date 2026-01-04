import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineShieldCheck, HiOutlineLockClosed, HiOutlineEyeOff, HiOutlineDocumentText } from 'react-icons/hi';
import { Link } from 'react-router';

const sections = [
    {
        id: "collection",
        icon: <HiOutlineDocumentText className="text-primary" />,
        title: "Data Collection",
        content: "We collect information you provide directly to us, such as when you create an account, upload a bill image, or contact support. This includes your name, email address, and billing metadata (location, amount, and date)."
    },
    {
        id: "usage",
        icon: <HiOutlineEyeOff className="text-secondary" />,
        title: "How We Use Data",
        content: "Your data is used solely to provide and improve Easy Bill services. We use automated processing to categorize your bills and provide analytics. We do not sell your personal data to third parties."
    },
    {
        id: "security",
        icon: <HiOutlineLockClosed className="text-accent" />,
        title: "Security Measures",
        content: "We implement industry-standard security protocols. Your bill images are stored in encrypted buckets, and sensitive information is hashed. We conduct regular security audits to ensure your data remains protected."
    },
    {
        id: "rights",
        icon: <HiOutlineShieldCheck className="text-success" />,
        title: "Your Rights",
        content: "You have the right to access, correct, or delete your personal information at any time. You can export your data in pdf format via the dashboard or request permanent account deletion through our support channel."
    }
];

const PrivacyPolicy = () => {
    return (
        <section className="bg-base-100 py-20 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-16 border-b border-base-300 pb-8">
                    <h1 className="text-4xl font-black text-neutral-content mb-4">Privacy Policy</h1>
                    <p className="text-neutral">Last Updated: January 2026</p>
                    <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10 text-neutral-content text-sm leading-relaxed">
                        <strong>Summary:</strong> We value your privacy. We only collect what is necessary to manage your bills and we use enterprise-level encryption to keep that data safe.
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12">
                    {/* Sticky Sidebar Navigation */}
                    <aside className="md:w-1/4">
                        <nav className="sticky top-24 space-y-2">
                            {sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="block px-4 py-2 rounded-lg hover:bg-base-200 text-neutral hover:text-primary transition-all font-medium text-sm"
                                >
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    {/* Policy Content */}
                    <div className="md:w-3/4 space-y-16">
                        {sections.map((section, index) => (
                            <motion.div
                                key={section.id}
                                id={section.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="scroll-mt-24"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-base-200">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold text-neutral-content uppercase tracking-tight">
                                        {section.title}
                                    </h2>
                                </div>
                                <p className="text-neutral leading-relaxed text-lg italic border-l-4 border-base-300 pl-6">
                                    {section.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Contact Footer */}
                <div className="mt-20 p-8 rounded-3xl bg-base-200 border border-base-300 text-center">
                    <h3 className="text-xl font-bold text-neutral-content mb-2">Have concerns?</h3>
                    <p className="text-neutral mb-6">Our Data Protection Officer is here to help.</p>
                    <Link to="/contuct" className="btn btn-outline btn-primary px-8">
                        privacy@easybill.com
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;