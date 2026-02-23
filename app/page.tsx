"use client";
import { useState, useRef } from "react";

import Navigation from "@/components/common/Navigation";
import Logo from "@/components/landing/Logo";
import LandingSection from "@/components/LandingSection";

import TheFilmBox from "@/components/common/theFilm";
import SectionWithBackground from "@/components/SectionBackground";
import TheMothers from "@/components/common/theMothers";
// import Header from "@/components/common/Header";
// import Partnership from "@/components/theImpact/Partnership";
import GoalsTimeline from "@/components/theImpact/GoalsTimeline";
import BeneContent from "@/components/theImpact/BeneContent";
//import TheImpactContent from "@/components/theImpact/TheImpactContent";
import TheHeadline from "@/components/theImpact/TheHeadline";
// import CreditSection from "@/components/theFilm/CreditSection";
import ContactHero from "@/components/contacts/ContactHero";
import SupportSection from "@/components/SupportSection";
import Image from "next/image";
import MovieBento from "@/components/mocMovie";
import FilmmakersSection from "@/components/theFilm/FilmmakersSection";

export default function LandingPage() {
  const [muted, setMuted] = useState(true);
  const trailerRef = useRef<HTMLDivElement>(null);

  const scrollToTrailer = () => {
    trailerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Navigation muted={muted} setMuted={setMuted} />
      <Logo />

      {/* main section */}
      <section id="landing-section" className="relative h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted={muted}
        >
          <source src="/assets/video/moc-video02.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-2000 -z-10" />
        <LandingSection onWatchTrailer={scrollToTrailer} />
      </section>

      {/* Trailer Section - Positioned directly below hero (using MovieBento with trailer + posters) */}
      <section 
        ref={trailerRef}
        id="trailer-section" 
        className="bg-neutral-950 text-white py-12"
      >
        <MovieBento
          trailerId="9bW3o6dYWk4"
          posters={[
            "/assets/images/posters/moc-poster-1.webp",
            "/assets/images/posters/yana-moc-movie-poster.webp",
            "/assets/images/posters/ladi-moc-movies-poster.webp",
            "/assets/images/posters/lydia-moc-movie-poster.webp",
            "/assets/images/posters/maryam.webp",
          ]}
        />
      </section>

      {/* the film section */}
      <SectionWithBackground
        id="the-film-section"
        videoSrc="/assets/video/moc-the-film.mp4"
        overlay
        className="min-w-full relative z-10"
      >
        <div className="min-h-[130vh]">
          {/*<CreditSection />*/}
          <TheFilmBox />
        </div>
      </SectionWithBackground>

      {/* Filmmakers Section */}
      <FilmmakersSection />

      <img
        src="/assets/images/moc-web-image-1.jpg"
        alt="Mothers of Chibok"
        className="w-full h-full object-cover"
      />
      <section
        id="the-mothers"
        className="min-h-screen flex items-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/the-mothers-bg.jpg')" }}
      >
        <div className="min-w-full relative z-10">
          <TheMothers />
        </div>
      </section>
      <section
        className="h-screen  items-start bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/moc-web-image-2.jpg')" }}
      >
        <div className="mx-auto max-w-6xl flex flex-col items-center justify-center text-center pl-20 pr-5">
          <img
            src="/assets/images/moc-encounter-award.png"
            className="lg:w-64 lg:h-64 w-24 h-24 mt-5"
            alt="MOC Encounter Award"
          />
          <p className="text-white mt-2 lg:-mt-10 text-base sm:text-xl lg:text-2xl leading-tight font-productsFont text-center">
            This year's winner of the AJD Award for Best African Feature offers a
            patient portrayal of what it means to persist in spite of terror,
            personal loss, and indefinite longing. Framed gracefully in natural
            light, the director measures the passage of time from seed to harvest,
            exalting these women who — undeterred by fear — continue to cultivate
            the land so they can educate their children. For this, and its
            delicate treatment of incorruptible love, the AJD Award for Best
            African Feature goes to MOTHERS OF CHIBOK directed by Joel Kachi
            Benson.
          </p>
        </div>
      </section>

      <section
        id="the-impact"
        className="min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/the-impact-bg.jpg')" }}
      >
        <div className="min-w-full relative z-10">
          <TheHeadline />
          {/*<TheImpactContent />*/}  
          <BeneContent />
          <GoalsTimeline />
          {/*<Partnership />*/}
        </div>
      </section>

      <section
        id="plant-seed"
        className="flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/moc-background-dark.jpg')",
        }}
      >
        <div className="min-w-full relative z-10">
          <SupportSection />
        </div>
      </section>

      <section
        id="contact"
        className="flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/moc-background-dark.jpg')",
        }}
      >
        <div className="min-w-full relative z-10">
          <ContactHero />
        </div>
      </section>
    </main>
  );
}
