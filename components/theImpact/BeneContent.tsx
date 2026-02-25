"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const beneficiaries = [
  {
    src: "/assets/images/beneficiaries/moc-beneficiary-1.jpg",
    name: "HANNATU DAUDA",
    bio: "Hannatu's life is a lesson in persistence. Relying entirely on farming, she has managed to keep her children in school since losing her daughter in 2014. The deep lines in her hands tell the story of countless seasons spent tilling the earth. For Hannatu, each harvest is more than food on the table but a step toward the future her daughter never got to see.",
  },
  {
    src: "/assets/images/beneficiaries/moc-beneficiary-3.jpg",
    name: "LYDIA YAMA",
    bio: "Lydia bears a double burden: she is separated from her husband and also represents her mother, who lost a daughter, Lydia's sister, in the abductions. Her days are filled with the unrelenting tasks of single parenthood, yet she carries herself with quiet dignity. Through it all, Lydia's focus remains on keeping her children safe, educated, and hopeful.",
  },
  {
    src: "/assets/images/beneficiaries/moc-beneficiary-8.jpg",
    name: "YANA GALANG",
    bio: "As the women's leader of the Parents Association of the Abducted Chibok Girls, Yana speaks not only for herself but for over 200 families that were affected by the tragedy. A farmer by trade, she works her land despite limited resources, determined to see her children through secondary school. Yana's strength lies in her ability to turn personal pain into collective advocacy.",
  },
  {
    src: "/assets/images/beneficiaries/moc-beneficiary-9.jpg",
    name: "ESTHER MUSA",
    bio: "Esther's life revolves around the rhythms of the farm. After losing her daughter, she channels her energy into growing food to feed her family and sell a small surplus for other needs. She works in quiet determination, her resilience revealed not in grand gestures, but in the steady provision she brings to her household.",
  },
  {
    src: "/assets/images/beneficiaries/moc-beneficiary-10.jpg",
    name: "RIFKATU AYUBA",
    bio: "For Rifkatu, the fields are both livelihood and sanctuary. Every grain harvested is a product of her will to keep going after her daughter’s abduction. Her earnings are directed toward one goal: ensuring her children remain in school. She works under the sun with unyielding resolve, knowing that education is the one gift she can still give.",
  },
  {
    src: "/assets/images/beneficiaries/moc-beneficiary-4.jpg",
    name: " RUTH KWAKWI",
    bio: "Ruth's loss was compounded by tragedy — the shock of her daughter's kidnapping led to her husband's stroke and eventual passing. Left a widow, she shoulders every responsibility alone. She farms not only to survive, but to make certain her children's education does not end with grief. Her endurance is a quiet act of defiance against despair.",
  },
  {
    src: "/assets/images/beneficiaries/moc-beneficiary-5.jpg",
    name: "LADI LAWAN ZANNAH",
    bio: "Ladi lost her second daughter to the abductions. A teacher during the day and a farmer in the evenings, she balances two demanding roles to care for her six children. One is now in university, a testament to her relentless dedication. Ladi's story is one of stamina, sacrifice, and a fierce belief in the value of learning.",
  },
  {
    src: "/assets/images/beneficiaries/moc-beneficiary-6.jpg",
    name: "HADIZA YIDAU",
    bio: "Hadiza is a widow who farms to provide for her family. She works without external support, carrying both the weight of loss and the responsibility of sustaining her household. Her labor is backbreaking, yet each harvest reaffirms her determination to meet her children's needs.",
  },
  {
    src: "/assets/images/beneficiaries/moc-beneficiary-2.jpg",
    name: "MARY SHETTIMA",
    bio: "With her husband battling a terminal illness, Mary became the family's anchor. She runs her farm with discipline and care, ensuring her children are fed and educated. Mary turns adversity into action, proving that strength can be as steady and nurturing as it is unyielding. These women are more than survivors. They are cultivators of hope, builders of futures, and living proof that resilience can take root even in the hardest ground.",
  },
];

const BeneContent = () => {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-white items-center py-40 font-productsFont"
      style={{ backgroundImage: "url('/assets/images/moc-background-dark.jpg')" }}
    >
      <div className="mx-auto space-y-36">
        {/* Heading */}
        <div className="px-8">
          <h2 className="text-center mb-10 font-productsFont text-5xl">
            Beneficiaries
          </h2>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              360: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {beneficiaries.map((b, i) => (
              <SwiperSlide key={i}>
                <div className="relative group overflow-hidden">
                  <Image
                    src={b.src}
                    alt={b.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
                    <h3 className="text-xl font-semibold underline">{b.name}</h3>
                    <p className="text-[15px] lg:text-lg mt-2 leading-snug">{b.bio}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BeneContent;
