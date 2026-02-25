"use client";
import { useState, useRef } from "react";

import Navigation from "@/components/common/Navigation";
import LandingSection from "@/components/LandingSection";

import TheFilmBox from "@/components/common/theFilm";
import SectionWithBackground from "@/components/SectionBackground";
import TheMothers from "@/components/common/theMothers";
import GoalsTimeline from "@/components/theImpact/GoalsTimeline";
import BeneContent from "@/components/theImpact/BeneContent";
import PressMentions from "@/components/theImpact/PressMentions";
import TheHeadline from "@/components/theImpact/TheHeadline";
import ContactHero from "@/components/contacts/ContactHero";
import SupportSection from "@/components/SupportSection";
import MovieBento from "@/components/mocMovie";
import FilmmakersSection from "@/components/theFilm/FilmmakersSection";
import DocumentaryStills from "@/components/theFilm/DocumentaryStills";
import PostersSection from "@/components/theFilm/PostersSection";

export default function LandingPage() {
  const [muted, setMuted] = useState(true);
  const trailerRef = useRef<HTMLDivElement>(null);

  const scrollToTrailer = () => {
    trailerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Navigation muted={muted} setMuted={setMuted} />

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

      {/* Trailer Section */}
      <section 
        ref={trailerRef}
        id="trailer-section" 
        className="bg-neutral-950 text-white py-12"
      >
        <MovieBento
          trailerId="TGJ3ZQPos0A"
          showTrailer={true}
          showPosters={false}
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
          <TheFilmBox />
        </div>
      </SectionWithBackground>

      {/* Posters Section - After The Film Section */}
      <section className="bg-neutral-950 text-white py-12">
        <header className="border-b p-10 lg:p-16 flex justify-between items-center">
        <div className="lg:text-[70px] text-[40px] tracking-tight4 leading-0 font-guthenBloots text-gray-200">
          The Mothers
        </div>
      </header>
        <PostersSection />
      </section>

      {/* <section
        id="the-mothers"
        className="min-h-screen flex items-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/the-mothers-bg.jpg')" }}
      >
        <div className="min-w-full relative z-10">
          <TheMothers />
        </div>
      </section> */}

      {/* Filmmakers Section */}
      <FilmmakersSection />

      {/* Documentary Stills Section */}
      <DocumentaryStills />
      
      <section
        className="h-screen items-start bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/moc-web-image-2.jpg')" }}
      >
        <div className="mx-auto max-w-6xl flex flex-col items-center justify-center text-center px-8">
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
          <BeneContent />
          
          <GoalsTimeline />
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
        id="the-impact"
        className="min-h-screen flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/the-impact-bg.jpg')" }}
      >
        <div className="min-w-full relative z-10">
          <PressMentions />
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
