import About from "@/components/About";
import Awards from "@/components/Awards";
import CustomerThoughts from "@/components/CustomerThoughts";
import Hero from "@/components/Hero";
import KeyMetrics from "@/components/KeyMetrics";
import MeetTheTeam from "@/components/MeetTheTeam";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4 bg-black text-white">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <KeyMetrics />
      <MeetTheTeam />
      <Awards />
      <CustomerThoughts />
      <Services />
      <Projects />
    </main>
  )
}