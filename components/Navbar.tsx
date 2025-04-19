"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP);

export default function Navbar() {

    useGSAP(() => {
        gsap.set(".navbar", {
            autoAlpha: 0,
            y: -100,
        })
        gsap.to(".navbar", {
            autoAlpha: 1,
            y: 0,
            ease: "power1.out",
        })
    })

    return (
        <header className="z-[999] fixed top-0 w-fit mt-5 h-fit bg-black flex items-center justify-center rounded-full text-white navbar opacity-0">
            <nav className="hidden sm:flex items-center text-lg py-1.5 px-1.5 text-[#CCCCCC] w-full h-full">
                <button className="rounded-full h-full px-5 py-1 border text-white border-[#9CFF33] ">Home</button>
                <button className="rounded-full h-full px-5 py-1 transition-colors  hover:text-[#9CFF33]">About</button>
                <button className="rounded-full h-full px-5 py-1 transition-colors  hover:text-[#9CFF33]">Services</button>
                <button className="rounded-full h-full px-5 py-1 transition-colors  hover:text-[#9CFF33]">Projects</button>
                <button className="rounded-full h-full px-5 py-1 transition-colors  hover:text-[#9CFF33]">Contact</button>
                <button className="rounded-full h-full px-5 py-1 bg-white transition-all duration-700 hover:bg-[#9CFF33] text-black">FREE Remix</button>
            </nav>
        </header>
    )
}

//9CFF33