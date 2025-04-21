"use client"

import { StarFour } from "@phosphor-icons/react";
import { Marquee } from "./magicui/marquee";
import RotatingCube from "./MainCube";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

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
  const sectionRef = useRef(null);

  useGSAP(() => {
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        toggleActions: "play reverse play reverse"
      }
    });

    mainTl.set(".main-text", {
      autoAlpha: 0,
      y: 100,
    })
    .set(".cube", {
      autoAlpha: 0,
      y: 100,
    })
    .set(".button", {
      autoAlpha: 0,
      y: 100,
    })
    .set(".marquee", {
      autoAlpha: 0,
      y: -100,
    })
    .set(".left-text" , {
      autoAlpha: 0,
      x: -100,
    })
    .set(".right-text" , {
      autoAlpha: 0,
      x: 100,
    })
    .to(".marquee", {
      autoAlpha: 1,
      y: 0,
      delay: 0.3,
      ease: "power1.out",
    })
    .to(".main-text", {
      autoAlpha: 1,
      y: 0,
      ease: "power1.out",
      duration: 1,
    })
    .to(".left-text", {
      autoAlpha: 1,
      x: 0,
      ease: "power1.out",
      duration: 1,
      delay: 0.5,
    }, "<")
    .to(".right-text", {
      autoAlpha: 1,
      x: 0,
      ease: "power1.out",
      duration: 0.5,
    }, "<")
    .to(".cube", {
      autoAlpha: 1,
      y: 0,
      ease: "power1.out",
      duration: 0.7,
    }, ">")
    .to(".button", {
      autoAlpha: 1,
      y: 0,
      ease: "power1.out",
    }, ">")
  })

  return (
    <section ref={sectionRef} className="h-full my-[80px] w-full flex flex-col overflow-clip font-inter">
      <Marquee className="w-full h-full marquee opacity-0 [--duration:100s]">
        <div className="flex items-center gap-4 text-sm font-medium text-[rgb(204,204,204)]">
          {tags.map((tag, index) => (
            <span key={index} className="flex items-center gap-4 whitespace-nowrap">
              {tag}
              <StarFour size={15} weight="fill" color="#9CFF33" />
            </span>
          ))}
        </div>
      </Marquee>
      <div className="flex flex-col items-center justify-center w-full h-full gap-4 my-10 text-center">
        <h1 className="flex w-full h-full text-5xl sm:text-[170px] font-bold justify-center items-center text-center font-inter main-text opacity-0">DESIGN*CUBE</h1>
        <div className="flex items-center justify-center cube opacity-0 sm:-mt-24 z-30 scale-105 sm:scale-[2]" >
                <RotatingCube />
        </div>
        <h2 className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 mt-5 justify-between items-center w-full h-full sm:-mt-20 text-[#CCCCCC]">
            <span className="flex items-center text-start sm:text-lg justify-start w-full sm:w-[250px] font-light left-text opacity-0">
                    At DesignCube, we specialize in web design, SEO, UI/UX, branding, and digital marketing. Elevate your brand and transform your digital presence with our innovative design solutions.
            </span>
            <button className="px-8 py-3 z-50 button opacity-0 bg-white text-black rounded-full h-fit transition-colors duration-2000 cursor-pointer hover:bg-[#9CFF33] ">
                Our Projects
            </button>
            <span className="flex  right-text justify-end text-right font-light uppercase w-full sm:w-[300px] text-lg opacity-0">
                    *ESTABLISHED — 2024
                    BUCHAREST, ROMANIA
            </span>
        </h2>
      </div>
    </section>
  );
}
