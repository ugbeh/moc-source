"use client";

import React, { useState } from "react";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

interface PressLink {
  id: number;
  url: string;
  label: string;
  category: "article" | "radio" | "television";
}

const pressLinks: PressLink[] = [
  {
    id: 1,
    url: "https://leadership.ng/joel-kachi-bensons-mothers-of-chibok-set-for-cinema-release-feb-27/",
    label: "Leadership Newspaper",
    category: "article",
  },
  {
    id: 2,
    url: "https://lifestyle.thecable.ng/emmy-winning-filmmaker-kachi-bensons-mothers-of-chibok-hits-cinema-feb-27/",
    label: "The Cable",
    category: "article",
  },
  {
    id: 3,
    url: "https://www.thisdaylive.com/2026/02/04/emmy-winning-filmmaker-kachi-bensons-mothers-of-chibok-goes-to-cinema/",
    label: "This Day Live",
    category: "article",
  },
  {
    id: 4,
    url: "https://whatkeptmeup.com/nigerian-film-news/mothers-of-chibok-and-the-return-of-nigerian-documentaries-to-cinemas/",
    label: "What Kept Me Up",
    category: "article",
  },
  {
    id: 5,
    url: "https://news.broadcastmediaafrica.com/2026/02/13/mothers-of-chibok-to-premiere-in-cinemas-on-february-27/",
    label: "Broadcast Media Africa",
    category: "article",
  },
  {
    id: 6,
    url: "https://www.france24.com/en/across-africa-the-mothers-of-chibok-s-story-of-sadness-and-strength",
    label: "France24",
    category: "article",
  },
  {
    id: 7,
    url: "https://www.sinemafocus.com/mothers-of-chibok-film-review/",
    label: "Sinema Focus",
    category: "article",
  },
  {
    id: 8,
    url: "https://www.bellanaija.com/2026/02/mothers-of-chibok-cinema-release/",
    label: "Bellanaija",
    category: "article",
  },
  {
    id: 9,
    url: "https://afrocritik.com/joke-silva-joins-joel-kachi-benson-as-executive-producer-mothers-of-chibok/",
    label: "Afro Kritik",
    category: "article",
  },
  {
    id: 10,
    url: "https://thenollywoodreporter.com/film/mothers-of-chibok-opens-in-cinemas-february-27/",
    label: "The Nollywood Reporter",
    category: "article",
  },
  {
    id: 11,
    url: "https://independent.ng/architect-of-impact-why-chibok-story-belongs-on-big-screen-joel-kachi-benson/",
    label: "The Independent",
    category: "article",
  },
  {
    id: 12,
    url: "https://www.premiumtimesng.com/entertainment/movies/784333-ahead-of-11th-anniversary-joel-kachis-mothers-of-chibok-screens-in-lagos.html",
    label: "Premium Times",
    category: "article",
  },
  {
    id: 13,
    url: "https://guardian.ng/life/mothers-of-chibok-a-tale-of-hope-resilience/",
    label: "The Guardian Nigeria",
    category: "article",
  },
  {
    id: 14,
    url: "https://www.vanguardngr.com/2025/03/mothers-of-chibok-shines-at-irep-2025/amp/",
    label: "Vanguard Newspaper",
    category: "article",
  },
  {
    id: 15,
    url: "https://afrocritik.com/joel-kachi-benson-mothers-of-chibok-review/",
    label: "Afro Kritik",
    category: "article",
  },
  {
    id: 16,
    url: "https://thenollywoodreporter.com/news/mothers-of-chibok-wins-al-jazeera-award-for-best-documentary/",
    label: "The Nollywood Reporter",
    category: "article",
  },
  {
    id: 17,
    url: "https://www.thisdaylive.com/2025/03/26/mothers-of-chibok-to-open-irep-2025/",
    label: "This Day Live",
    category: "article",
  },
  {
    id: 18,
    url: "https://afrocritik.com/mothers-of-chibok-win-top-awards-at-encounters-documentary-film-festival/",
    label: "Afro Kritik",
    category: "article",
  },
  {
    id: 19,
    url: "https://www.thisdaylive.com/2025/03/28/mothers-of-chibok-receives-great-reviews-at-irep-2025/",
    label: "This Day Live",
    category: "article",
  },
  {
    id: 20,
    url: "https://thenollywoodreporter.com/news/kachi-benson-brings-mothers-of-chibok-to-south-africa/",
    label: "The Nollywood Reporter",
    category: "article",
  },
  {
    id: 21,
    url: "https://www.tvcnews.tv/joel-kachi-bensons-mothers-of-chibok-premieres-in-new-york/",
    label: "TVC News",
    category: "television",
  },
  {
    id: 22,
    url: "https://thenationonlineng.net/mothers-of-chibok-premiere-at-doc-nyc-festival/amp/",
    label: "The Nation",
    category: "article",
  },
  {
    id: 23,
    url: "https://www.forbes.com/sites/lipiroy/2024/11/29/film-mothers-of-chibok-10-years-after-boko-haram-kidnaps-nigerian-girls/",
    label: "Forbes",
    category: "article",
  },
  {
    id: 24,
    url: "https://www.tekedia.com/forum/topic/mothers-of-chibok-documentary-a-powerful-account-of-resilience-and-the-fight-for-justice/",
    label: "Tekedia",
    category: "article",
  },
];

export default function PressMentions() {
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 8;
  const displayedLinks = showAll ? pressLinks : pressLinks.slice(0, initialDisplayCount);
  const remainingCount = pressLinks.length - initialDisplayCount;

  return (
    <section id="press-mentions" className="py-16 px-6 max-w-6xl mx-auto pl-16 md:pl-20 lg:px-6">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white font-productsFont mb-4">
          Press Mentions
        </h2>
        <div className="flex justify-center gap-4 mb-8">
          <span className="px-4 py-2 bg-white/10 text-white text-sm rounded-full">
            News Articles
          </span>
          <span className="px-4 py-2 bg-white/10 text-white text-sm rounded-full">
            Radio
          </span>
          <span className="px-4 py-2 bg-white/10 text-white text-sm rounded-full">
            Television
          </span>
        </div>
      </div>

      {/* Press Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-lg transition-all duration-300 group"
          >
            <span className="text-white text-sm font-productsFont group-hover:text-yellow-400 transition-colors">
              {link.label}
            </span>
            <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-yellow-400 transition-colors" />
          </a>
        ))}
      </div>

      {/* Load More Button */}
      {!showAll && remainingCount > 0 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="flex items-center gap-2 bg-[#B89C58] hover:bg-[#D4AF37] text-neutral-900 px-8 py-3 rounded-full transition-all duration-300 font-productsFont font-semibold"
          >
            Load More
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Show Less Button */}
      {showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(false)}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full transition-all duration-300 font-productsFont font-semibold border border-white/20"
          >
            Show Less
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
}
