
import React from 'react';
import { Mail, Send } from 'lucide-react';
import logo from '../assets/logo1png.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router';
import { toast } from 'react-toastify';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // stay update
    const staUpdate = (e) => {
        e.preventDefault();
        toast.success("Message sent!")
    }

    return (
        <footer className="bg-base-300 text-neutral-content transition-colors duration-300">
            {/* Top Section: Branding & Newsletter */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Column 1: Brand Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex items-center justify-center">
                                <img className='w-10 h-10 rounded-full' src={logo} alt="logo" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-neutral-content">
                                Easy<span className="text-primary">Bill</span>
                            </span>
                        </div>
                        <p className="text-neutral opacity-70 mb-6 leading-relaxed">
                            Simplifying utility management for modern households. Track, manage, and save on your bills with ease.
                        </p>
                        <div className="flex gap-4">
                            <a href='https://x.com/' target='_blank' className="btn btn-ghost btn-circle btn-sm hover:text-primary transition-colors">
                                <FaSquareXTwitter size={20} />
                            </a>
                            <a href="https://github.com/limon310" target='_blank' className="btn btn-ghost btn-circle btn-sm hover:text-primary transition-colors">
                                <FaGithub size={20} />
                            </a>
                            <a href='https://www.linkedin.com/in/limon-dev/' target="_blank" className="btn btn-ghost btn-circle btn-sm hover:text-primary transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-neutral-content">Use Full Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-neutral opacity-70 hover:text-primary hover:opacity-100 transition-all">Dashboard</a></li>
                            <li><a href="#" className="text-neutral opacity-70 hover:text-primary hover:opacity-100 transition-all">Analytics</a></li>
                            <li><a href="#" className="text-neutral opacity-70 hover:text-primary hover:opacity-100 transition-all">Bill History</a></li>
                            <li><a href="#" className="text-neutral opacity-70 hover:text-primary hover:opacity-100 transition-all">Pricing</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-neutral-content">Support</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-neutral opacity-70 hover:text-primary hover:opacity-100 transition-all">Help Center</a></li>
                            <li><a href="#" className="text-neutral opacity-70 hover:text-primary hover:opacity-100 transition-all">Privacy Policy</a></li>
                            <li><a href="#" className="text-neutral opacity-70 hover:text-primary hover:opacity-100 transition-all">Terms of Service</a></li>
                            <li><Link to="/contuct" className="text-neutral opacity-70 hover:text-primary hover:opacity-100 transition-all">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="lg:col-span-1">
                        <h4 className="font-bold text-lg mb-6 text-neutral-content">Stay Updated</h4>
                        <p className="text-neutral opacity-70 mb-4 text-sm">
                            Get monthly tips on reducing your utility costs.
                        </p>
                        <div className="form-control">
                            <div className="relative">
                                <form onSubmit={staUpdate}>
                                    <input
                                        type="text"
                                        placeholder="email@example.com"
                                        required
                                        className="input input-bordered w-full pr-16 bg-base-100 border-base-300 focus:border-primary focus:outline-none"
                                    />
                                    <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                                        <Send size={18} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Section: Copyright */}
            <div className="border-t border-base-200 bg-base-300 py-8">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-neutral opacity-60 text-sm">
                        © {currentYear} EasyBill Utility Management. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm">
                        <span className="flex items-center gap-1 text-neutral opacity-60">
                            <Mail size={14} /> support@easybill.com
                        </span>
                        <div className="badge badge-outline badge-sm opacity-50">v1.0.0</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;