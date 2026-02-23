import Image from "next/image";
import { Calendar } from "lucide-react";

const screenings = [
  { date: "November 2026", label: "World Premiere", image: "/assets/images/moc-world-screening.png" },
  { date: "February 2026", label: "Africa Premiere Lagos", image: "/assets/images/moc-lagos-screening.png" },
  { date: "February 2026", label: "Cape Town, South Africa", image: "/assets/images/moc-sa-screening.png" },
  { date: "February 2026", label: "Johannesburg, South Africa", image: "/assets/images/moc-ja-screening.png" },
  { date: "September 2026", label: "Kolne, Germany", image: "/assets/images/moc-ko-screening.png" },
];

export default function ScreeningGrid() {
  return (
    <div className="mt-12 px-6 max-w-6xl mx-auto">
      <h3 className="text-white text-lg font-semibold mb-6 text-left">
        Screening Dates
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {screenings.map((s, i) => (
          <div
            key={i}
            className="screening-card bg-white/5 overflow-hidden flex"
          >
            {/* Left Side: Date */}
            <div className="w-1/3 bg-white font-productsFont tracking-tight3 flex flex-col text-center items-center justify-center p-4">
              <Calendar className="w-5 h-5 text-black mb-2" />
              <p className="text-[11px] text-black">{s.date}</p>
            </div>

            {/* Right Side: Image + Label */}
            <div className="w-2/3 relative">
              {s.image && (
                <Image
                  src={s.image}
                  alt={s.label}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-2">
                <p className="text-white text-sm font-productsFont text-center leading-snug">
                  {s.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Press Mentions */}
      <div className="mt-8 mb-10">
        <div className="text-white text-base items-center flex gap-2">
          Press mentions
          <Image
            src="/assets/images/forward-arrow.png"
            alt="Mothers of Chibok"
            width={15}
            height={15}
            className="animate-pulse-custom"
          />
        </div>
      </div>
    </div>
  );
}
