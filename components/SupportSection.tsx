"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function SupportSection() {
  const [formOpen, setFormOpen] = useState(false);

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <section className="min-h-screen text-white flex flex-col justify-between font-productsFont tracking-tight3 py-10">
      <header className="w-full border-b p-16 flex justify-between items-center max-w-[1845px] relative left-[69px]">
        <div className="text-[70px] tracking-tight4 leading-0 font-afolkalips text-gray-200">
          Plant a Seed
        </div>
      </header>

      {/* Top Content */}
      <div className="mt-10 pl-24 pr-5 lg:px-34">
        <h2 className="text-xl md:text-3xl mb-4">Why your support matters:</h2>
        <div className="pl-14 lg:pl-20">
          <p className="text-lg mb-6">
            Real change happens when stories move people to action. By
            supporting this project, you stand with the mothers of Chibok as
            they fight for their children's future. There are two powerful ways
            to make a difference:
          </p>
          <h2 className="text-xl md:text-3xl mb-1">Donate</h2>
          <p className="text-lg mb-6">
            Your contribution provides women farmers with seeds, tools, and
            training, helping them earn an income and keep their children in
            school.
          </p>
          <Button
            onClick={openForm}
            className="bg-[#B89C58] hover:bg-yellow-800 text-white px-6 py-3 text-lg tracking-normal rounded-none mb-6"
          >
            Click here to make a donation
          </Button>
          
        </div>
      </div>

      {/* Bottom Content */}
      <div className="flex flex-col md:flex-row items-start md:items-center pl-24 pr-5 lg:px-34 gap-10 md:gap-0">
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <Image
              src="/assets/images/moc-arrow.png"
              alt="arrow moc"
              width={80}
              height={80}
              className="hidden sm:block h-24 w-auto -rotate-12 relative left-2 sm:left-5 sm:-top-10"
            />
            <div className="flex flex-col space-y-2 mt-4 sm:mt-0">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal">
                Host a Screening
              </h3>
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                Bring the film to your community, workplace, or campus. Every
                screening raises awareness, sparks dialogue, and mobilizes
                resources for the mothers.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <form className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-left">
            <Input
              placeholder="Your Full Name"
              className="bg-transparent border-b border-t-0 border-l-0 border-r-0 border-gray-500 rounded-none text-white placeholder:text-gray-400 text-center font-light tracking-wide"
            />
            <Input
              placeholder="How do you want to host"
              className="bg-transparent border-b border-t-0 border-l-0 border-r-0 border-gray-500 rounded-none text-white text-center placeholder:text-gray-400 font-light tracking-wide"
            />
            <Input
              placeholder="Your Email Address"
              className="bg-transparent border-b border-t-0 border-l-0 border-r-0 border-gray-500 rounded-none text-white placeholder:text-gray-400 text-center font-light tracking-wide sm:col-span-2"
            />
            <div className="flex justify-center w-80 sm:justify-end">
              <Button className="bg-[#B89C58] hover:bg-yellow-800 text-white px-8 py-3 rounded-none text-sm sm:text-base font-medium uppercase tracking-wide w-full sm:w-auto">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="px-6 ml-20 lg:ml-28 mt-10 mb-5">
        <p className="text-lg text-center">
          Whether you give or gather, your support turns resilience into
          opportunity and ensures that Chibok is never forgotten.
        </p>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {formOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900  w-full max-w-3xl p-6 relative"
            >
              <button
                onClick={closeForm}
                className="absolute top-3 right-4 text-gray-300 hover:text-white text-xl"
              >
                ✕
              </button>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-center flex-1">
                  Make a Donation
                </h2>
              </div>
              
              <iframe
                src="https://paystack.shop/pay/plant-a-seed"
                width="100%"
                height="600"
                allow="payment"
                className="rounded-md border-0"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
