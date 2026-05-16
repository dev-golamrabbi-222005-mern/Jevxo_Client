import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ComposedChart,
  Line,
  Legend,
  Dot,
} from "recharts";
import { Dot as LucideDot } from "lucide-react"; // For precise legend dots

// Maintenance & Scalability: Data is defined here. Easily updatable.
// The data values are scaled for plotting (e.g., 70000 for $70k)
const data = [
  { name: "Now", investment: 52500, projection: 52500, highlight: true },
  { name: "M2", investment: 52500, projection: 61250 },
  { name: "M4", investment: 52500, projection: 70000 },
  { name: "M6", investment: 52500, projection: 78750 },
  { name: "M8", investment: 52500, projection: 87500 },
  { name: "M10", investment: 52500, projection: 96250, highlight: true },
  { name: "M12", investment: 52500, projection: 105000, highlight: true },
];

// Helper to format currency labels
const formatCurrency = (value) => `$${value / 1000}k`;

// Custom components for chart elements to enable styling not possible with base library props

// Custom glowing dot component for "Projected Returns"
const GlowingDot = (props) => {
  const { cx, cy, fill, payload, value } = props;

  // Show glowing dot only on specified points for the effect.
  // We specify it on payload data for robustness.
  if (props.payload.highlight) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={6}
        fill={fill}
        className="filter-drop-shadow-glow" // Custom class for the filter defined in CSS below
        style={{
          filter: "drop-shadow(0 0 10px rgba(255, 206, 86, 1))",
          WebkitFilter: "drop-shadow(0 0 10px rgba(255, 206, 86, 1))",
        }}
      />
    );
  }
  return null; // Don't show dot on non-highlight points
};

const CustomLegend = (props) => {
  const { payload } = props;
  return (
    <div className="flex gap-x-12 pl-12 text-sm text-[#A0A3A8]">
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center gap-x-2">
          <LucideDot size={16} fill={entry.color} color={entry.color} />
          <span>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

const CustomYTick = ({ x, y, payload }) => {
  return (
    <text
      x={x}
      y={y}
      dx={-10}
      dy={4}
      textAnchor="end"
      fill="#5F6675"
      fontSize={14}
      fontWeight={500}
    >
      {formatCurrency(payload.value)}
    </text>
  );
};

const CustomXTick = ({ x, y, payload }) => {
  return (
    <text
      x={x}
      y={y}
      dy={22}
      textAnchor="middle"
      fill="#A0A3A8"
      fontSize={14}
      fontWeight={500}
    >
      {payload.value}
    </text>
  );
};

// Reusable Tailwind Component to mimic the overall container and design style
const DesignShowcaseCard = ({ children }) => (
  <div
    className="
    max-w-7xl
    mx-auto
    px-4
    md:px-6
    pt-12
    pb-12
    relative
    rounded-3xl
    border
    border-[#3C414A]/40
    bg-[#070D1D]
    after:absolute
    after:inset-0
    after:z-[-1]
    after:scale-[1.03]
    after:rounded-3xl
    after:bg-[#070D1D]/70
    after:filter
    after:blur-3xl
    after:content-['']
  "
  >
    {children}
  </div>
);

const RoiChart = () => {
  return (
    <DesignShowcaseCard>
      {/* Title */}
      <div className="absolute top-12 left-12 flex flex-col gap-y-2">
        <h2 className="text-2xl font-semibold text-white">
          12-Month Projection
        </h2>
        {/* Subtle top highlights on the card, title, and floating box */}
        <div className="absolute top-[-52px] left-[-20px] w-[calc(100%+40px)] h-1 bg-white rounded-full opacity-10"></div>
      </div>

      {/* Floating Card at Top Right with Glassmorphism */}
      <div className="absolute top-10 right-10 z-10">
        <div
          className="
          relative
          flex flex-col
          items-center
          gap-y-0.5
          rounded-2xl
          border
          border-[#3C414A]/40
          bg-[#181F30]/30
          p-6
          backdrop-blur-lg
          filter
          shadow-lg
          before:absolute
          before:inset-0
          before:z-[-1]
          before:rounded-2xl
          before:bg-[#181F30]/50
          before:content-['']
          after:absolute
          after:top-[-2px]
          after:left-1/2
          after:-translate-x-1/2
          after:w-16
          after:h-1
          after:bg-white
          after:rounded-full
          after:opacity-10
          after:content-['']
        "
        >
          <span className="text-4xl font-extrabold text-[#FFCE56]">$75k</span>
          <span className="text-base text-[#FFCE56] opacity-90">
            Estimate return after 12 month
          </span>
        </div>
      </div>

      {/* Main Chart Area with Extra Padding for Chart Area itself */}
      <div className="pt-28 px-4 pb-20 relative">
        <ResponsiveContainer width="100%" height={540}>
          <ComposedChart
            data={data}
            margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
          >
            {/* Definitions for complex SVG effects like gradients and filters */}
            <defs>
              <linearGradient id="colorProjection" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFCE56" stopOpacity={0.65} />
                <stop offset="95%" stopColor="#FFCE56" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* Dotted Grid Lines */}
            <CartesianGrid
              strokeDasharray="4 6"
              horizontal={true}
              vertical={false}
              stroke="#1A2131"
            />

            {/* X Axis */}
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={<CustomXTick />}
              padding={{ left: 10, right: 10 }}
            />

            {/* Y Axis */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={<CustomYTick />}
              domain={[0, 140000]}
              ticks={[0, 35000, 70000, 105000, 140000]}
            />

            {/* Area Chart - Filled for Projection */}
            <Area
              type="linear"
              dataKey="projection"
              stroke="none"
              fill="url(#colorProjection)"
              strokeWidth={0}
              name="Projected Returns"
            />

            {/* Line Chart 1 - Solid Glowing Line for Projection */}
            <Line
              type="linear"
              dataKey="projection"
              stroke="#FFCE56"
              strokeWidth={3}
              className="line-glow" // Handled in filter-glow class below
              style={{
                filter: "drop-shadow(0 0 10px rgba(255, 206, 86, 0.7))",
                WebkitFilter: "drop-shadow(0 0 10px rgba(255, 206, 86, 0.7))",
              }}
              dot={<GlowingDot fill="#FFCE56" />}
              name="Projected Returns"
              // Ensure it gets the color for the legend entry
              legendType="circle"
              color="#FFCE56"
            />

            {/* Line Chart 2 - Cyan Dashed Line for Investment */}
            <Line
              type="linear"
              dataKey="investment"
              stroke="#43FDFD"
              strokeDasharray="4 6"
              strokeWidth={3}
              dot={false}
              name="Your Investment"
              // Ensure it gets the color for the legend entry
              legendType="circle"
              color="#43FDFD"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Subtitle / Note */}
      <p className="absolute bottom-10 left-12 text-sm text-[#A0A3A8] opacity-80">
        Estimates based on client performance
      </p>

      {/* Custom Legend at Bottom */}
      <div className="absolute bottom-16 left-0 w-full flex justify-center z-10">
        <CustomLegend
          payload={[
            { value: "Your Investment", color: "#43FDFD" },
            { value: "Projected Returns", color: "#FFCE56" },
          ]}
        />
      </div>
    </DesignShowcaseCard>
  );
};

export default RoiChart;
