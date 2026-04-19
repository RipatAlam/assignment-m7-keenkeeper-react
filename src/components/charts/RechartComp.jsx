import { useContext } from "react";
import CallList from "../CallTextVideo/CallList";
import TextList from "../CallTextVideo/TextList";
import VideoList from "../CallTextVideo/VideoList";
import { CardContext } from "../../context/CardContext";
import {
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RechartComp = () => {
  const { calls, text, video } = useContext(CardContext);

  const total = calls.length + text.length + video.length;
  const COLORS = ["#3b82f6", "#22c55e", "#a855f7"];

  const chartData = [
    {
      name: "Calls",
      value: calls.length,
      percent: total ? ((calls.length / total) * 100).toFixed(1) : 0,
    },
    {
      name: "Text",
      value: text.length,
      percent: total ? ((text.length / total) * 100).toFixed(1) : 0,
    },
    {
      name: "Video",
      value: video.length,
      percent: total ? ((video.length / total) * 100).toFixed(1) : 0,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Friendship Analytics: 📊</h1>

{/* PIE CHART */}
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(0)}%`
              }
            >
              {chartData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
{/*Chart Details */}
      <div className="mt-10 space-y-4">
        {chartData.map((item, index) => {
          const percent = total ? ((item.value / total) * 100).toFixed(1) : 0;

          return (
            <div
              key={index}
              className="flex items-center justify-between border border-gray-200 p-4 rounded-xl bg-white shadow-sm"
            >
              <h2 className="text-2xl font-semibold">{item.name}</h2>

              <div className="text-right">
                <p className="text-xl font-bold">{item.value}</p>
                <p className="text-sm text-gray-500">{percent}%</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RechartComp;
