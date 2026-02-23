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
];

const SectionHeader = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center mb-14 space-y-3">
    <div className="h-[1px] w-24 bg-white" />
    <h2 className="text-center text-5xl">{title}</h2>
  </div>
);

const Partnership = () => {
  return (
    <section className="text-white font-productsFont w-full pt-20">
      <div className="mx-auto">
        <div
          className="
            flex flex-col md:flex-row 
            items-center justify-center
            space-y-8 md:space-y-0 md:divide-x divide-white
          "
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-full md:w-72 h-20 px-6"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
