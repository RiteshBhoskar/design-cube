"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function KeyMetrics() {
    const metricsRef = useRef(null)

    useGSAP(() => {
        gsap.fromTo(".first-section", {
            autoAlpha: 0,
            x: -100,
        }, {
            autoAlpha: 1,
            x: 0,
            ease: "power1.out",
            duration: 0.5,
            scrollTrigger: {
                trigger: ".first-section",
                start: "top 70%",
                toggleActions: "play reverse play reverse"
            }
        }),

        gsap.fromTo(".second-section", {
            autoAlpha: 0,
            y: 100,
        }, {
            autoAlpha: 1,
            y: 0,
            ease: "power1.out",
            duration: 0.5,
            scrollTrigger: {
                trigger: ".second-section",
                start: "top 70%",
                toggleActions: "play reverse play reverse"
            }
        })

        gsap.fromTo(".third-section", {
            autoAlpha: 0,
            x: 100,
        }, {
            autoAlpha: 1,
            x: 0,
            ease: "power1.out",
            duration: 0.5,
            scrollTrigger: {
                trigger: ".third-section",
                start: "top 70%",
                toggleActions: "play reverse play reverse"
            }
        })
    }, { scope: metricsRef})

    return (
      <section ref={metricsRef} className="bg-black text-white h-full w-full overflow-clip my-20 px-4 sm:px-8 font-inter">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row first-section items-start sm:mb-20">
            <div className="md:w-1/3 mb-10 md:mb-0">
              <div className="flex items-center">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  KEY
                  <br />
                  METRICS
                </h2>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="mb-10">
                <h3 className="text-[#9CFF33] text-6xl md:text-7xl lg:text-8xl font-bold mb-2">500+</h3>
                <p className="text-2xl md:text-3xl text-gray-200 mb-4">Successful Projects</p>
                <p className="text-gray-400 w-[400px] font-light">
                  Demonstrates our extensive experience and consistent delivery of high-quality work.
                </p>
              </div>
            </div>
          </div>
  
          <div className="grid grid-cols-1 second-section md:grid-cols-3 gap-10 sm:mb-20">
            <div>
              <h3 className="text-[#9CFF33] text-6xl md:text-7xl font-bold mb-2">10+</h3>
              <p className="text-2xl md:text-3xl text-gray-200 mb-4">Years of Experience</p>
              <p className="text-gray-400 font-light">Showcases our longevity and expertise in the industry.</p>
            </div>
            <div>
              <h3 className="text-[#9CFF33] text-6xl md:text-7xl mb-2 font-bold">300+</h3>
              <p className="text-2xl md:text-3xl text-gray-200 mb-4">Satisfied Clients</p>
              <p className="text-gray-400 font-light">Highlights our broad client base and the strong relationships we've built.</p>
            </div>
            <div>
              <h3 className="text-[#9CFF33] text-6xl md:text-7xl mb-2 font-bold">98%</h3>
              <p className="text-2xl md:text-3xl text-gray-200 mb-4">Client Satisfaction Rate</p>
              <p className="text-gray-400 font-light">Indicates our high level of client service and commitment to excellence.</p>
            </div>
          </div>

          
          <div className="grid grid-cols-1 third-section md:grid-cols-3 gap-10 sm:pt-10">
            <div />
            <div>
              <h3 className="text-[#9CFF33] text-6xl md:text-7xl mb-2 font-bold">50+</h3>
              <p className="text-2xl md:text-3xl text-gray-200 mb-4">Skilled Professionals</p>
              <p className="text-gray-400 font-light">Emphasizes the strength and diversity of our expert team.</p>
            </div>
            <div>
              <h3 className="text-[#9CFF33] text-6xl md:text-7xl mb-2 font-bold">45%</h3>
              <p className="text-2xl md:text-3xl text-gray-200 mb-4">Average Sales Increase</p>
              <p className="text-gray-400 font-light">Demonstrates the tangible results our e-commerce solutions have achieved for clients.</p>
            </div>
          </div>

        </div>
      </section>
    )
  }