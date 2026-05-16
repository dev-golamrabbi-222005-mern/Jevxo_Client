import { useState, useMemo } from "react";
import {
  ComposedChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// ─── Constants ────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: "web",
    title: "Web Development",
    multiplier: 1.5,
    label: "1.5X MULTIPLIER",
    icon: "🌐",
  },
  {
    id: "app",
    title: "App Development",
    multiplier: 2.0,
    label: "2X MULTIPLIER",
    icon: "📱",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    multiplier: 3.0,
    label: "3X MULTIPLIER",
    icon: "📈",
  },
  {
    id: "branding",
    title: "Branding & Design",
    multiplier: 1.8,
    label: "1.8X MULTIPLIER",
    icon: "✏️",
  },
];

const BUDGET_MIN = 10000;
const BUDGET_MAX = 200000;

const fmt = (n) => "$" + Math.round(n).toLocaleString("en-US");

const fmtK = (n) => (n === 0 ? "$0k" : `$${Math.round(n / 1000)}k`);

// ─── Sub-components ───────────────────────────────────────────────────────────

const ServiceCard = ({ service, active, onClick }) => (
  <button
    onClick={onClick}
    className={`
      relative rounded-2xl border p-5 text-left transition-all duration-300 w-full
      ${
        active
          ? "border-[#15C8FF] bg-[#0D2A33] shadow-[0_0_25px_rgba(21,200,255,0.12)]"
          : "border-white/10 bg-[#09111E] hover:border-white/20"
      }
    `}
  >
    <div className="flex items-start justify-between gap-2">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-base leading-none">{service.icon}</span>
          <h3 className="text-white text-base font-medium leading-snug">
            {service.title}
          </h3>
        </div>
        <p className="mt-3 text-[#15C8FF]/60 text-xs font-bold tracking-wider">
          {service.label}
        </p>
      </div>
      <div
        className={`
          mt-0.5 size-4 shrink-0 rounded-full border transition-colors
          ${active ? "bg-[#F7D047] border-[#F7D047]" : "border-white/20"}
        `}
      />
    </div>
  </button>
);

// Custom Y-axis tick
const CustomYTick = ({ x, y, payload }) => (
  <text
    x={x}
    y={y}
    dx={-8}
    dy={4}
    textAnchor="end"
    fill="#4B5569"
    fontSize={12}
    fontWeight={500}
  >
    {fmtK(payload.value)}
  </text>
);

// Custom X-axis tick
const CustomXTick = ({ x, y, payload }) => (
  <text
    x={x}
    y={y}
    dy={18}
    textAnchor="middle"
    fill="#7A8499"
    fontSize={12}
    fontWeight={500}
  >
    {payload.value}
  </text>
);

// Custom glowing dot on highlight points
const GlowingDot = (props) => {
  const { cx, cy, payload } = props;
  if (!payload?.highlight) return null;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={6}
      fill="#F7C93E"
      style={{ filter: "drop-shadow(0 0 8px rgba(247,201,62,0.9))" }}
    />
  );
};

