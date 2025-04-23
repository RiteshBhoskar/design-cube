import { projectsData } from "@/lib/data";
import { Marquee } from "./magicui/marquee";


export default function Projects() {
    return (
        <section className="bg-black text-white h-full w-full overflow-clip my-20 -mx-4 font-inter">
        <h3 className="text-white h-screen text-5xl w-full flex justify-center md:text-[150px] font-bold">
          OUR*PROJECTS
        </h3>
        <div className="flex flex-col w-full space-x-2">
        <Marquee className="[--duration:75s] h-70 w-full">
            {projectsData.t.map((image) => (
                <img src={image.image} alt="project images" key={image.id} />
            ))}
        </Marquee>
        <Marquee reverse  className="[--duration:75s] h-70 w-full">
            {projectsData.m.map((image) => (
                <img src={image.image} alt="project images" key={image.id} />
            ))}
        </Marquee>
        <Marquee  className="[--duration:75s] h-70 w-full">
            {projectsData.b.map((image) => (
                <img src={image.image} alt="project images" key={image.id} />
            ))}
        </Marquee>
        </div>
        </section>
    )
}