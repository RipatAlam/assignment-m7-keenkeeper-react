import React, { useContext, useState } from "react";
import { CardContext } from "../../context/CardContext";
import CallList from "../../components/CallTextVideo/CallList";
import TextList from "../../components/CallTextVideo/TextList";
import VideoList from "../../components/CallTextVideo/VideoList";

const TimeLinePage = () => {
  const { calls, text, video } = useContext(CardContext);
  console.log(calls, text, video, "cardContext");
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="text-5xl font-bold underline my-10">Timeline</h1>
      </div>
      <div className="mb-6">
        <select
          onChange={handleFilterChange}
          className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All</option>
          <option value="call">Phone calls</option>
          <option value="text">Texts only</option>
          <option value="video">Video calls</option>
        </select>

        <div className="mt-6 space-y-6">
          {(filter === "" || filter === "call") && <CallList />}
          {(filter === "" || filter === "text") && <TextList />}
          {(filter === "" || filter === "video") && <VideoList />}
        </div>
      </div>
    </div>
  );
};

export default TimeLinePage;
