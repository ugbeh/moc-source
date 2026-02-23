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
      // Reset overlay off-screen before animating
      gsap.set(overlayRef.current, { x: "-100%", autoAlpha: 1 });

      // Slide overlay in
      gsap.to(overlayRef.current, {
        x: "0%",
        duration: 0.6,
        ease: "power2.out",
      });

      // Animate menu items with stagger
      gsap.fromTo(
        itemsRef.current,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    } else {
      // Slide overlay out
      gsap.to(overlayRef.current, {
        x: "-100%",
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
      {/* Vertical Navigation (Left side) */}
      <div className="fixed inset-y-0 left-0 flex flex-col items-center justify-between py-6 px-4 text-white text-xs tracking-wide border-r-2 border-white z-40 max-w-full">
        {/* Top Text */}
        <a href="https://jbmultimedia.com" target="_blank">
          <span className="rotate-180 font-productsFont tracking-tight3 text-[16px] [writing-mode:vertical-rl]">
            By Kachi Benson
          </span>
        </a>

        {/* Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)} // ✅ now opens overlay
          className="p-2 hover:text-yellow-500 transition cursor-pointer"
        >
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

        {/* Bottom Text + Sound Toggle */}
        <div className="flex flex-col items-center space-y-4">
          <span className="rotate-180 font-productsFont tracking-tight3 text-[16px] [writing-mode:vertical-rl]">
            Hope, resilience, and healing
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
        <nav className="flex flex-col w-full h-full ml-[140px]">
          {/* First 3 full-width items */}
          {MENU_ITEMS.slice(0, 3).map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              ref={(el) => {
                itemsRef.current[i] = el;
              }}
              className="flex-1 relative flex items-center opacity-0 group"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
              <span className="relative z-10 font-afolkalips px-10 py-5 text-center tracking-tight4 text-white leading-0 text-3xl sm:text-4xl md:text-[100px]">
                {item.label}
              </span>
            </a>
          ))}

          {/* Last row: two-column layout */}
          <div className="flex flex-1 w-full">
            {MENU_ITEMS.slice(3).map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                ref={(el) => {
                  itemsRef.current[i + 3] = el; // offset index
                }}
                className="w-1/2 relative flex items-center justify-center group opacity-0"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                <span className="relative z-10 font-afolkalips text-white text-4xl sm:text-5xl md:text-[100px] text-center tracking-tight4 leading-none px-6">
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
