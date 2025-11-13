import React from "react";
import { motion } from "framer-motion";
const AboutUs = () => {
    return (
        <section className="w-11/12 mx-auto bg-gray-900 text-gray-100 py-16 px-6 md:px-20 text-center">
            <title>Easy Bill About-Us</title>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold">
                    About <span className="text-indigo-600">EasyBill</span>
                </h2>
                <p className=" max-w-2xl mx-auto mb-12 pt-6">
                    Managing multiple monthly bills can be stressful — EasyBill makes it simple.
                    With our smart and secure platform, you can easily <span className="font-semibold">track, pay, and manage </span>
                    all your utility bills in one place — electricity, water, internet, gas, and more.
                    Stay organized, avoid late fees, and keep full control over your finances.
                </p>

                {/* Card Section */}
                <div className="grid gap-8 md:grid-cols-3 mt-8">
                    {/* Card 1 */}
                    <motion.div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay:  0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-indigo-600 text-4xl mb-4">⚡</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Manage All Bills
                        </h3>
                        <p className="text-gray-600">
                            Keep all your electricity, water, and internet bills organized in one place.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-indigo-600 text-4xl mb-4">💳</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Secure Payments
                        </h3>
                        <p className="text-gray-600">
                            Make payments safely with end-to-end encryption and instant confirmation.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2 * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-indigo-600 text-4xl mb-4">📊</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            Smart Tracking
                        </h3>
                        <p className="text-gray-600">
                            Track your spending, view past bills, and get monthly expense insights.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutUs;

