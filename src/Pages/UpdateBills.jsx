import React from 'react';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const UpdateBills = () => {
    const bill = useLoaderData();
    // console.log(bill);

    // handleUpdate Bill
    // console.log(bill._id)
    const handleUpdateBill = e =>{
        e.preventDefault();
        const userName = e.target.userName.value;
        const email = e.target.email.value;
        const amount = e.target.amount.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        const date = e.target.date.value;
        console.log("update bill button clicked", userName, email, amount, address, phone, date);
        const updateBill = {userName, email, amount, address, phone, date}

        fetch(`https://easy-bill-server.vercel.app/my-bills/${bill._id}`,{
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBill)
        })
        .then(res => res.json())
        .then(data=> {
            toast("bill update successfully");
            console.log(data);
        })
    }
    return (
        <div className='py-10'>
            <h2 className='text-5xl font-bold text-center'>Update Bills</h2>
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl mt-8">
                <div className="card-body">
                    <h1 className="text-3xl font-bold mb-5">Update Now</h1>
                    <form onSubmit={handleUpdateBill}>
                        <fieldset className="fieldset">
                            {/* userName */}
                            <label className="label">User Name</label>
                            <input type="text" name='userName' className="input" defaultValue={bill.userName} />
                            {/* email */}
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" defaultValue={bill.email} />
                            {/* phone */}
                            <label className="label">Phone</label>
                            <input type="text" name='phone' className="input" defaultValue={bill.phone} />
                            {/* address */}
                            <label className="label">Address</label>
                            <input type="address" name="address" className="input" defaultValue={bill.address} />
                            {/* amount */}
                            <label className="label">Amount</label>
                            <input type="amount" name="amount" className="input" defaultValue={bill.amount} />
                            {/* date */}
                            <label className="label">Date</label>
                            <input type="date" name="date" className="input" defaultValue={bill.date} />
                            <button className="btn btn-neutral mt-4">Update</button>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default UpdateBills;