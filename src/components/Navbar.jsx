import React from 'react';
import logoImg from '../assets/logo1png.png'
import { Link } from 'react-router';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';
import userImg from '../assets/user.png'
const Navbar = () => {
    const { user, signOutUser } = useAuth();
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/bills'>Bills</Link></li>
        {
            user && <>
                <li><Link to='/myPayBills'>My Pay Bills</Link></li>
            </>
        }
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
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">EasyBill</a>
                    <img className='w-10 h-10 rounded-full' src={logoImg} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">
                            {
                                user
                                    ?
                                    <img className='w-10 h-10' src={userImg} alt="" />
                                    : ""
                            }
                        </div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            {
                                user
                                    ? <p>{user.displayName}</p>
                                    : ""
                            }
                        </ul>
                    </div>
                    {
                        user
                            ? <button onClick={handleSignOut} className='btn btn-active btn-primary'>Log Out</button>
                            : <Link to='/login' className="btn btn-active btn-primary">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;