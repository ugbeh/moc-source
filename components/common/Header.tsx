"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Route = {
  name: string;
  path: string;
};

const routes: Route[] = [
  { name: "The Film", path: "/#the-film" },
  { name: "The Mothers", path: "/#the-mothers" },
  { name: "The Impact", path: "/#the-impact" },
  { name: "About/Contact", path: "/#about-contact" },
  { name: "Donate", path: "/#donate" },
];

export default function Header() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    handleHashChange(); // set initial
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const fullPath = `${pathname}${hash}`;
  const route = routes.find((r) => r.path === fullPath || r.path === pathname);
  const currentPageName = route ? route.name : "";

  return (
    <header className="w-full border-b p-14 flex justify-between items-center z-10">
      <div className="text-[70px] tracking-tight4 leading-0 font-afolkalips text-gray-200">
        {currentPageName}
      </div>
    </header>
  );
}
