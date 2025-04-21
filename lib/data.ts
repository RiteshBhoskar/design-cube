
export const facesData = [
    { id: 1, title: 'Innovative Solutions, Timeless Design', desc: "We blend creativity and technology to deliver designs that stand the test of time.", transform: 'rotateX(0deg) translateZ(125px)' },
    { id: 4, title: 'Driven by Creativity, Defined by Excellence', desc: "Our team is passionate about delivering top-notch solutions that exceed expectations.", transform: 'rotateX(90deg) translateZ(125px)' },
    { id: 3, title: 'Crafting Digital Experiences', desc: "We create engaging and intuitive digital experiences tailored to your audience.", transform: 'rotateX(180deg) translateZ(125px)' },
    { id: 2, title: 'Your Vision, Our Expertise', desc: "Partner with us to bring your ideas to life with precision and creativity.", transform: 'rotateX(-90deg) translateZ(125px)' },
  ]

  interface TeamMember {
    name: string
    role: string
    image: string
    bio?: string
  }
  

  export   const teamMembers: TeamMember[] = [
      {
        name: "Alex Johnson",
        role: "Chief Executive Officer (CEO)",
        image: "/p1.avif",
      },
      {
        name: "Megan Smith",
        role: "Creative Director",
        image: "/p2.avif",
      },
      {
        name: "Micheal Davis",
        role: "Lead Developer",
        image: "/p3.avif",
      },
      {
        name: "Sophia Martinez",
        role: "Head of UX/UI Design",
        image: "/p4.avif",
      },
      {
        name: "Daniel Kim",
        role: "Digital Marketing Manager",
        image: "/p5.avif",
      },
      {
        name: "Emily Brown",
        role: "Senior Project Manager",
        image: "/p6.avif",
      },
    ]
  