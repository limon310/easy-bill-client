import React from 'react';
import { Link } from 'react-router';

const datas = [
  {
    "title": "Electricity Bill",
    "category": "Electricity",
    "email": "admin@easybill.com",
    "location": "Mirpur-10, Dhaka",
    "description": "Monthly electricity usage for October 2025.",
    "image": "https://i.postimg.cc/8c12MxL0/electricity.jpg",
    "date": "2025-11-09",
    "amount": 1250
  },
  {
    "title": "Gas Bill",
    "category": "Gas",
    "email": "support@easybill.com",
    "location": "Uttara Sector 7, Dhaka",
    "description": "Residential gas bill for October 2025.",
    "image": "https://i.postimg.cc/sDzX02JV/gas.jpg",
    "date": "2025-11-06",
    "amount": 950
  },
  {
    "title": "Water Bill",
    "category": "Water",
    "email": "admin@easybill.com",
    "location": "Dhanmondi 32, Dhaka",
    "description": "WASA monthly water service charge for October 2025.",
    "image": "https://i.postimg.cc/Y9xVr8TR/water.jpg",
    "date": "2025-11-02",
    "amount": 600
  },
  {
    "title": "Internet Bill",
    "category": "Internet",
    "email": "billing@easybill.com",
    "location": "Banani, Dhaka",
    "description": "Monthly broadband subscription fee for October 2025.",
    "image": "https://i.postimg.cc/DZ5jk0bS/internet.png",
    "date": "2025-11-09",
    "amount": 1200
  },
  {
    "title": "Mobile Bill",
    "category": "Mobile",
    "email": "admin@easybill.com",
    "location": "Bashundhara R/A, Dhaka",
    "description": "Monthly mobile phone postpaid bill for October 2025.",
    "image": "https://i.postimg.cc/Y92R37yr/mobile.avif",
    "date": "2025-11-04",
    "amount": 850
  },
  {
    "title": "Television Bill",
    "category": "Television",
    "email": "support@easybill.com",
    "location": "Mohammadpur, Dhaka",
    "description": "Cable TV monthly subscription fee for October 2025.",
    "image": "https://i.postimg.cc/tgpNqybr/telivation.jpg",
    "date": "2025-10-31",
    "amount": 450
  },
  {
    "title": "Security Bill",
    "category": "Security",
    "email": "billing@easybill.com",
    "location": "Gulshan-2, Dhaka",
    "description": "Building and residential area security charges.",
    "image": "https://i.postimg.cc/CL8GbdLv/security.jpg",
    "date": "2025-11-09",
    "amount": 1000
  },
  {
    "title": "Metro Bill",
    "category": "Metro",
    "email": "admin@easybill.com",
    "location": "Mirpur-11, Dhaka",
    "description": "Metro rail smart card recharge for November 2025.",
    "image": "https://i.postimg.cc/pLkjRjLY/metro.jpg",
    "date": "2025-11-05",
    "amount": 300
  },
  {
    "title": "Landline Bill",
    "category": "Landline",
    "email": "admin@easybill.com",
    "location": "Uttara Sector 3, Dhaka",
    "description": "Landline telephone service charge for October 2025.",
    "image": "https://i.postimg.cc/2SftPVHc/land-line.jpg",
    "date": "2025-11-03",
    "amount": 480
  },
  {
    "title": "Broadband Bill",
    "category": "Broadband",
    "email": "support@easybill.com",
    "location": "Middle Badda, Dhaka",
    "description": "High-speed broadband internet monthly charge.",
    "image": "https://i.postimg.cc/nzZ2x57d/broad-band.jpg",
    "date": "2025-11-08",
    "amount": 1350
  },
  {
    "title": "Cable TV Bill",
    "category": "Cable TV",
    "email": "admin@easybill.com",
    "location": "Uttara Sector 11, Dhaka",
    "description": "Local cable TV connection charge for October 2025.",
    "image": "https://i.postimg.cc/HsT5RmwX/cable-Tvpng.png",
    "date": "2025-10-29",
    "amount": 550
  },
  {
    "title": "Datacard Bill",
    "category": "Datacard",
    "email": "billing@easybill.com",
    "location": "Mirpur-12, Dhaka",
    "description": "Monthly data card internet recharge for November 2025.",
    "image": "https://i.postimg.cc/fW130d2H/devit-Card.png",
    "date": "2025-11-09",
    "amount": 700
  },
  {
    "title": "Fuel Bill",
    "category": "Fuel",
    "email": "admin@easybill.com",
    "location": "Dhanmondi 15, Dhaka",
    "description": "Fuel and generator maintenance charge for October 2025.",
    "image": "https://i.postimg.cc/cLLNx9RV/fuel.png",
    "date": "2025-11-07",
    "amount": 1600
  },
  {
    "title": "Subscription Bill",
    "category": "Subscription",
    "email": "support@easybill.com",
    "location": "Banani Block E, Dhaka",
    "description": "Premium subscription fee for online services.",
    "image": "https://i.postimg.cc/qMQ95cfp/subscription.png",
    "date": "2025-10-27",
    "amount": 499
  },
  {
    "title": "Insurance Bill",
    "category": "Insurance",
    "email": "admin@easybill.com",
    "location": "Bashundhara R/A, Dhaka",
    "description": "Monthly premium payment for home insurance.",
    "image": "https://i.postimg.cc/3NFP7mdH/insurance.png",
    "date": "2025-11-01",
    "amount": 900
  }
]


const AllBilsCard = ({ bill }) => {
    // console.log(bill)
    const { image, title, category, location, amount, _id } = bill;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl w-full h-[200px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <h3 className='text-lg font-medium'>{category}</h3>
                    <p className=''>Location: {location}</p>
                    <p className='text-lg font-bold text-gray-700'>Amount: {amount}</p>
                    <div className="card-actions">
                        <Link to={`/bills-details/${_id}`} className="btn btn-primary text-lg">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBilsCard;