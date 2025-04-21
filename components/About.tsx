"use client"

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { facesData } from "@/lib/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function About() {
    const aboutRef = useRef(null);
    const cubeRef = useRef(null);
    const [cubeWidth, setCubeWidth] = useState(300)

    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth
        if (width >= 1024) setCubeWidth(900)
        else if (width >= 768) setCubeWidth(640)
        else setCubeWidth(300)
      }
    
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])
    
    useGSAP(() => {

        
        gsap.fromTo(
            cubeRef.current,
            { 
                width: '500px',
                 opacity: 0, y: 100 },
            {
              width: '900px',
              opacity: 1,
              y: 0,
              duration: 1,
              ease: 'power2.in',
              scrollTrigger: {
                trigger: aboutRef.current,
                start: 'top 30%',
                toggleActions: 'play none none reverse',
              }
            }
          )

        gsap.to(cubeRef.current, {
            rotateX: 270,
            ease: "none",
            scrollTrigger: {
                trigger: ".scroll-area",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
                onLeave: () => {
                    gsap.to(cubeRef.current, {
                        y: -200,
                        autoAlpha: 0,
                        duration: 0.5,
                        ease: "power2.out",
                        onComplete: () => {
                            gsap.to(".scroll-area", {
                                height: 0,
                                duration: 0.3,
                                onComplete: () => ScrollTrigger.refresh(),
                            })
                        }
                    });
                  },
                  onEnterBack: () => {
                    gsap.to(".scroll-area", {
                        height: "400vh",
                        duration: 0.3,
                        onComplete: () => {
                            ScrollTrigger.refresh();
                            gsap.fromTo(cubeRef.current, {
                                y: -200, autoAlpha: 0,
                            }, {
                                y: 0,
                                autoAlpha: 1,
                                duration: 0.5,
                                ease: "power2.out"
                            })
                        }
                    });
                  }
            },
        })

        gsap.to(".about-text", {
            autoAlpha: 0,
            ease: "power1.out",
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top top+=150",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
                pin: true,
                scrub: true,
            }
        })

    })

    return (
        <section id="about" ref={aboutRef} className="h-full w-full px-2 my-20 overflow-clip">
        <h2 className="flex w-full h-fit text-6xl sm:text-[200px] font-bold justify-center items-center text-center font-inter about-text text-white">ABOUT*US</h2>
        <div className="z-50 h-full sm:translate-y-[-300px] overflow-clip">    
            <div className="h-[400vh] text-white scroll-area overflow-clip">
            <div className="sticky top-0 h-screen flex items-center justify-center perspective overflow-clip" style={{ perspective: '1000px' }}>
                <div
                ref={cubeRef}
                className="relative"
                style={{
                    width: `${cubeWidth}px`,
                    height: '250px',
                    transformStyle: 'preserve-3d',
                    transition: 'transform 0.3s',
                }}
                >
                {facesData.map((face) => (
                    <div
                    key={face.id}
                    className="absolute h-[250px] w-full border border-[#CCCCCC] flex items-center justify-between text-xl bg-black font-bold"
                    style={{
                        transform: face.transform,
                        backfaceVisibility: 'hidden',
                    }}
                    >
                    <div className="flex flex-col items-start justify-between w-full h-full p-7 text-start">
                        <h2 className="sm:text-[25px] font-[200] text-[#9CFF33]">{face.title}</h2>
                        <p className="mt-2 sm:text-[27px] font-medium">{face.desc}</p>
                    </div>
                    <div className='sm:text-[200px] text-[#262626]'>
                        0{face.id}
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        
        </section>
    )
}