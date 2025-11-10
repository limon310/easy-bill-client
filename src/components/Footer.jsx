import React from 'react';
import xLogo from '../assets/x logo.jpg';
import youtubeLogo from '../assets/youtube logo.png';
import { Link } from 'react-router';
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <Link to='/aboutUs' className="link link-hover">About Us</Link>
                    <Link to="/contuct" className="link link-hover">Contact</Link>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://x.com/" target='_blank'><img className='w-6 h-6 rounded-full' src={xLogo} alt="" /></a>
                        <a href="" target='_blank'><img className='w-6 h-6 rounded-full' src={youtubeLogo} alt="" /></a>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;