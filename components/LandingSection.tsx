"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import HeroSection from "@/components/landing/HeroSection";
import JourneyModal from "@/components/landing/JourneyModal";
import ScrollIndicator from "@/components/landing/ScrollIndicator";

export default function LandingSection() {
const [open, setOpen] = useState(false);

return (
<div className="relative w-screen h-screen overflow-hidden">
    <HeroSection onOpen={() => setOpen(true)} />
    <AnimatePresence>
    {open && <JourneyModal onClose={() => setOpen(false)} />}
    </AnimatePresence>
    <ScrollIndicator />
</div>
);
}
