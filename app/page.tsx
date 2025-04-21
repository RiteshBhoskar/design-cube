import About from "@/components/About";
import Hero from "@/components/Hero";
import KeyMetrics from "@/components/KeyMetrics";
import MeetTheTeam from "@/components/MeetTheTeam";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4 bg-black text-white">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <KeyMetrics />
      <MeetTheTeam />
      <Projects />
    </main>
  )
}