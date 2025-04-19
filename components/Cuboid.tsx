'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CuboidVertical() {
  const cubeRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!cubeRef.current) return

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
  }, [])

  const faces = [
    { text: 'Front', transform: 'rotateX(0deg) translateZ(6rem)' },
    { text: 'Bottom', transform: 'rotateX(90deg) translateZ(6rem)' },
    { text: 'Back', transform: 'rotateX(180deg) translateZ(6rem)' },
    { text: 'Top', transform: 'rotateX(-90deg) translateZ(6rem)' },
  ]

  return (
    <div className="scroll-area h-[400vh] bg-black text-white">
      <div className="sticky top-0 h-screen flex items-center justify-center perspective" style={{ perspective: '1000px' }}>
        <div
          ref={cubeRef}
          className="relative w-48 h-48"
          style={{
            transformStyle: 'preserve-3d',
            transition: 'transform 0.3s',
          }}
        >
          {faces.map((face, i) => (
            <div
              key={i}
              className="absolute w-48 h-48 bg-green-600 border border-white flex items-center justify-center text-xl font-bold"
              style={{
                transform: face.transform,
                backfaceVisibility: 'hidden',
              }}
            >
              {face.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
