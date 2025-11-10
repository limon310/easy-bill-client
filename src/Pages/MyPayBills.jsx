import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router';
import { Trash2 } from 'lucide-react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const MyPayBills = () => {
    const { user } = useAuth();
    const [bills, setBills] = useState([])
    const modalRef = useRef();

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/my-bills?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setBills(data);
                    console.log(data);
                })
        }
    }, [user?.email])
    console.log(bills)

    // handle delete
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("clicked")
                fetch(`http://localhost:3000/my-bills/${id}`, {
                    method: "DELETE",

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log("after delete", data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainingBill = bills.filter(bill => bill._id !== id);
                            setBills(remainingBill);
                        }
                    })
            }
        });
    }

    // handle open modal
    const handleOpenModal = () => {
        // console.log("update button clicked")
        modalRef.current.showModal();
    }

    // handleUpdate
    const handleUpdate = e => {
        e.preventDefault();
        const userName = e.target.userName.value;
        const email = e.target.email.value;
        const amount = e.target.amount.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        const date = e.target.date.value;
        console.log("clicked Update", userName, email, amount, address, phone, date);

        const updateBill = { userName, email, amount, address, phone, date }

        fetch(`http://localhost:3000/my-bills/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBill)
        })
            .then(res => res.json())
            .then(data => {
                toast("bill update successfully");
                console.log(data);
            })

    }
    return (
        <div className='py-10'>
            <h2 className='text-3xl font-bold text-center'>My Bills: {bills.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl No.</th>
                            <th>Name</th>
                            <th>Amount / BillId</th>
                            <th>Bill Id</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bills.map((bill, index) => <tr key={bill._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={user.photoURL}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{bill.userName}</div>
                                            <div className="text-sm opacity-50">{bill.address}</div>
                                            <div className="text-sm opacity-50">{bill.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span>Amount: {bill.amount}</span>
                                    <br></br>
                                    <span>BillId: {bill.billId}</span>
                                </td>
                                <td>
                                    <span>{bill.phone}</span>
                                    <br></br>
                                    <span>{bill.date}</span>
                                </td>
                                <th>
                                    <button onClick={handleOpenModal} className="btn btn-ghost btn-xs">Update</button>
                                    {/* <Link to={`/update-bills/${bill._id}`} className="btn btn-ghost btn-xs">Update</Link> */}

                                    {/* modal */}
                                    <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Update Your Bill!</h3>
                                            <form onSubmit={handleUpdate}>
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

                                            <div className="modal-action">
                                                <form method="dialog">
                                                    <button className="btn">Cancel</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>

                                </th>
                                <th>
                                    <button onClick={() => handleDelete(bill._id)} className='btn btn-outline'><Trash2 /></button>
                                </th>
                            </tr>)
                        }


                    </tbody>
                    {/* foot */}
                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot> */}
                </table>
            </div>

        </div>
    );
};

export default MyPayBills;