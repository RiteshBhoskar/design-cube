import CuboidVertical from "@/components/Cuboid";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ShowFeatures from "@/components/ShowFeatures";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4 bg-black text-white">
      <Navbar />
      <Hero />
      <ShowFeatures />
    </main>
  )
}