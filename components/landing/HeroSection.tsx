import { motion, Variants } from "framer-motion";
import Image from "next/image";

const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.6 },
  }),
};

const subtitleAnimation: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.05 + 0.6, duration: 0.4 },
  }),
};

type Props = { onOpen: () => void };

const HeroSection = ({ onOpen }: Props) => {
  const title = "Mothers of Chibok";
  const subtitle =
    "A story of hope, resilience, and healing, through mothers, memory, and peanuts";

  return (
    <div className="relative z-10 flex flex-col items-center h-full text-center text-white  pt-6 pl-10 3xl:max-w-[1744px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Image
          src="/assets/images/moc-awards-logo-updated.png"
          alt="Awards"
          width={350}
          height={350}
          className="w-[clamp(200px,20vw,450px)] h-auto"
        />
      </motion.div>

      <h1
        className="
          font-afolkalips 
          tracking-tight4 
          flex flex-wrap justify-center text-center
          text-[50px]       /* Mobile default */
          md:text-[100px]    /* Medium screens ≥768px */
          lg:text-[140px]    /* Large screens ≥1280px */
          2xl:text-[165px]   /* Extra large ≥1536px */
          -mt-5
          md:-mt-10
          lg:-mt-12
          3xl:-mt-16
        "
      >
        {title.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>

      <p
        className="
           font-productsFont 
          tracking-tight3 
           px-8
          leading-3
          mb-4
          text-center
          -mt-[22px]
          md:-mt-5
          lg:-mt-12
          3xl:-mt-16
          text-[13px]       /* Mobile default */
          md:text-[14px]    /* Medium screens ≥768px */
          lg:text-[16px]    /* Large screens ≥1280px */
          xl:text-[18px]
          2xl:text-[21px]   /* Extra large ≥1536px */
        "
      >
        {subtitle.split(" ").map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={subtitleAnimation}
            initial="hidden"
            animate="visible"
            className="mr-1 inline-block"
          >
            {word}
          </motion.span>
        ))}
      </p>

      {/* CTA */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="bg-[#B89C58] hover:bg-yellow-600 transition-colors duration-300 
          px-4 py-2
          text-[clamp(0.875rem,1.5vw,1.25rem)]"
        onClick={onOpen}
      >
        Follow the journey
      </motion.button>
    </div>
  );
};

export default HeroSection;
