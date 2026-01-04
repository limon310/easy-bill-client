import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import { Link } from 'react-router';

const faqs = [
    {
        question: "How do I track my monthly utility bills?",
        answer: "You can easily track utilities like electricity and water by navigating to the 'Categories' tab. simply go to dashboard and track easily"
    },
    {
        question: "Is my payment data secure?",
        answer: "Absolutely. We use enterprise-grade encryption for a safe UI experience. Your financial data is never shared with third parties."
    },
    {
        question: "Can I export my bill history for tax purposes?",
        answer: "Yes, you can export your entire billing history as a CSV or PDF file directly from your dashboard's report section."
    },
    {
        question: "What happens if I miss a payment deadline?",
        answer: "Our system sends automated reminders 3 days before a bill is due. You can customize these notifications in your profile settings."
    }
];

const FAQ = () => {
    return (
        <section className="bg-base-100 py-20 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center justify-center p-3 rounded-full bg-primary/10 text-primary mb-4"
                    >
                        <HiOutlineQuestionMarkCircle className="w-8 h-8" />
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-content mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-neutral">
                        Everything you need to know about managing your Easy Bill account.
                    </p>
                </div>

                {/* Accordion Group */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="collapse collapse-plus bg-base-200 border border-base-300 rounded-xl"
                        >
                            <input type="radio" name="my-accordion-3" defaultChecked={index === 0} />
                            <div className="collapse-title text-xl font-medium text-neutral-content hover:text-primary transition-colors">
                                {faq.question}
                            </div>
                            <div className="collapse-content">
                                <p className="text-neutral pt-2 border-t border-base-300">
                                    {faq.answer}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Support Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-12 p-6 rounded-2xl bg-base-300/50 text-center border border-dashed border-base-300"
                >
                    <p className="text-neutral">
                        Still have questions?
                        <Link to="/contuct" className="text-primary font-bold ml-2 hover:underline">
                            Contact our support team
                        </Link>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;