"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type MovieShowcaseProps = {
  trailerId: string;
  posters: string[];
};

export default function MovieShowcase({
  trailerId,
  posters,
}: MovieShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-item", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-7xl mx-auto px-4 py-10"
    >
      {/* 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT: Video */}
        <div className="animate-item rounded-2xl overflow-hidden bg-black relative group">
          <iframe
            className="w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${trailerId}`}
            title="Movie Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* RIGHT: Poster Swiper */}
        <div className="animate-item">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="h-full"
          >
            {posters.map((poster, index) => (
              <SwiperSlide key={index}>
                <PosterCard src={poster} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

function PosterCard({ src, index }: { src: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.set(ref.current, { transformOrigin: "center" });
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-xl overflow-hidden relative cursor-pointer group"
    >
      <img
        src={src}
        alt={`Movie poster ${index + 1}`}
        className="w-full h-[400px] object-contain transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}
