import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllBilsCard from '../components/AllBilsCard';
const Bills = () => {
    const bills = useLoaderData();
    const [category, setCategory] = useState(bills)
    const [loading, setLoading] = useState(false)
    // console.log(bills);

    // handle search
    const handleSearch = e => {
        e.preventDefault();
        const search = e.target.search.value;
        console.log("clicked search", search)
        setLoading(true)
        fetch(`http://localhost:3000/search?search=${search}`)
            .then(res => res.json())
            .then(data => {
                setCategory(data);
                setLoading(false)
                console.log("after search", data);
            })
    }

    return (
        <div className='mt-15 mb-20'>

            <form onSubmit={handleSearch} className='flex justify-center items-center gap-5 py-5 '>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" name='search' placeholder="Search By Category" />

                </label>
                <button className='btn btn-outline px-8 bg-gray-500'>
                    {loading
                        ? "Searching..."
                        : "Search"
                    }
                </button>
            </form>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
                {
                    category.map(bill => <AllBilsCard
                        key={bill._id}
                        bill={bill}
                    ></AllBilsCard>)
                }
            </div>
        </div>
    );
};

export default Bills;