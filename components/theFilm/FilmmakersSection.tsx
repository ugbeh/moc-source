"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const filmmakers = [
  {
    name: "Joel 'Kachi Benson",
    role: "Director",
    image: "/assets/images/joel-kachi.jpeg",
    bio: "Joel 'Kachi' Benson is an award-winning documentary filmmaker whose work sits at the intersection of storytelling and social impact. Africa's 1st Venice Lion recipient for Immersive Storytelling, and Nigeria's first Emmy-winning documentary filmmaker, Benson is internationally recognized for elevating African stories to the global stage. Mothers of Chibok is his second feature film.",
    videoUrl: "https://www.youtube.com/watch?v=DIRECTOR_INTERVIEW_ID", // Replace with actual video ID
  },
  {
    name: "Joke Silva, MFR",
    role: "Executive Producer",
    image: "/assets/images/joke-silva.jpeg",
    bio: "Joke Silva, MFR, is one of Nigeria's most distinguished actors and cultural leaders, with a career spanning over four decades across stage and screen. A five-time Africa Movie Academy Award (AMAA) winner and co-founder of the Lufodo Group, she has played a defining role in shaping Nigeria's creative industry. She also serves as Executive Producer on Mothers of Chibok.",
    videoUrl: "https://www.youtube.com/watch?v=JOKE_VIDEO_ID", // Replace with actual video ID
  },
];

const FilmmakersSection = () => {
  return (
    <section id="filmmakers" className="py-20 bg-neutral-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-afolkalips text-center mb-16 text-[#B89C58]">
          From the Filmmakers
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {filmmakers.map((filmmaker, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center bg-neutral-900 p-8 rounded-lg"
            >
              <div className="relative w-48 h-48 mb-6 overflow-hidden rounded-full border-4 border-[#B89C58]">
                <Image
                  src={filmmaker.image}
                  alt={filmmaker.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-1 text-white">
                {filmmaker.name}
              </h3>
              
              <p className="text-[#B89C58] mb-4 font-productsFont">
                {filmmaker.role}
              </p>
              
              <p className="text-gray-300 font-productsFont text-sm leading-relaxed mb-6 max-w-md">
                {filmmaker.bio}
              </p>
              
              <a
                href={filmmaker.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#B89C58] hover:bg-yellow-700 text-white px-6 py-3 rounded-full transition-colors duration-300 font-productsFont"
              >
                <FaPlay className="text-sm" />
                Watch Message
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmmakersSection;
