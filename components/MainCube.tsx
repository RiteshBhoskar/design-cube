'use client'

import { useEffect, useRef, useState } from 'react'

export default function RotatingCube() {
  const cubeRef = useRef<HTMLDivElement>(null)
  const [cubeSize, setCubeSize] = useState(192)

  useEffect(() => {
    let angle = 0
    const rotate = () => {
      if (cubeRef.current) {
        angle += 0.3
        const scrollY = window.scrollY
        const translateY = scrollY * -0.1
        cubeRef.current.style.transform = `rotateY(${angle}deg) translateY(${translateY}px)`
      }
      requestAnimationFrame(rotate)
    }
    rotate()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setCubeSize(96)
      } else if (width < 1024) {
        setCubeSize(160)
      } else {
        setCubeSize(192) 
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const images = ['img1.png', 'img2.png', 'img3.png', 'img4.png']
  const halfDepth = cubeSize / 2

  const transforms = [
    `rotateY(0deg) translateZ(${halfDepth}px)`,
    `rotateY(90deg) translateZ(${halfDepth}px)`,
    `rotateY(180deg) translateZ(${halfDepth}px)`,
    `rotateY(-90deg) translateZ(${halfDepth}px)`,
  ]

  return (
    <div className="h-full bg-black flex w-full items-center justify-center">
      <div className="relative" style={{ width: cubeSize, height: cubeSize, perspective: '1000px' }}>
        <div
          ref={cubeRef}
          className="absolute"
          style={{
            width: cubeSize,
            height: cubeSize,
            transformStyle: 'preserve-3d',
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="absolute border border-[#9CFF33]"
              style={{
                width: cubeSize,
                height: cubeSize,
                transform: transforms[i],
                backfaceVisibility: 'hidden',
              }}
            >
              <img
                src={src}
                alt={`face-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
