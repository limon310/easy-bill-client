import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const RootLayouts = () => {
    const {state} = useNavigation();
    // console.log("loading", state)
    return (
        <div className='flex flex-col min-h-screen bg-base-100 text-base-content'>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='flex-1'>
                {state==="loading"?<Loading></Loading>:<Outlet></Outlet>}
                {/* <Outlet></Outlet> */}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default RootLayouts;