"use client";

import { projectsData } from "@/lib/data";
import { Marquee } from "./magicui/marquee";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectsRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    tl.to(".title", {
      autoAlpha: 0,
    }).to(
      ".marquee",
      {
        autoAlpha: 1,
      },
    );
  }, { scope: projectsRef });

  return (
    <section
      ref={projectsRef}
      id="projects"
      className="relative bg-black text-white h-screen w-full overflow-hidden my-20 -mx-4 font-inter"
    >
      <h3 className="title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-[150px] font-bold z-20 opacity-100">
        OUR*PROJECTS
      </h3>

      <div className="marquee absolute inset-0 flex flex-col justify-center opacity-0 z-10">
        <Marquee className="[--duration:75s] h-70 w-full">
          {projectsData.t.map((image) => (
            <img
              src={image.image}
              alt="project images"
              key={image.id}
              className="h-full object-cover"
            />
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:75s] h-70 w-full">
          {projectsData.m.map((image) => (
            <img
              src={image.image}
              alt="project images"
              key={image.id}
              className="h-full object-cover"
            />
          ))}
        </Marquee>
        <Marquee className="[--duration:75s] h-70 w-full">
          {projectsData.b.map((image) => (
            <img
              src={image.image}
              alt="project images"
              key={image.id}
              className="h-full object-cover"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
