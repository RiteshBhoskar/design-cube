'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CuboidVertical() {
  const cubeRef = useRef<HTMLDivElement>(null)
  const [cubeSize, setCubeSize] = useState(192)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) setCubeSize(96)
      else if (width < 1024) setCubeSize(160)
      else setCubeSize(192)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useLayoutEffect(() => {
    if (!cubeRef.current) return

    const ctx = gsap.context(() => {
      // Entry width animation
      gsap.fromTo(
        cubeRef.current,
        { width: '200px', opacity: 0, y: 100 },
        {
          width: '900px',
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.scroll-area',
            start: 'top center',
            toggleActions: 'play none none reverse',
          }
        }
      )

      // Scroll-based rotation
      gsap.to(cubeRef.current, {
        rotateX: 270,
        ease: 'none',
        scrollTrigger: {
          trigger: '.scroll-area',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  const faces = [
    { id: 1, title: 'Innovative Solutions, Timeless Design', desc: "We blend creativity and technology to deliver designs that stand the test of time.", transform: 'rotateX(0deg) translateZ(125px)' },
    { id: 2, title: 'Your Vision, Our Expertise', desc: "Partner with us to bring your ideas to life with precision and creativity.", transform: 'rotateX(90deg) translateZ(125px)' },
    { id: 3, title: 'Crafting Digital Experiences', desc: "We create engaging and intuitive digital experiences tailored to your audience.", transform: 'rotateX(180deg) translateZ(125px)' },
    { id: 4, title: 'Driven by Creativity, Defined by Excellence', desc: "Our team is passionate about delivering top-notch solutions that exceed expectations.", transform: 'rotateX(-90deg) translateZ(125px)' },
  ]

  return (
    <div className="scroll-area h-[400vh] text-white">
      <div className="sticky top-0 h-screen flex items-center justify-center perspective" style={{ perspective: '1000px' }}>
        <div
          ref={cubeRef}
          className="relative h-[250px] opacity-0"
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.3s',
          }}
        >
          {faces.map((face) => (
            <div
              key={face.id}
              className="absolute h-[250px] w-full border border-[#CCCCCC] flex items-center justify-between text-xl bg-black font-bold"
              style={{
                transform: face.transform,
                backfaceVisibility: 'hidden',
              }}
            >
              <div className="flex flex-col items-start justify-between w-full h-full p-7 text-start">
                <h2 className="text-[25px] font-[200] text-[#9CFF33]">{face.title}</h2>
                <p className="mt-2 text-[27px] font-medium">{face.desc}</p>
              </div>
              <div className='text-[200px] text-[#262626]'>
                0{face.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
