import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { FileText, Trash2 } from 'lucide-react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const MyPayBills = () => {
    const { user } = useAuth();
    const [bills, setBills] = useState([])
    const [selectedBillsId, setSelectedBillsId] = useState(null)
    const [totalPaid, setTotalPaid] = useState(0);
    const modalRef = useRef();

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/my-bills?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setBills(data);
                    // console.log(data);
                })
        }
    }, [user?.email,])
    // console.log(bills)

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
                        if (data.deletedCount > 0) {
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
    const handleOpenModal = (id) => {
        // console.log("update button clicked", id)
        setSelectedBillsId(id)
        modalRef.current.showModal();
    }
    // handleUpdate
    const handleUpdate = e => {
        e.preventDefault();
        const updatedBillId = selectedBillsId;
        const userName = e.target.userName.value;
        const email = e.target.email.value;
        const amount = e.target.amount.value;
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        const date = e.target.date.value;
        // console.log("clicked Update", userName, email, amount, address, phone, date);

        const updateBill = { userName, email, amount, address, phone, date }

        fetch(`http://localhost:3000/my-bills/${selectedBillsId}`, {
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

                if (data.modifiedCount > 0) {
                    const updatedBillData = bills.map(bill => {
                        if (bill._id === updatedBillId) {
                            return { ...bill, ...updateBill };
                        }
                        return bill;
                    });
                    setBills(updatedBillData);
                    modalRef.current.close();
                }
            })

    }

    // total paid 
    useEffect(() => {
        fetch(`http://localhost:3000/total-paid?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setTotalPaid(data);
                // console.log("after get total bill", data);
            })
    }, [user.email])
    // console.log(totalPaid)

    // DOWNLOAD ALL BILLS PDF
    // const downloadPDF = () => {
    //     const doc = new jsPDF();
    //     doc.text("EasyBill - My Bills Summary", 14, 15);

    //     const tableColumn = ["Title", "Category", "Amount", "Date"];
    //     const tableRows = bills.map((bill) => [
    //         bill.title,
    //         bill.category,
    //         bill.amount,
    //         bill.date,
    //     ]);

    //         doc.autoTable({
    //         head: [tableColumn],
    //         body: tableRows,
    //         styles: { fontSize: 14, cellPadding: 4 },
    //         headStyles: { fillColor: [25, 118, 210], textColor: 255 },
    //         alternateRowStyles: { fillColor: [240, 240, 240] },
    //     });

    //     doc.save("my-bills.pdf");
    // }

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
        <div className='w-11/12 mx-auto p-8 mt-10 mb-10 bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white rounded-2xl'>
            <title>Easy Bill My-Pay-Bills</title>
            <h2 className='text-3xl font-bold text-center'>My Bills: {bills.length}</h2>

            {/* download all bils pdf btn */}
            {/* <button onClick={downloadPDF} className="btn btn-primary">
                Download All Bills (PDF)
            </button> */}
            <button onClick={downloadPDF} className="btn btn-outline btn-sm">
                <FileText size={16} />
                Download Invoice
            </button>

            {/* total paid */}
            <div className='flex justify-end items-center'>
                <h2 className='text-2xl font-bold text-yellow-400'>Total Paid: {totalPaid.totalPaid}</h2>
            </div>

            {/* TABLE */}

            <div className="overflow-x-auto mt-6">
                <table className="table">
                    {/* head */}
                    <thead className='text-yellow-400'>
                        <tr>
                            <th>Sl No.</th>
                            <th>Name</th>
                            <th>Amount / BillId</th>
                            <th>Phone / Date</th>
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
                                    <button onClick={() => handleOpenModal(bill._id)} className="btn btn-ghost btn-xs">Update</button>
                                    {/* <Link to={`/update-bills/${bill._id}`} className="btn btn-ghost btn-xs">Update</Link> */}

                                    {/* modal */}
                                    <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box text-gray-800">
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
                                <th>
                                    {/* <button onClick={()=>downloadSingleBill(bill)} className='cursor-pointer btn btn-outline'>Download Bill</button> */}
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyPayBills;