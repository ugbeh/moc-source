"use client";

import CountUp from "react-countup";
import { cn } from "@/lib/utils";


const impacts = [
  {
    title: "Baseline Survey",
    description:
      "Soil quality assessed, women trained in Good Agronomic Practices (GAPs), and provided with seeds, fertilizers, and herbicides.",
    status: "completed",
  },
  {
    title: "Planting & Early Growth",
    description:
      "Fields prepared and planted at 20 x 25 cm spacing; technical team monitors growth and GAPs compliance.",
    status: "completed",
  },
  {
    title: "Mid-Season Assessment",
    description:
      "Field checks conducted; adjustments made; updated yield projections based on plant health.",
    status: "completed",
  },
  {
    title: "Pre-Harvest Training",
    description:
      "Experts train women on drying, shelling, grading, and safe storage to maintain peanut quality.",
    status: "completed",
  },
  {
    title: "Harvest & Storage",
    description:
      "Peanuts are currently being harvested, dried, and stored with improved methods to minimize losses and preserve quality.",
    status: "ongoing",
  },
  {
    title: "Final Off-Take",
    description:
      "Bulk sale to pre-arranged buyer ensures fair prices; profits go directly to women for financial independence.",
    status: "not-completed",
  },
];

const statusColors = {
  completed: {
    bg: "bg-green-600",
    text: "text-white",
  },
  ongoing: {
    bg: "bg-[#B89C58]",
    text: "text-white",
  },
  "not-completed": {
    bg: "bg-gray-600",
    text: "text-gray-400",
  },
} as const;

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center mb-5 space-y-3">
    <div className="h-[1px] w-28 bg-white" />
    <h2 className="text-center text-5xl">{title}</h2>
  </div>
);

const goals = [
  {
    value: 9,
    suffix: "",
    label: "Number of women supported",
  },
  {
    value: 200,
    suffix: "+",
    label: "Bags of Peanuts",
  },
  {
    value: 8.5,
    suffix: "",
    decimals: 1, // one decimal place
    label: "Hectares of farmed field",
  },
];

const GoalsTimeline = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-white font-productsFont w-full pb-20"
      style={{
        backgroundImage: "url('/assets/images/moc-background-dark.jpg')",
      }}
    >
      {/* Goals Section */}
      <div className="px-6 md:px-20 lg:px-40 mx-auto py-20">
        <SectionHeader title="Goals" />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 text-center">
          {goals.map(({ value, suffix, decimals, label }, index) => (
          <div key={index}>
            <span className="text-[150px] font-afolkalips">
              <CountUp
                end={value}
                duration={3}
                decimals={decimals || 0}
                suffix={suffix}
                enableScrollSpy
                scrollSpyOnce
              />
            </span>
            <p className="-mt-14 text-lg">{label}</p>
          </div>
        ))}
        </div>
      </div>

   <div className="px-5 md:px-20 lg:px-40 m-auto">
  {/* Header */}
  <div className="flex flex-col items-center mb-12">
    <div className="h-[1px] w-28 bg-white mb-3" />
    <h2 className="text-4xl md:text-5xl text-center">Timeline</h2>
  </div>

  {/* Timeline */}
  <div className="relative flex flex-col lg:flex-row justify-between">
    {/* Connector line */}
    <div className="absolute top-14 inset-0 flex lg:block justify-center">
      <div className="bg-gray-600 w-[2px] lg:w-full lg:h-[2px] h-full" />
    </div>

    {impacts.map(({ title, description, status }, index) => (
      <div
        key={index}
        className="relative flex flex-col items-start lg:items-center text-center lg:text-center flex-1 px-4 py-10"
      >
        {/* Circle */}
        <div className="relative z-10 flex items-center justify-center self-center lg:self-auto">
          {status === "ongoing" && (
            <span className="absolute inline-flex h-10 w-10 rounded-none bg-[#B89C58] opacity-75 animate-ping"></span>
          )}
          <div
            className={cn(
              "h-8 w-8 lg:h-10 lg:w-10 rounded-none flex items-center justify-center",
              statusColors[status as keyof typeof statusColors].bg
            )}
          />
        </div>

        {/* Content */}
        <div className="mt-6 space-y-2 max-w-xs pl-10 pr-5 lg:pl-0 lg:pr-0">
          <h3
            className={cn(
              "text-lg font-semibold",
              statusColors[status as keyof typeof statusColors].text
            )}
          >
            {title}
          </h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    ))}
  </div>
</div>


    </section>
  );
};

export default GoalsTimeline;
