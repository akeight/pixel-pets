import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#F4D738", "#FF6B6B", "#90EE90"]; // matches your NeoBrutalist vibe

const CharacterStatsChart = ({ characters }) => {
  // Calculate totals
  const totals = characters.reduce(
    (acc, c) => {
      acc.protection += c.protection || 0;
      acc.agility += c.agility || 0;
      acc.speed += c.speed || 0;
      return acc;
    },
    { protection: 0, agility: 0, speed: 0 }
  );

  // Format for Recharts
  const data = [
    { name: "Protection", value: totals.protection },
    { name: "Agility", value: totals.agility },
    { name: "Speed", value: totals.speed },
  ];

  return (
    <div className="stats-chart">
      <h2>Pixel Pet Hub</h2>
      <h3>You have {characters.length} pixel pets!</h3>
        
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}  // donut style
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={4}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default CharacterStatsChart;