// Custom tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-[#1B67FF]/40 bg-[#060D18]/95 backdrop-blur px-4 py-3 text-sm shadow-xl">
      <p className="text-white/50 mb-1 font-medium">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color }} className="font-semibold">
          {p.name}: {fmt(p.value)}
        </p>
      ))}
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const RoiCalculator = () => {
  const [budget, setBudget] = useState(50000);
  const [activeServices, setActiveServices] = useState(new Set(["web"]));

  const toggleService = (id) => {
    setActiveServices((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        if (next.size > 1) next.delete(id); // keep at least one
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Compute blended multiplier from selected services
  const blendedMultiplier = useMemo(() => {
    const selected = SERVICES.filter((s) => activeServices.has(s.id));
    if (!selected.length) return 1.5;
    const avg =
      selected.reduce((sum, s) => sum + s.multiplier, 0) / selected.length;
    return avg;
  }, [activeServices]);

  const projectedRoi = Math.round(budget * blendedMultiplier);

  // Build 12-month chart data
  const chartData = useMemo(() => {
    const months = ["Now", "M2", "M4", "M6", "M8", "M10", "M12"];
    return months.map((name, i) => {
      const t = i / (months.length - 1);
      const projection = Math.round(budget + (projectedRoi - budget) * t);
      return {
        name,
        investment: budget,
        projection,
        highlight:
          i === 0 || i === months.length - 2 || i === months.length - 1,
      };
    });
  }, [budget, projectedRoi]);

  // Y-axis range
  const yMax = Math.ceil((projectedRoi * 1.35) / 35000) * 35000;
  const yTicks = [0, yMax * 0.25, yMax * 0.5, yMax * 0.75, yMax].map(
    Math.round,
  );

  const sliderPct = ((budget - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100;

  return (
    <section className="relative overflow-hidden py-28 bg-[#020817]">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(to right,rgba(255,255,255,0.04) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Section heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-[#15C8FF] to-[#1B67FF] bg-clip-text text-transparent">
            ROI Calculator
          </h2>
          <p className="mt-3 text-white/50 text-lg">
            Discover your potential return on investment with our services
          </p>
        </div>

        {/* Main card */}
        <div className="rounded-[28px] border border-[#1B67FF] bg-[#060D18]/80 backdrop-blur-xl grid lg:grid-cols-[480px_1fr] overflow-hidden">
          {/* ── LEFT PANEL ── */}
          <div className="p-8 border-r border-[#1B67FF]">
            {/* Budget box */}
            <div className="rounded-3xl bg-[#09111E] border border-white/10 p-6">
              <div className="flex items-center justify-between">
                <p className="text-white/55 font-semibold text-sm tracking-widest">
                  YOUR BUDGET
                </p>
                <div className="px-4 py-2 rounded-xl border border-[#15C8FF]/40 text-[#15C8FF] font-bold text-sm">
                  {fmt(budget)}
                </div>
              </div>

              {/* Custom slider */}
              <div className="mt-8 relative">
                <div className="relative h-[6px] rounded-full bg-[#12354A]">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full bg-[#15C8FF] transition-all"
                    style={{ width: `${sliderPct}%` }}
                  />
                  <div
                    className="absolute top-1/2 size-5 rounded-full bg-[#F7C93E] border-4 border-[#15C8FF] -translate-x-1/2 -translate-y-1/2 transition-all"
                    style={{ left: `${sliderPct}%` }}
                  />
                </div>
                <input
                  type="range"
                  min={BUDGET_MIN}
                  max={BUDGET_MAX}
                  step={1000}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
                  aria-label="Budget slider"
                />
              </div>

              {/* Projected ROI display */}
              <div className="mt-14 border-t border-white/10 pt-10 text-center">
                <p className="text-white/40 tracking-[0.25em] text-sm">
                  PROJECTED ROI
                </p>
                <h3 className="mt-3 text-[#F7C93E] text-6xl font-bold tabular-nums leading-none">
                  {fmt(projectedRoi)}
                </h3>
              </div>
            </div>

            {/* Service selector */}
            <div className="mt-10">
              <div className="flex items-center gap-2">
                <h3 className="text-white/60 font-semibold text-sm tracking-widest">
                  SELECT SERVICES
                </h3>
                <div className="size-2 rounded-full bg-[#15C8FF]" />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {SERVICES.map((s) => (
                  <ServiceCard
                    key={s.id}
                    service={s}
                    active={activeServices.has(s.id)}
                    onClick={() => toggleService(s.id)}
                  />
                ))}
              </div>

              <button className="mt-6 mx-auto block px-5 py-2 rounded-xl border border-white/10 bg-white/5 text-white/70 text-sm hover:bg-white/10 transition-colors">
                + MORE SERVICE
              </button>
            </div>
          </div>

          {/* ── RIGHT PANEL: Chart ── */}
          <div className="relative p-8 flex flex-col">
            {/* Chart header */}
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">
                12-Month Projection
              </h2>

              {/* Floating estimate card */}
              <div className="rounded-2xl border border-[#3C414A]/60 bg-[#0D1525]/80 backdrop-blur px-5 py-4 text-center relative">
                <div className="absolute -top-px left-1/2 -translate-x-1/2 w-12 h-px bg-white/20 rounded-full" />
                <span className="block text-3xl font-extrabold text-[#F7C93E] tabular-nums leading-none">
                  {fmtK(projectedRoi)}
                </span>
                <span className="block text-xs text-[#F7C93E]/80 mt-1">
                  Estimate return after 12 month
                </span>
              </div>
            </div>

            {/* Chart */}
            <div className="flex-1 min-h-[420px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={chartData}
                  margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
                >
                  <defs>
                    <linearGradient
                      id="gradProjection"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#F7C93E"
                        stopOpacity={0.55}
                      />
                      <stop offset="95%" stopColor="#F7C93E" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    strokeDasharray="4 6"
                    horizontal
                    vertical={false}
                    stroke="#111827"
                  />

                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={<CustomXTick />}
                    padding={{ left: 10, right: 10 }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={<CustomYTick />}
                    domain={[0, yMax]}
                    ticks={yTicks}
                    width={54}
                  />

                  <Tooltip content={<CustomTooltip />} />

                  {/* Filled area under projection */}
                  <Area
                    type="linear"
                    dataKey="projection"
                    stroke="none"
                    fill="url(#gradProjection)"
                    strokeWidth={0}
                    dot={false}
                    activeDot={false}
                    name="Projected Returns"
                    legendType="none"
                  />

                  {/* Glowing projection line */}
                  <Line
                    type="linear"
                    dataKey="projection"
                    stroke="#F7C93E"
                    strokeWidth={2.5}
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(247,201,62,0.7))",
                    }}
                    dot={<GlowingDot />}
                    activeDot={{ r: 6, fill: "#F7C93E", strokeWidth: 0 }}
                    name="Projected Returns"
                    legendType="circle"
                  />

                  {/* Dashed investment line */}
                  <Line
                    type="linear"
                    dataKey="investment"
                    stroke="#15C8FF"
                    strokeDasharray="5 6"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 5, fill: "#15C8FF", strokeWidth: 0 }}
                    name="Your Investment"
                    legendType="circle"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Legend + footnote */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-white/35">
                Estimates based on client performance
              </p>
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2 text-xs text-white/50">
                  <span
                    className="inline-block w-5 h-0.5 bg-[#15C8FF] rounded-full"
                    style={{
                      borderTop: "2px dashed #15C8FF",
                      background: "none",
                    }}
                  />
                  Your Investment
                </span>
                <span className="flex items-center gap-2 text-xs text-white/50">
                  <span className="inline-block w-5 h-0.5 bg-[#F7C93E] rounded-full" />
                  Projected Returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoiCalculator;
