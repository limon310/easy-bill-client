import { Clock, MoveRight, TriangleAlert } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const UpcomingBillsSection = () => {

    return (
        <section className="pt-20">
            <div className='p-4 md:p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl'>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center justify-center">
                <span className='mr-2'><Clock /></span>
                Upcoming Bills & Alerts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

                {/* Card 1: Late Alerts */}
                <div className="lg:col-span-1 p-6 bg-red-100 dark:bg-red-900 border-l-4 border-red-500 rounded-lg shadow-md transition duration-300 hover:shadow-lg">
                    <div className="flex items-center">
                        <p className="text-sm font-medium text-red-600 dark:text-red-300 uppercase">Urgent Alert</p>
                        <p className="text-2xl font-extrabold text-red-900 dark:text-red-100 flex justify-center gap-3 items-center">
                            <span><TriangleAlert /></span> 1 Bill Late!
                        </p>
                    </div>
                    <Link to="bills" className="mt-3 text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 transition duration-150">
                        View & Pay Now &rarr;
                    </Link>
                </div>

                {/* Card 2: Next Bill Due */}

                <div className="p-6 bg-whiterounded-lg shadow-xl  border-b-4 border-indigo-500">
                    <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase mb-1">Next Payment Due</p>
                    <h3 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
                        Internet Service
                    </h3>
                    <p className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                        <span className="font-bold text-green-600">$75.00</span> due on {new Date().getFullYear()}
                    </p>
                    <button className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition duration-150 shadow-md">
                        Mark as Paid
                    </button>
                </div>

                {/* Card 3: Summary of the Week */}
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border-l-4 border-green-500">
                    <p className="text-sm font-medium text-green-600 dark:text-green-400 uppercase">Total Upcoming</p>
                    <p className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mt-1">
                        3 Bills
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Totaling <span className="font-bold text-indigo-600">$240.50</span>
                    </p>
                    <Link to="/" className="flex items-center gap-3 mt-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:hover:text-indigo-200 transition duration-150 ">
                        View All Upcoming <span> <MoveRight size={14} /></span> ;
                    </Link>
                </div>

            </div>
            </div>
        </section>
    );
};

export default UpcomingBillsSection;