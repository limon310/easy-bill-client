import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllBilsCard from '../components/AllBilsCard';
const Bills = () => {
    const bills = useLoaderData();
    const [category, setCategory] = useState(bills)
    const [loading, setLoading] = useState(false)
    const [selectByCategory, setSelectByCategory] = useState("");
    // console.log(bills);

    const categories = [...new Set(bills.map(bill => bill.category))];

    // handle search
    const handleSearchByCategory = e => {
        const search = e.target.value;
        setSelectByCategory(search)
        // console.log("clicked search", search)
        setLoading(true)
        fetch(`https://easy-bill-server.vercel.app/search?search=${search}`)
            .then(res => res.json())
            .then(data => {
                setCategory(data);
                setLoading(false)
                // console.log("after search", data);
            })
    }

    return (
        <div className='w-11/12 mx-auto mt-15 mb-20'>
            <title>Easy Bill All-Bills</title>
            <div className="flex justify-center items-center gap-5 py-5">
                <select
                    value={selectByCategory}
                    onChange={handleSearchByCategory}
                    className="select select-bordered w-60"
                >
                    <option value="">Select Category</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>

                <button className="btn btn-outline px-8 bg-gray-500 text-white">
                    {loading ? "Loading..." : "Filter"}
                </button>
            </div>

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




// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router';
// import AllBilsCard from '../components/AllBilsCard';

// const Bills = () => {
//     const bills = useLoaderData();
//     const [category, setCategory] = useState(bills);
//     const [loading, setLoading] = useState(false);
//     const [selectedCategory, setSelectedCategory] = useState("");

//     // unique category names বের করা
//     const categories = [...new Set(bills.map(bill => bill.category))];

//     // handle category change
//     const handleCategoryChange = async (e) => {
//         const value = e.target.value;
//         setSelectedCategory(value);
//         setLoading(true);

//         try {
//             const res = await fetch(`https://easy-bill-server.vercel.app/search?search=${value}`);
//             const data = await res.json();
//             setCategory(data);
//         } catch (error) {
//             console.error("Error fetching category data:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="mt-15 mb-20">
//             {/* Dropdown Menu */}
//             <div className="flex justify-center items-center gap-5 py-5">
//                 <select
//                     value={selectedCategory}
//                     onChange={handleCategoryChange}
//                     className="select select-bordered w-60"
//                 >
//                     <option value="">Select Category</option>
//                     {categories.map((cat, index) => (
//                         <option key={index} value={cat}>
//                             {cat}
//                         </option>
//                     ))}
//                 </select>

//                 <button
//                     className="btn btn-outline px-8 bg-gray-500 text-white"
//                     disabled={loading || !selectedCategory}
//                 >
//                     {loading ? "Loading..." : "Filter"}
//                 </button>
//             </div>

//             {/* Bills Card */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
//                 {category.length > 0 ? (
//                     category.map((bill) => (
//                         <AllBilsCard key={bill._id} bill={bill} />
//                     ))
//                 ) : (
//                     <p className="text-center col-span-full text-gray-500">
//                         No bills found for this category.
//                     </p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Bills;
