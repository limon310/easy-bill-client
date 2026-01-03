
import { CalendarDays, MapPin, Mail } from "lucide-react";
import { FaBolt } from "react-icons/fa";

const AllBillsCard = ({ bill }) => {
  const {
    title,
    category,
    email,
    location,
    description,
    image,
    date,
    amount,
  } = bill;

  return (
    <div className="card bg-base-100 border border-base-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* Image */}
      <figure className="h-40 overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Body */}
      <div className="card-body p-5 space-y-4">

        {/* Title + Category */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-yellow-100 text-yellow-600">
            <FaBolt size={18} />
          </div>
          <div>
            <h2 className="card-title text-base font-semibold">
              {title}
            </h2>
            <p className="text-sm text-gray-500">{category}</p>
          </div>
        </div>

        {/* Amount */}
        <div className="flex items-baseline justify-between">
          <p className="text-2xl font-bold text-gray-900">
            ৳ {amount.toLocaleString()}
          </p>
          <span className="badge badge-warning badge-outline">
            Pending
          </span>
        </div>

        {/* Meta Info */}
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>Due: {new Date(date).toDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>{email}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-2">
          {description}
        </p>

        {/* Action */}
        <div className="card-actions justify-end pt-3">
          <button className="btn btn-sm btn-success w-full">
            Pay Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default AllBillsCard;



