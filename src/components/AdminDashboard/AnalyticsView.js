import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";

import ProponentDetails from "../ProponentDashboard/ProponentDetails";

var data = [];

const tenderData = () => {
  ProponentDetails.map((item) =>
    data.push({
      id: item.id,
      org: item.FullName,
      category: item.Category,
      // gExp: item.GeneralExpereince,
      // sExp: item.SportSpecificExperience,
      cost: +item.TotalCost,
      duration: item.Duration,
    })
  );
  console.log(data);
};

tenderData();

// const pieData = [
//   { name: "Group A", value: 400 },
//   { name: "Group B", value: 300 },
//   { name: "Group C", value: 300 },
//   { name: "Group D", value: 200 },
//   { name: "Group E", value: 278 },
//   { name: "Group F", value: 189 },
// ];

const AnalyticsView = () => {
  console.log(data);

  return (
    <>
      <h1>Welcome to </h1>
      <div>AnalyticsView</div>
      <div style={{ height: "500px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="org" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="id" stroke="#82ca9d" />
            <Line
              type="monotone"
              dataKey="cost"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div style={{ height: "500px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              dataKey="id"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
              label="sgdfg"
            />
            <Pie
              data={data}
              dataKey="duration"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
              label="sgdfg"
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default AnalyticsView;
