import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const resultData = [
  {
    id: 1,
    name: "Amit Sharma",
    physics: 85,
    chemistry: 78,
    math: 92,
  },
  {
    id: 2,
    name: "Sara Khan",
    physics: 74,
    chemistry: 81,
    math: 88,
  },
  {
    id: 3,
    name: "Rohit Das",
    physics: 91,
    chemistry: 89,
    math: 95,
  },
  {
    id: 4,
    name: "Maya Singh",
    physics: 68,
    chemistry: 72,
    math: 80,
  },
  {
    id: 5,
    name: "Arjun Roy",
    physics: 79,
    chemistry: 85,
    math: 76,
  },
];

const getIntroOfPage = (label) => {
  if (label === "Arjun Roy") {
    return "Subject:Math";
  }
  if (label === "Rohit Das") {
    return "Subject:Physics";
  }
  if (label === "Amit Sharma") {
    return "Subject:Chemistry";
  }

  return "";
};

const CustomTooltip = ({ active, payload, label }) => {
  const isVisible = active && payload && payload.length;
  return (
    <div
      className="custom-tooltip"
      style={{ visibility: isVisible ? "visible" : "hidden" }}
    >
      {isVisible && (
        <>
          <p className="label">{`${label} : ${payload[0].value}`}</p>
          <p className="intro">{getIntroOfPage(label)}</p>
          <p className="desc">Anything you want can be displayed here.</p>
        </>
      )}
    </div>
  );
};

const ResultChart = () => {
  return (
    <div>
      <LineChart width={500} height={500} data={resultData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip content={CustomTooltip}></Tooltip>
        <Line dataKey={"math"} stroke="red"></Line>
        <Line dataKey={"physics"}></Line>
        {/* <Tooltip content={CustomTooltip}></Tooltip> */}
      </LineChart>
    </div>
  );
};

export default ResultChart;
