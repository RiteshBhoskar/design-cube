import About from "@/components/About";
import Hero from "@/components/Hero";
import MeetTheTeam from "@/components/MeetTheTeam";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4 bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <MeetTheTeam />
    </main>
  )
}