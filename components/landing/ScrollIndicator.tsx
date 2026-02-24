import { motion } from "framer-motion";

const ScrollIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 2,
      delay: 2.2,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 1,
    }}
    className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white z-10"
  >
    <a 
      href="#trailer-section" 
      className="flex flex-col items-center px-8 py-4 transition-all duration-300 backdrop-blur-sm shadow-lg"
    >
      <span className="text-xl font-productsFont font-bold bg-white/90 rounded-md hover:bg-white  tracking-wide text-black">Watch Trailer</span>
      <span className="mt-1 text-2xl animate-bounce text-white">↓</span>
    </a>
  </motion.div>
);

export default ScrollIndicator;
