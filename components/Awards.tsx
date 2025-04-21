"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useRef } from "react";
import { awardsData } from "@/lib/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Awards() {
    const sectionRef = useRef(null);
    const lastAwardRef = useRef(null);

    useGSAP(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 768px)" : () => {
                ScrollTrigger.create({
                    trigger: ".main-text",
                    start: "top top+=150",
                    endTrigger: lastAwardRef.current,
                    end: "bottom bottom",
                    toggleActions: "play reverse play reverse",
                    pin: true,
                    pinSpacing: true,
                })
            }
        })

    }, { scope: sectionRef })

    return (
        <section className="flex flex-col h-full w-full sm:flex-row justify-between py-10 sm:py-40" ref={sectionRef}>
            <div className="flex flex-col-reverse sm:flex-row justify-between h-full w-full pt-20 sm:space-x-20">
                <div className="flex flex-col pt-7 sm:pt-0 h-full space-y-20 w-full sm:w-7/12">
                    {awardsData.map((award) => (
                        <div key={award.id} className="flex justify-between space-x-5 h-full w-full"
                        ref={lastAwardRef}
                        >
                            <div className="flex-col h-full justify-between space-y-4 w-4/12">
                                <p className="text-2xl flex-wrap sm:text-4xl text-white font-medium">
                                {award.title}
                                </p>
                                <p className="text-sm text-gray-500">
                                {award.date}
                                </p>
                            </div>
                            <div className="font-light text-gray-300 w-8/12">
                                {award.description}
                            </div>
                        </div>
                    ))}
                </div>


                <div className="h-fit text-center pb-7 sm:pb-0 sm:w-4/12 main-text">
                 <h3 className="text-7xl font-bold uppercase">
                    Awards
                 </h3>
                </div>
            </div>
        </section>
    )
}