"use client"

import { StarFour } from "@phosphor-icons/react";
import { Marquee } from "./magicui/marquee";
// import MainCuboid from "./MainCuboid";

const tags = [
  "UX/UI Design",
  "Graphic Design",
  "E-commerce Solutions",
  "Mobile App Design",
  "Digital Marketing",
  "Content Creation",
  "Social Media Management",
  "Video Production",
  "Consulting Services",
  "Web Design",
  "Branding",
  "SEO Optimization",
];

export default function Hero() {
  return (
    <section className="h-full mt-[80px] w-full flex flex-col font-inter">
      <Marquee className="w-full h-full [--duration:100s]">
        <div className="flex items-center gap-4 text-sm font-medium text-[#CCCCCC]">
          {tags.map((tag, index) => (
            <span key={index} className="flex items-center gap-4 whitespace-nowrap">
              {tag}
              <StarFour size={15} weight="fill" color="#9CFF33" />
            </span>
          ))}
        </div>
      </Marquee>
      <div className="flex flex-col items-center justify-center w-full h-full gap-4 mt-10 text-center">
        <h1 className="flex w-full h-full text-[170px] font-bold justify-center items-center text-center font-inter">DESIGN*CUBE</h1>
        <h2 className="flex justify-between items-center z-50 w-full h-full text-[#CCCCCC]">
            <span className="flex items-center text-start text-lg justify-start w-[300px] font-light">
                    At DesignCube, we specialize in web design, SEO, UI/UX, branding, and digital marketing. Elevate your brand and transform your digital presence with our innovative design solutions.
            </span>
            <button className="px-8 py-3 bg-white text-black rounded-full h-fit ">
                Our Projects
            </button>
            <span className="flex text-right font-light uppercase w-[300px] text-lg">
                    *ESTABLISHED — 2024
                    BUCHAREST, ROMANIA
            </span>
        </h2>
      </div>
      {/* <MainCuboid /> */}
    </section>
  );
}
