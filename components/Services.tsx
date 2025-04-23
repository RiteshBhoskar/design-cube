"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useRef } from "react";
import { awardsData, servicesData } from "@/lib/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Services() {
    const sectionRef = useRef(null);
    const lastServiceRef = useRef(null);

    useGSAP(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 768px)" : () => {
                ScrollTrigger.create({
                    trigger: ".main-text",
                    start: "top top+=150",
                    endTrigger: lastServiceRef.current,
                    end: "bottom bottom",
                    toggleActions: "play reverse play reverse",
                    pin: true,
                    pinSpacing: true,
                })
            }
        })

    }, { scope: sectionRef })

    return (
        <section  id="services" className="flex flex-col h-full w-full sm:flex-row justify-between py-10 sm:py-40" ref={sectionRef}>
            <div className="flex flex-col sm:flex-row justify-between h-full w-full pt-20 sm:space-x-20">
            <div className="h-fit text-center pb-7 sm:pb-0 sm:w-4/12 main-text">
                 <h3 className="text-7xl font-bold uppercase">
                    Services
                 </h3>
                </div>
                <div className="flex flex-col pt-7 sm:pt-0 h-full space-y-20 w-full sm:w-7/12">
                    {servicesData.map((service) => (
                        <div key={service.id} className="flex justify-between space-x-5 h-full w-full"
                        ref={lastServiceRef}
                        >
                            <div className="flex-col h-full justify-between space-y-4 w-4/12">
                                <p className="text-[85px] font-bold text-[#9CFF33]">
                                    {service.id}
                                </p>
                                <p className="text-lg flex-wrap sm:text-3xl text-white font-medium">
                                {service.title}
                                </p>
                            </div>
                            <div className="font-light flex justify-center items-center text-lg text-gray-300 w-8/12">
                                {service.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}