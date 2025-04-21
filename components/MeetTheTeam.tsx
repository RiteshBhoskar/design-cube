"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { teamMembers } from "@/lib/data"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { ArrowUpRight } from "lucide-react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function EnhancedTeamSection() {
    const teamRef = useRef(null)
    useGSAP(() => {
        const ctx = gsap.context(() => {
          const tl =  gsap.timeline({
            scrollTrigger: {
                trigger: teamRef.current,
                start: "top top-=100",
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
    <section ref={teamRef} className="flex flex-col w-full py-16 md:py-20 bg-black overflow-clip text-white">
      <div className="flex text items-center justify-center h-screen">
        <h2 className="text-white text-5xl md:text-[125px] font-bold">
          MEET*THE*TEAM
        </h2>
      </div>

      <div className="relative px-20 sm:px-50">
        <div className="w-full mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="group [perspective:1000px]">
              <div className="relative w-full h-[200px] transform transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 bg-gray-900 rounded-lg [backface-visibility:hidden]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-b-lg">
                    <h3 className="text-white text-lg font-semibold">{member.name}</h3>
                    <p className="text-gray-300 text-sm">{member.role}</p>
                  </div>
                </div>

                <div className="absolute inset-0 bg-[#9CFF33] rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)] text-gray-900 flex flex-col justify-center items-center text-center p-4">
                    <ArrowUpRight size={100} strokeWidth={1} />
                  <a
                    href="https://x.com/RiteshBhoskar7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition text-3xl flex-wrap font-light"
                  >
                    Visit my X (Twitter)
                  </a>
                </div>
              </div>
            </div>            
            ))}
          </div>
        </div>
      </div>


    </section>
  )
}
