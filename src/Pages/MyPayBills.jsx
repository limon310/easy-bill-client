
import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { FileText, Trash2, Edit3, CreditCard, Calendar, MapPin } from 'lucide-react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { motion } from 'framer-motion';

const MyPayBills = () => {
    const { user } = useAuth();
    const [bills, setBills] = useState([]);
    const [selectedBill, setSelectedBill] = useState(null);
    const [totalPaid, setTotalPaid] = useState(0);
    const modalRef = useRef();

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/my-bills?email=${user.email}`)
                .then(res => res.json())
                .then(data => setBills(data));
        }
    }, [user?.email]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/total-paid?email=${user.email}`)
                .then(res => res.json())
                .then(data => setTotalPaid(data));
        }
    }, [user?.email]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Remove Bill?",
            text: "This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "oklch(60% 0.22 25)", 
            cancelButtonColor: "oklch(35% 0.02 250)", 
            confirmButtonText: "Yes, delete"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/my-bills/${id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            toast.success("Bill removed successfully");
                            setBills(bills.filter(bill => bill._id !== id));
                        }
                    });
            }
        });
    };

    const handleOpenModal = (bill) => {
        setSelectedBill(bill);
        modalRef.current.showModal();
    };

    const handleUpdate = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedData = Object.fromEntries(formData.entries());

        fetch(`http://localhost:3000/my-bills/${selectedBill._id}`, {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Changes saved");
                    setBills(bills.map(b => b._id === selectedBill._id ? { ...b, ...updatedData } : b));
                    modalRef.current.close();
                }
            });
    };

    // const downloadPDF = () => {
    //     const doc = new jsPDF();
    //     doc.setFontSize(18);
    //     doc.setTextColor(62, 100, 250); // Matches your Primary Blue
    //     doc.text("EasyBill - Payment Summary", 14, 20);

    //     const tableRows = bills.map((b, i) => [i + 1, b.userName, b.amount, b.date, b.address]);
    //     doc.autoTable({
    //         startY: 30,
    //         head: [['#', 'User', 'Amount', 'Date', 'Location']],
    //         body: tableRows,
    //         headStyles: { fillColor: [62, 118, 250] }
    //     });
    //     doc.save(`${user.displayName}-bills.pdf`);
    // };

    const downloadPDF = () => {
        const doc = new jsPDF();
        let y = 20;

        // Title
        doc.setFontSize(16);
        doc.text("EasyBill - My Bills Summary", 14, y);
        y += 10;

        // Table Header
        doc.setFontSize(12);
        doc.text("SL", 14, y);
        doc.text("Name", 30, y);
        doc.text("Email", 80, y);
        doc.text("Amount", 140, y);
        doc.text("Date", 170, y);
        y += 6;

        // Draw a line under header
        doc.line(14, y, 200, y);
        y += 4;

        // Table rows
        bills.forEach((bill, index) => {
            doc.text(`${index + 1}`, 14, y);
            doc.text(bill.userName || "N/A", 30, y);
            doc.text(bill.email || "N/A", 80, y);
            doc.text(`${bill.amount || 0}`, 140, y);
            doc.text(bill.date || "N/A", 170, y);
            y += 8;

            // Page break
            if (y > 280) {
                doc.addPage();
                y = 20;
            }
        });

        doc.save("my-bills.pdf");
        toast.success("✅ PDF downloaded successfully!");
    };

    return (
        <div className='min-h-screen bg-base-100 py-12 px-4 sm:px-8'>
            <div className='max-w-7xl mx-auto'>

                {/* Header & Stats Section */}
                <div className='flex flex-col md:flex-row justify-between items-center gap-6 mb-10'>
                    <div>
                        <h1 className='text-4xl font-black text-neutral-content'>My Bill History</h1>
                        <p className='text-neutral'>Manage and track your recent payments</p>
                    </div>

                    <div className="stats shadow-lg bg-base-200 border border-base-300">
                        <div className="stat">
                            <div className="stat-title text-neutral">Total Bills</div>
                            <div className="stat-value text-primary">{bills.length}</div>
                        </div>
                        <div className="stat">
                            <div className="stat-title text-neutral">Total Paid</div>
                            <div className="stat-value text-accent">${totalPaid.totalPaid || 0}</div>
                        </div>
                    </div>
                </div>

                {/* Toolbar */}
                <div className='flex justify-between items-center mb-6'>
                    <button onClick={downloadPDF} className="btn btn-primary btn-outline shadow-sm">
                        <FileText size={18} className="mr-2" /> Export PDF Report
                    </button>
                </div>

                {/* Table Section */}
                <div className="bg-base-200 rounded-3xl border border-base-300 overflow-hidden shadow-xl">
                    <table className="table w-full">
                        <thead className='bg-base-300/50 text-neutral-content uppercase text-xs tracking-wider'>
                            <tr>
                                <th className="py-4">User Details</th>
                                <th>Payment Info</th>
                                <th>Schedule</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-base-300">
                            {bills.map((bill) => (
                                <motion.tr
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    key={bill._id}
                                    className="hover:bg-base-300/30 transition-colors"
                                >
                                    <td>
                                        <div className="flex items-center gap-4">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12 border-2 border-primary/20">
                                                    <img src={user.photoURL} alt="User" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-neutral-content">{bill.userName}</div>
                                                <div className="text-xs text-neutral flex items-center gap-1">
                                                    <MapPin size={12} /> {bill.address}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-lg text-primary">${bill.amount}</span>
                                            <span className="text-xs font-mono text-neutral bg-base-100 w-fit px-1 rounded">#{bill.billId || 'N/A'}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="text-sm text-neutral-content flex items-center gap-2">
                                            <Calendar size={14} className="text-secondary" /> {bill.date}
                                        </div>
                                        <div className="text-xs text-neutral">{bill.phone}</div>
                                    </td>
                                    <td>
                                        <div className="flex justify-center gap-2">
                                            <button
                                                onClick={() => handleOpenModal(bill)}
                                                className="btn btn-square btn-ghost text-secondary hover:bg-secondary/10"
                                            >
                                                <Edit3 size={18} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(bill._id)}
                                                className="btn btn-square btn-ghost text-error hover:bg-error/10"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Update Modal */}
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-base-100 border border-base-300 p-0 overflow-hidden">
                    <div className="bg-primary p-6 text-white">
                        <h3 className="font-bold text-2xl flex items-center gap-2">
                            <CreditCard /> Update Transaction
                        </h3>
                        <p className="text-white/80 text-sm">Modify the bill details for reference</p>
                    </div>

                    <form onSubmit={handleUpdate} className="p-6 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label text-xs font-bold text-neutral uppercase">Payee Name</label>
                                <input type="text" name='userName' className="input input-bordered bg-base-200" defaultValue={selectedBill?.userName} />
                            </div>
                            <div className="form-control">
                                <label className="label text-xs font-bold text-neutral uppercase">Amount ($)</label>
                                <input type="number" name="amount" className="input input-bordered bg-base-200" defaultValue={selectedBill?.amount} />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label text-xs font-bold text-neutral uppercase">Address</label>
                            <input type="text" name="address" className="input input-bordered bg-base-200" defaultValue={selectedBill?.address} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label text-xs font-bold text-neutral uppercase">Phone</label>
                                <input type="text" name='phone' className="input input-bordered bg-base-200" defaultValue={selectedBill?.phone} />
                            </div>
                            <div className="form-control">
                                <label className="label text-xs font-bold text-neutral uppercase">Date</label>
                                <input type="date" name="date" className="input input-bordered bg-base-200" defaultValue={selectedBill?.date} />
                            </div>
                        </div>

                        <div className="modal-action flex gap-2 pt-4">
                            <button type="button" onClick={() => modalRef.current.close()} className="btn btn-ghost flex-1">Cancel</button>
                            <button type="submit" className="btn btn-primary flex-1">Save Changes</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default MyPayBills;