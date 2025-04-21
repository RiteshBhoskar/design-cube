

"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { teamMembers } from "@/lib/data"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { ArrowUpRight } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function CustomerThoughts() {
    const teamRef = useRef(null)
    useGSAP(() => {
        const ctx = gsap.context(() => {
          const tl =  gsap.timeline({
            scrollTrigger: {
                trigger: teamRef.current,
                start: "top top-=25",
                end: "bottom center",
                pin: ".text",
                scrub: true,
            }
          })

          tl.to(".text h2", {
            autoAlpha: 0,
          })
        }, teamRef)
    
        return () => ctx.revert()
      }, [])

  return (
    <section ref={teamRef} className="flex flex-col w-full bg-black overflow-clip text-white">
      <div className="flex text items-center justify-center h-screen">
        <h2 className="text-white text-5xl md:text-[100px] font-bold">
          CUSTOMER*THOUGHTS
        </h2>
      </div>

      <div className="relative">
        <div className="w-full h-screen mx-auto">
            CAROUSAL
        </div>
      </div>


    </section>
  )
}
