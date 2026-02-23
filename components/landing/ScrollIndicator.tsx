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
    className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white text-[18px] z-10"
  >
    <a href="#the-film-section" className="flex flex-col items-center">
      <span>Scroll</span>
      <span className="-mt-2">↓</span>
    </a>
  </motion.div>
);

export default ScrollIndicator;
