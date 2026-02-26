import Image from "next/image";

const partners = [
  {
    src: "/assets/images/impactLogo_white.png",
    alt: "Impact Logo Mothers of Chibok",
  },
  {
    src: "/assets/images/hl-box-logo.png",
    alt: "HL Box Logo Mothers of Chibok",
  },
  {
    src: "/assets/images/Jb-multimedia-logo.png",
    alt: "JB Multimedia Logo Mothers of Chibok",
  },
  {
    src: "/assets/images/uwaosi-foundation-logo.png",
    alt: "Uwaosi Logo Mothers of Chibok",
  },
  {
    src: "/assets/images/zenfix-logo.png",
    alt: "Zenfix Logo Mothers of Chibok",
  },
  {
    src: "/assets/images/bellanaija-seeklogo.png",
    alt: "Bellanaija Logo Mothers of Chibok",
  },
  {
    src: "/assets/images/EDEN LOGO.jpg.jpeg",
    alt: "EDEN Logo Mothers of Chibok",
  },
  {
    src: "/assets/images/Forum of Women in Film and TV.png",
    alt: "Forum of Women in Film and TV Logo Mothers of Chibok",
  },
  {
    src: "/assets/images/Lammie Designs. Jpg",
    alt: "Lammie Designs Logo Mothers of Chibok",
  },
  {
    src: "/assets/images/Light-design-studio-logo.png.png",
    alt: "Light Design Studio Logo Mothers of Chibok",
  },
  {
    src: "/assets/images/O. Kayode & Co Logo.jpeg",
    alt: "O. Kayode & Co Logo Mothers of Chibok",
  },
  {
    src: "/assets/images/SIP Logo_Reverse_2021.png",
    alt: "SIP Logo Mothers of Chibok",
  },
  {
    src: "/assets/images/UWAOSIBRANDINGLOGO.png",
    alt: "Uwaosi Branding Logo Mothers of Chibok",
  },
  {
    src: "/assets/images/Vlisco_TextLogo-SaveSpace.png",
    alt: "Vlisco Logo Mothers of Chibok",
  },
];

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center mb-14 space-y-3">
    <div className="h-[1px] w-24 bg-white" />
    <h2 className="text-center text-5xl">{title}</h2>
  </div>
);

const Partnership = () => {
  return (
    <section className="text-white font-productsFont w-full pt-20 overflow-hidden">
      <div className="mx-auto">
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-8 w-max">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-40 md:w-48 h-20 px-4 flex-shrink-0"
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={150}
                  height={150}
                  className={`object-contain w-full h-full ${partner.src.includes('bellanaija') ? 'invert brightness-0 contrast-200' : ''}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Partnership;
