
import React from 'react';
import { Mail, Phone, MapPin, Send} from 'lucide-react';
import { FaFacebook, FaLinkedin,} from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { toast } from 'react-toastify';

const ContactPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Message sent!")
    };

    return (
        <div className="min-h-screen bg-base-200 py-16 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-primary mb-4">Contact Us</h1>
                    <p className="text-xl text-base-content/60 max-w-2xl mx-auto">
                        Have questions about your bills or our management system? Our team is here to help you 24/7.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Contact Information Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow border border-base-300">
                            <div className="card-body flex-row items-center gap-5">
                                <div className="bg-primary/10 p-4 rounded-full text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Call Us</h3>
                                    <p className="text-base-content/70">+880 123 456 789</p>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow border border-base-300">
                            <div className="card-body flex-row items-center gap-5">
                                <div className="bg-secondary/10 p-4 rounded-full text-secondary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Email Support</h3>
                                    <p className="text-base-content/70">support@easybill.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow border border-base-300">
                            <div className="card-body flex-row items-center gap-5">
                                <div className="bg-accent/10 p-4 rounded-full text-accent">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Location</h3>
                                    <p className="text-base-content/70">Banani, Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Section */}
                        <div className="card bg-primary text-primary-content shadow-lg">
                            <div className="card-body items-center text-center">
                                <h3 className="card-title mb-2">Connect With Us</h3>
                                <div className="flex gap-4">
                                    <button className="btn btn-circle btn-ghost bg-white/10 hover:bg-white/20">
                                        <FaFacebook size={20} />
                                    </button>
                                    <button className="btn btn-circle btn-ghost bg-white/10 hover:bg-white/20">
                                        <FaLinkedin size={20} />
                                    </button>
                                    <button className="btn btn-circle btn-ghost bg-white/10 hover:bg-white/20">
                                        <FaSquareXTwitter size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="lg:col-span-2">
                        <div className="card bg-base-100 shadow-2xl border border-base-300">
                            <div className="card-body">
                                <h2 className="card-title text-2xl mb-6 text-primary">Send Us a Message</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Your Name</span>
                                            </label>
                                            <input type="text" placeholder="Mr Rahim" className="input input-bordered focus:input-primary w-full" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Email Address</span>
                                            </label>
                                            <input type="email" placeholder="rahim@example.com" className="input input-bordered focus:input-primary w-full" required />
                                        </div>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold">Subject</span>
                                        </label>
                                        <select className="select select-bordered focus:select-primary w-full">
                                            <option disabled selected>Select Inquiry Type</option>
                                            <option>Billing Issue</option>
                                            <option>Technical Support</option>
                                            <option>Feedback</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-semibold mr-4">Message</span>
                                        </label>
                                        <textarea
                                            className="textarea textarea-bordered focus:textarea-primary"
                                            placeholder="How can we help you today?"
                                            required
                                            rows={7}
                                        ></textarea>
                                    </div>

                                    <div className="form-control mt-6">
                                        <button type="submit" className="btn btn-primary btn-block text-lg shadow-lg hover:scale-[1.02] transition-transform">
                                            <Send size={20} className="mr-2" />
                                            Submit Inquiry
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;