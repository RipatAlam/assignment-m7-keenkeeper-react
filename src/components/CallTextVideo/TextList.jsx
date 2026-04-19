import React, { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import ShowCard from "../ui/ShowCard";

const TextList = () => {

  const { text } = useContext(CardContext);
  console.log(text, "cardContext");

    if (text.length === 0) {
    return (
      <div className="h-[20vh] flex items-center justify-center">
        <h2 className="text-3xl font-semibold">No Texts to show</h2>
      </div>
    );
  }

  return (
    <div className="space-y-4 border border-gray-100 p-4 rounded-3xl">
      {text.map((card) => (
        <div
          key={card.id}
          className="flex items-center gap-4 border border-gray-200 p-3 rounded-xl bg-white"
        >
{/* Icon */}
          <div>
            <h1 className="text-4xl">💬</h1>
          </div>

{/* Content */}
          <div className="flex flex-col gap-2">
            <h1>
              <span className="font-semibold text-2xl">Text</span> with {card.name}
            </h1>

            <h2 className="text-gray-600">
              {card.next_due_date}
            </h2>

{/* time safe */}
            <h3 className="text-sm text-gray-400">
              {card.time
                ? new Date(card.time).toLocaleString()
                : ""}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextList;
