import { motion, Variants } from "framer-motion";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

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

type Props = { 
  onOpen: () => void;
  onWatchTrailer: () => void;
};

const HeroSection = ({ onOpen, onWatchTrailer }: Props) => {
  const title = "Mothers of Chibok";
  const subtitle =
    "A story of hope, resilience, and healing, through mothers, memory, and peanuts";

  // Target date: February 27, 2026
  const targetDate = new Date("2026-02-27T00:00:00");

  return (
    <div className="relative z-10 flex flex-col items-center h-full text-center text-white pt-6 pl-10 3xl:max-w-[1744px] mx-auto">
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
          text-[50px]       
          md:text-[100px]    
          lg:text-[140px]    
          2xl:text-[165px]   
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
          mb-2
          text-center
          -mt-[22px]
          md:-mt-5
          lg:-mt-12
          3xl:-mt-16
          text-[13px]       
          md:text-[14px]    
          lg:text-[16px]    
          xl:text-[18px]
          2xl:text-[21px]   
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

      {/* New: In Cinemas Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-4"
      >
        <h2 className="font-productsFont text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-wide">
          In Cinemas February 27
        </h2>
        <p className="font-productsFont text-sm md:text-base text-white/80 mt-1">
          Cinemas in Nigeria & Ghana
        </p>
        
        {/* Countdown Timer */}
        <CountdownTimer targetDate={targetDate} />
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6">
          <motion.a
            href="https://www.filmoneng.com/movie/mothers-of-chibok"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="bg-[#B89C58] hover:bg-yellow-600 transition-colors duration-300 
              px-6 py-3 text-lg font-productsFont font-bold inline-block"
          >
            Get Tickets Now
          </motion.a>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 
              px-6 py-3 text-lg font-productsFont font-bold"
            onClick={onWatchTrailer}
          >
            Watch Trailer
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
