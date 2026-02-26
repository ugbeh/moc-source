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
    "If you think you know their story, think again.";

  // Target date: February 27, 2026
  const targetDate = new Date("2026-02-27T00:00:00");

  return (
    <div className="relative z-10 flex flex-col items-center h-full text-center text-white pt-6 pl-10 3xl:max-w-[1744px] mx-auto">
      {/* <motion.div
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
      </motion.div> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 md:mt-16 lg:mt-20 3xl:mt-24 mb-4"
      >
        <Image
          src="/assets/images/mocx.png"
          alt="Mothers of Chibok"
          width={1200}
          height={300}
          className="
            w-[clamp(200px,50vw,800px)]
            h-auto
          "
        />
      </motion.div>

      <p
        className="
           font-productsFont 
          tracking-tight3 
           px-8
          leading-3
          mb-2
          text-center
         
          text-[14px]       
          md:text-[16px]    
          lg:text-[18px]    
          xl:text-[21px]
          2xl:text-[24px]   
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
        className="mt-8"
      >
        <h2 className="font-productsFont text-xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide">
          Now showing in cinemas across Nigeria & Ghana
        </h2>
        {/* <p className="font-productsFont text-sm md:text-base text-white/80 mt-1">
          Cinemas in Nigeria & Ghana
        </p> */}
        
        {/* Countdown Timer */}
        {/* <CountdownTimer targetDate={targetDate} /> */}
        
        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6">
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
        </div> */}
      </motion.div>
    </div>
  );
};

export default HeroSection;
