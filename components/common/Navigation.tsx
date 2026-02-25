"use client";

import gsap from "gsap";
import { Volume2, VolumeX, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface NavigationProps {
  muted: boolean;
  setMuted: (value: boolean) => void;
}

const MENU_ITEMS = [
  {
    label: "The Film",
    image: "/assets/images/moc-the-film-bckground.png",
    href: "#the-film-section",
  },
  {
    label: "Cinema Listings",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80",
    href: "#the-film-section",
  },
  {
    label: "The Mothers",
    image: "/assets/images/moc-the-mothers-bckground.png",
    href: "#the-mothers",
  },
  {
    label: "The Impact",
    image: "/assets/images/moc-the-impact-bckground.png",
    href: "#the-impact",
  },
  {
    label: "Press",
    image: "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=1920&q=80",
    href: "#press-mentions",
  },
  {
    label: "Plant a Seed",
    image: "/assets/images/moc-donate-bckground.png",
    href: "#plant-seed",
  },
  {
    label: "Contact",
    image: "/assets/images/moc-contact-bckground.png",
    href: "#contact",
  },
];

export default function Navigation({ muted, setMuted }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLElement | null)[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (menuOpen) {
      // Reset overlay off-screen (top) before animating
      gsap.set(overlayRef.current, { y: "-100%", autoAlpha: 1 });

      // Slide overlay in from top
      gsap.to(overlayRef.current, {
        y: "0%",
        duration: 0.6,
        ease: "power2.out",
      });

      // Animate menu items with stagger
      gsap.fromTo(
        itemsRef.current,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    } else {
      // Slide overlay out to top
      gsap.to(overlayRef.current, {
        y: "-100%",
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.set(overlayRef.current, { autoAlpha: 0 });
        },
      });
    }
  }, [menuOpen]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
    }
  }, [muted]);

  useEffect(() => {
    const handleInteraction = () => {
      if (audioRef.current && audioRef.current?.paused) {
        audioRef.current.play().catch(() => {
          console.warn("Autoplay blocked until user interacts with page.");
        });
      }
      document.removeEventListener("click", handleInteraction);
    };
    document.addEventListener("click", handleInteraction);
    return () => document.removeEventListener("click", handleInteraction);
  }, []);

  return (
    <>
      {/* Background Audio */}
      <audio
        ref={audioRef}
        src="/assets/audio/mothersofchibok.mp3"
        loop
        autoPlay
        playsInline
        muted={muted}
      />
      {/* Horizontal Navigation (Top) */}
      <div className="fixed inset-x-0 top-0 flex flex-row items-center justify-between py-4 px-6 text-white text-xs tracking-wide z-40 max-w-full">
        {/* Left Text */}
        <a href="https://jbmultimedia.com" target="_blank" rel="noopener noreferrer">
          <span className="font-productsFont tracking-tight3 text-[16px]">
            Hope, resilience, and healing
          </span>
        </a>

        {/* Menu Icon + Text */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-row items-center gap-2 p-2 hover:text-yellow-500 transition cursor-pointer"
        >
          <span className="font-productsFont text-[14px] tracking-wide">
            Menu
          </span>
          {menuOpen ? (
            <X size={20} />
          ) : (
            <Image
              src="/assets/images/menu-icon.png"
              alt="Mother of Chibok Menu Icon"
              width={20}
              height={20}
            />
          )}
        </button>

        {/* Right Text + Sound Toggle */}
        <div className="flex flex-row items-center gap-4">
          <span className="font-productsFont tracking-tight3 text-[16px]">
            Donate
          </span>
          <button
            onClick={() => setMuted(!muted)}
            className="hover:text-yellow-500 transition"
          >
            {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>

      {/* Fullscreen Navigation Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 flex flex-col z-30 items-center min-h-screen opacity-0"
      >
        {/* Menu Items */}
        <nav className="flex flex-col w-full h-full pt-[60px]">
          {/* First row: The Film and Cinemas (two-column layout) */}
          <div className="flex flex-1 w-full">
            {MENU_ITEMS.slice(0, 2).map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                ref={(el) => {
                  itemsRef.current[i] = el;
                }}
                className="w-1/2 relative flex items-center justify-center group opacity-0"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                <span className="relative z-10 font-guthenBloots text-white text-4xl sm:text-5xl md:text-[100px] text-center tracking-tight4 leading-none px-6">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* Second row: The Mothers (full-width) */}
          <a
            key={MENU_ITEMS[2].label}
            href={MENU_ITEMS[2].href}
            onClick={() => setMenuOpen(false)}
            ref={(el) => {
              itemsRef.current[2] = el;
            }}
            className="flex-1 relative flex items-center opacity-0 group"
            style={{
              backgroundImage: `url(${MENU_ITEMS[2].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
            <span className="relative z-10 font-guthenBloots px-10 py-5 text-center tracking-tight4 text-white leading-0 text-3xl sm:text-4xl md:text-[100px]">
              {MENU_ITEMS[2].label}
            </span>
          </a>

          {/* Third row: Impact and Press on same line (two-column layout) */}
          <div className="flex flex-1 w-full">
            {MENU_ITEMS.slice(3, 5).map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                ref={(el) => {
                  itemsRef.current[i + 3] = el;
                }}
                className="w-1/2 relative flex items-center justify-center group opacity-0"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                <span className="relative z-10 font-guthenBloots text-white text-4xl sm:text-5xl md:text-[100px] text-center tracking-tight4 leading-none px-6">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* Last row: Plant a Seed and Contact on same line (two-column layout) */}
          <div className="flex flex-1 w-full">
            {MENU_ITEMS.slice(5).map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                ref={(el) => {
                  itemsRef.current[i + 5] = el;
                }}
                className="w-1/2 relative flex items-center justify-center group opacity-0"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                <span className="relative z-10 font-guthenBloots text-white text-4xl sm:text-5xl md:text-[100px] text-center tracking-tight4 leading-none px-6">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
