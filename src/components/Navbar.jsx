import React, { useEffect, useState } from 'react';
import logoImg from '../assets/logo1png.png'
import { Link, NavLink } from 'react-router';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';
import userImg from '../assets/user.png'
const Navbar = () => {
    const { user, signOutUser } = useAuth();
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/bills'>Bills</NavLink></li>
        {
            user && <>
                <li><NavLink to='/myPayBills'>My Pay Bills</NavLink></li>
            </>
        }
        <li><NavLink to="/aboutUs">About Us</NavLink></li>
        <li><NavLink to="/contuct">Contuct</NavLink></li>
    </>

    // handle sign out
    const handleSignOut = () => {
        console.log("sign out button clicked")
        signOutUser()
            .then(() => {
                toast.success("sign out success");
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        const html = document.querySelector('html')
        html.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    // handle theme
    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light")
    }
    return (
        <div className='w-11/12 mx-auto'>
            <div className="navbar bg-base-100 shadow-sm flex justify-center items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">EasyBill</a>
                    <img className='w-10 h-10 rounded-full' src={logoImg} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    <input
                        onChange={(e) => handleTheme(e.target.checked)}
                        type="checkbox"
                        defaultChecked={localStorage.getItem('theme') === "dark"}
                        className="toggle mr-3" />


                    {user ? (
                        <div className="dropdown dropdown-end z-50 flex items-center">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-9 border-2 border-gray-300 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        referrerPolicy="no-referrer"
                                        src={user.photoURL || "https://i.postimg.cc/rwWxJQ6w/user.png"}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex="-1"
                                className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
                            >
                                <div className=" pb-3 border-b border-b-gray-200">
                                    <li className="text-sm font-bold">{user.displayName}</li>
                                    <li className="text-xs">{user.email}</li>
                                </div>
                                <li className='mb-3'>
                                    <button
                                        onClick={signOutUser}
                                        className="btn btn-xs text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
                                    >
                                        {/* <IoLogOut /> */}
                                         Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <>
                        <Link
                            to={"/login"}
                            className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-pink-500 to-purple-500 text-white"
                        >
                            {" "}
                            Login
                        </Link>
                        <Link to="/register" className='ml-3 btn btn-outline bg-gray-500   text-white rounded-2xl' >Register</Link>
                        </>
                    )}


                </div>
            </div>
        </div>
    );
};

export default Navbar;