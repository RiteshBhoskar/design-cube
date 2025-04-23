"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.set(".navbar", { autoAlpha: 0, y: -100 });
    gsap.to(".navbar", { autoAlpha: 1, y: 0, ease: "power1.out" });
  });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <header className="z-[999] fixed top-0 w-full h-fit flex items-center justify-center text-white navbar opacity-0">
      <nav className="hidden sm:flex items-center text-lg py-1.5 px-1.5 bg-black rounded-full mt-5 text-[#CCCCCC]">
        <button onClick={() => scrollToSection("hero")} className="rounded-full h-full px-5 py-1 border text-white border-[#9CFF33]">
          Home
        </button>
        <button onClick={() => scrollToSection("about")} className="rounded-full h-full px-5 py-1 transition-colors hover:text-[#9CFF33]">
          About
        </button>
        <button onClick={() => scrollToSection("services")} className="rounded-full h-full px-5 py-1 transition-colors hover:text-[#9CFF33]">
          Services
        </button>
        <button onClick={() => scrollToSection("projects")} className="rounded-full h-full px-5 py-1 transition-colors hover:text-[#9CFF33]">
          Projects
        </button>
        <button onClick={() => scrollToSection("footer")} className="rounded-full h-full px-5 py-1 transition-colors hover:text-[#9CFF33]">
          Contact
        </button>
        <button className="rounded-full h-full px-5 py-1 bg-white transition-all duration-2000 hover:bg-[#9CFF33] text-black">
          FREE Remix
        </button>
      </nav>

      <div className="sm:hidden w-full rounded-full mt-2 px-4 py-2 flex justify-between items-center bg-black">
        <button onClick={() => setIsOpen(!isOpen)}>
          <MenuIcon />
        </button>
        <button className="bg-white text-black py-1 px-4 rounded-full hover:bg-[#9CFF33]">
          FREE Remix
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden absolute top-14 left-0 w-full bg-black text-center flex flex-col space-y-4 py-4 z-[1000]">
          <button onClick={() => scrollToSection("hero")} className="text-white hover:text-[#9CFF33]">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="text-white hover:text-[#9CFF33]">
            About
          </button>
          <button onClick={() => scrollToSection("services")} className="text-white hover:text-[#9CFF33]">
            Services
          </button>
          <button onClick={() => scrollToSection("projects")} className="text-white hover:text-[#9CFF33]">
            Projects
          </button>
          <button onClick={() => scrollToSection("footer")} className="text-white hover:text-[#9CFF33]">
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
