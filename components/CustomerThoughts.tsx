"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { customerData } from "@/lib/data"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function CustomerThoughts() {
    const customerRef = useRef(null)
    const carouselRef = useRef(null)
    useGSAP(() => {
        const ctx = gsap.context(() => {
          const tl =  gsap.timeline({
            scrollTrigger: {
                trigger: customerRef.current,
                start: "top top-=25",
                endTrigger: carouselRef.current,
                end: "center 70%",
                pin: ".text",
                scrub: true,
            }
          })

          tl.to(".text h2", {
            autoAlpha: 0,
          })
        }, customerRef)
    
        return () => ctx.revert()
      }, [])

  return (
    <section ref={customerRef} className="flex flex-col w-full bg-black overflow-clip text-white">
      <div className="flex text items-center justify-center h-screen">
        <h2 className="text-white text-4xl sm:text-[100px] font-bold">
          CUSTOMER*THOUGHTS
        </h2>
      </div>

      <div className="relative" ref={carouselRef}>
        <div className="w-full h-screen mx-auto">
        <Carousel>
            <CarouselContent>
            {customerData.map((customer, index) => (
            <CarouselItem key={index}>
              <div
                className="flex flex-col items-center text-center p-8 bg-transparent rounded-2xl mx-4 min-h-[400px] shadow-xl cursor-grab"
              >
                <Image
                  src={customer.image}
                  alt={customer.name}
                  width={125}
                  height={125}
                  className="rounded-full object-cover w-[125px] h-[125px] "
                />
                <h3 className="text-3xl font-inter text-gray-300 font-light">{customer.name}</h3>
                <p className="text-gray-400 text-xs pt-1 font-medium">{customer.title}</p>
                <p className="text-2xl sm:text-3xl sm:px-20 text-white mt-7 italic font-light">"{customer.description}"</p>
              </div>
              </CarouselItem>
            ))}
            </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#9CFF33] text-black hover:bg-white transition p-2 rounded-full" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#9CFF33] text-black hover:bg-white transition p-2 rounded-full" />
          </Carousel>
        </div>
      </div>


    </section>
  )
}
