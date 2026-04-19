import React, { use } from "react";
import { FaPlus } from "react-icons/fa";
import ShowCard from "../ui/ShowCard";

const allCardPromise = fetch("/data.json").then((res) => res.json());

const AllCard = () => {
  const cards = use(allCardPromise);
  //console.log(cards, 'cards');
  const totalFriends = cards.length;

  const onTrack = cards.filter((card) => 
    ["On-Track"].includes(card.status),).length;
  const needAttention = cards.filter((card) => 
    ["Almost Due", "On-Track"].includes(card.status),).length;
  const interactionsThisMonth = cards.filter((card) =>
    ["On-Track", "Almost Due", "Overdue"].includes(card.status),).length;

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-4 text-center">
          Friends to keep close in your life
        </h1>
        <p className="text-sm sm:text-base md:text-[16px] font-normal text-center pb-6 px-4 md:px-0 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>

        <button className="btn bg-[#244D3F] text-[16px] text-white font-bold py-4 px-4 rounded-lg">
          <FaPlus />
          Add a friend
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-10 container mx-auto text-center">
        <div className="border-2 border-gray-200 py-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold">{totalFriends}</h2>
          <p className="text-gray-400">Total Friends</p>
        </div>

        <div className="border-2 border-gray-200 py-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold">{onTrack}</h2>
          <p className="text-gray-400">On-Track</p>
        </div>

        <div className="border-2 border-gray-200 py-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold">{needAttention}</h2>
          <p className="text-gray-400">Need Attention</p>
        </div>

        <div className="border-2 border-gray-200 py-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-bold">{interactionsThisMonth}</h2>
          <p className="text-gray-400">Interactions This Month</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mt-10 text-center md:text-left">
          Your Friends
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10 container mx-auto text-center">
        {cards.map((card) => {
          return <ShowCard key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
};

export default AllCard;
