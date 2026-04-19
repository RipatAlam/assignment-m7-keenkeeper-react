import React from "react";
import { Link } from "react-router";

const statusColor = {
  "Overdue": "bg-red-600",
  "Almost Due": "bg-yellow-600",
  "On-Track": "bg-green-600",
};

const ShowCard = ({ card }) => {
  return (
    <Link to={`/carddetails/${card.id}`} className="w-full">
      <div className="w-full h-full bg-white border border-gray-200 shadow-md rounded-2xl p-10 text-center hover:shadow-xl transition duration-300">
        <div className="flex justify-center mb-4">
          <img
            src={card.picture}
            alt={card.name}
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
        </div>

        <h1 className="inline-block text-[24px] font-semibold text-black">
          {card.name}
        </h1>

        <div>
          <span className="text-gray-500 text-sm mt-1">
            {card.days_since_contact} days ago
          </span>
        </div>

        <div className="mt-2">
          {Array.isArray(card.hobby) ? (
            card.hobby.map((h, i) => (
              <span
                key={i}
                className="inline-block bg-green-700 text-white px-3 py-2 text-xs rounded-full mr-2"
              >
                {h}
              </span>
            ))
          ) : (
            <span className="inline-block bg-green-700 text-white px-3 py-2 text-xs rounded-full">
              {card.hobby}
            </span>
          )}
        </div>

        <p
          className={`mt-3 w-fit mx-auto text-[14px] font-medium px-3 py-1 rounded-full text-white ${statusColor[card.status]}`}
        >
          {card.status}
        </p>
      </div>
    </Link>
  );
};

export default ShowCard;
