
import { useQuery } from "@tanstack/react-query";
import {
    CalendarDays,
    MapPin,
    Mail,
    ArrowLeft,
} from "lucide-react";
import { FaBolt } from "react-icons/fa";
import useAxios from "../hooks/useAxios";
import { useNavigate, useParams } from "react-router";
import { useRef } from "react";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import BillDetailsSkeleton from "../components/skeelton/BillDetailsSkeleton";


const BillDetails = () => {
    const axios = useAxios();
    const modalRef = useRef(null);
    const { user } = useAuth();
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: bill = {}, isLoading } = useQuery({
        queryKey: ["bill-details", id],
        queryFn: async () => {
            const res = await axios.get(`/bills/${id}`)
            return res.data;
        }
    })
    const {
        title,
        category,
        email,
        location,
        description,
        image,
        date,
        amount,
        _id
    } = bill || {};

    // handle modal
    // date calculate
    const today = new Date();
    const billDate = new Date(date);
    const billMonth = billDate.getMonth();
    const billYear = billDate.getFullYear();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const handleModalOpen = () => {
        modalRef.current.showModal();
    }

    const handlePayBill = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const billId = e.target.billId.value;
        const amount = e.target.amount.value;
        const userName = e.target.userName.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        const date = e.target.date.value;
        const newBill = { email, billId, amount, userName, address, phone, date }

        axios.post('my-bill', newBill)
            .then(res => {
                // console.log(res.data);
                if (res.data.insertedId) {
                    toast.success("payment success");
                    modalRef.current.close();
                }
            })
    }

    if(isLoading){
        return <BillDetailsSkeleton />
    }

    return (
        <div className="max-w-5xl mx-auto py-10">

            {/* Header */}
            <div className="mb-6 flex items-center gap-3">
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-sm btn-ghost"
                >
                    <ArrowLeft size={18} />
                </button>

                <div>
                    <h1 className="text-2xl font-semibold text-base-content">
                        Bill Details
                    </h1>
                    <p className="text-sm text-base-content/60">
                        Review and manage your bill information
                    </p>
                </div>
            </div>

            {/* Main Card */}
            <div className="card bg-base-100 border border-base-300 rounded-xl shadow-sm">

                {/* Image */}
                <figure className="h-56 overflow-hidden rounded-t-xl">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                    />
                </figure>

                {/* Body */}
                <div className="card-body p-6 space-y-6">

                    {/* Title */}
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-secondary/15 text-secondary">
                            <FaBolt size={22} />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-base-content">
                                {title}
                            </h2>
                            <p className="text-sm text-base-content/60">
                                {category}
                            </p>
                        </div>
                    </div>

                    {/* Amount + Status */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p className="text-sm text-base-content/60">
                                Amount Due
                            </p>
                            <p className="text-3xl font-bold text-base-content">
                                ৳ {amount}
                            </p>
                        </div>
                        <span className="badge badge-warning badge-outline px-4 py-3 text-sm">
                            Pending
                        </span>
                    </div>

                    <div className="divider" />

                    {/* Meta Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">

                        <div className="flex items-center gap-3">
                            <CalendarDays size={18} className="text-primary" />
                            <div>
                                <p className="text-base-content/60">Due Date</p>
                                <p className="text-base-content">
                                    {new Date(date).toDateString()}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <MapPin size={18} className="text-primary" />
                            <div>
                                <p className="text-base-content/60">Location</p>
                                <p className="text-base-content">{location}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail size={18} className="text-primary" />
                            <div>
                                <p className="text-base-content/60">Billing Email</p>
                                <p className="text-base-content">{email}</p>
                            </div>
                        </div>

                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                        <h3 className="font-medium text-base-content">
                            Description
                        </h3>
                        <p className="text-sm text-base-content/70 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="card-actions justify-end gap-3 pt-4 items-center">

                        {
                            billMonth === currentMonth && billYear === currentYear ? (
                                /* Active Payment */
                                <button
                                    onClick={handleModalOpen}
                                    className="btn btn-success btn-sm"
                                >
                                    Pay Now
                                </button>
                            ) : (
                                /* Disabled Payment + Info */
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-accent">
                                        You can only pay bills for the current month.
                                    </span>
                                    <button
                                        className="btn btn-success btn-sm btn-disabled"
                                    >
                                        Pay Now
                                    </button>
                                </div>
                            )
                        }

                    </div>
                </div>
            </div>
            {/* modal */}
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle text-gray-800">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Pay Your Bill Just One Click!</h3>
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
                                defaultValue={user?.displayName}
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
                            <button className="btn">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default BillDetails;

