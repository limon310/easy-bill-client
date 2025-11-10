import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';

const BillDetails = () => {
    const { user } = useAuth();
    const bill = useLoaderData();
    const modalRef = useRef(null);
    // console.log(bill);
    const { title, category, location, description, image, amount, date, _id } = bill;
    // console.log(amount)

    // handle modal
    const handleModalOpen = () => {

        const today = new Date();
        const billDate = new Date(date);
        console.log(billDate)
        const billMonth = billDate.getMonth();
        const billYear = billDate.getFullYear();
        console.log(billYear)
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        console.log(`Bill Month/Year: ${billMonth + 1}/${billYear}`);
        console.log(`Current Month/Year: ${currentMonth + 1}/${currentYear}`);
        if(billMonth == currentMonth && billYear == currentYear){
            modalRef.current.showModal();
        }
        else{
            toast.error("only current month bills can be paid.")
        }
        
    }

    // handle pay bill

    const handlePayBill = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const billId = e.target.billId.value;
        const amount = e.target.amount.value;
        const userName = e.target.userName.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        const date = e.target.date.value;
        console.log("pay bil button clicked", email, billId, amount, userName, address, phone, date);

        const newBill = { email, billId, amount, userName, address, phone, date }

        fetch("http://localhost:3000/my-bill", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBill)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Bill pay successfull");
                console.log("after post:", data);
            })
    }

    return (
        <div className='py-10'>
            <h2 className='mb-10'>Bill details Page</h2>
            <div className='flex gap-10 p-10 bg-gray-300 rounded-2xl'>
                <div className=''>
                    <img className='rounded-2xl h-[350px]'
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="" />
                </div>
                <div className=''>
                    <h2 className='text-2xl font-bold '>{title}</h2>
                    <p>{category}</p>
                    <p>{description}</p>
                    <p>{location}</p>
                    <p>{amount}</p>
                    <p>{date}</p>
                    <div className='mt-10'>
                        <button
                            onClick={handleModalOpen}
                            className="btn btn-primary">Pay Now</button>

                        <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Give the best offer!</h3>
                                <p className="py-4">Offer something seller can not resist</p>
                                <form onSubmit={handlePayBill}>
                                    <fieldset className="fieldset">
                                        {/* email */}
                                        <label className="label">Email</label>
                                        <input type="email" className="input" name='email' readOnly defaultValue={user?.email} />
                                        {/* bill id */}
                                        <label className="label">Bill Id</label>
                                        <input type="text" name='billId' className="input"
                                            readOnly
                                            defaultValue={_id} />
                                        {/* amount */}
                                        <label className="label">Amount</label>
                                        <input type="text" name='amount' className="input" readOnly
                                            defaultValue={amount}
                                        />
                                        {/* User name */}
                                        <label className="label">User Name</label>
                                        <input type="text" name='userName' className="input"
                                            placeholder='User Name'
                                        />
                                        {/* Address */}
                                        <label className="label">Address</label>
                                        <input type="text" name='address' className="input"
                                            placeholder='Address'
                                        />
                                        {/* Phone */}
                                        <label className="label">Phone</label>
                                        <input type="text" name='phone' className="input"
                                            placeholder='Phone'
                                        />
                                        {/* Date */}
                                        <label className="label">Date</label>
                                        <input type="text" name='date' className="input" readOnly
                                            defaultValue={date}
                                        />
                                        <button className="btn btn-neutral mt-4">Please Your Bill</button>
                                    </fieldset>
                                </form>

                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillDetails; <h2>Bill details</h2>