"use client"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP);

export default function Navbar() {


    return (
        <header className="z-[999] fixed top-0 w-fit mt-5 h-fit  bg-black flex items-center justify-center rounded-full text-white border border-white">
            <nav className="flex items-center w-full h-full gap-8 px-7 py-2">
                <button>Home</button>
                <button>About</button>
                <button>Services</button>
                <button>Projects</button>
                <button>Contact</button>
                <button className="w-full rounded-full h-full bg-white text-black">FREE Remix</button>
            </nav>
        </header>
    )
}

//9CFF33