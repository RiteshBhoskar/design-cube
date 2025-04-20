"use client"
import CuboidVertical from "./Cuboid";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
    const sectionRef = useRef(null);
    const cubeWrapperRef = useRef(null);
    useGSAP(() => {

        gsap.to(".about-text", {
            autoAlpha: 0,
            ease: "power1.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top+=150",
                endTrigger: cubeWrapperRef.current,
                end: "top top",
                toggleActions: "play reverse play reverse",
                pin: true,
                scrub: true,
            }
        })

    })

    return (
        <section id="about" ref={sectionRef} className="h-full w-full  my-20 overflow-clip">
        <h2 className="flex w-full h-fit text-6xl sm:text-[200px] font-bold justify-center items-center text-center font-inter about-text text-white">ABOUT*US</h2>
        <div ref={cubeWrapperRef} className="z-50 h-full translate-y-[-200px] ">
        <CuboidVertical />
        </div>
        </section>
    )
}