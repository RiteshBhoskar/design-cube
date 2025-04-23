
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

    export const awardsData = [
      {
        id: 1,
        title: "CSS Nectar - Site of the Day",
        date: "Nov 16, 2023",
        description:
          "Design*Cube's website was recognized as the 'Site of the Day' by CSS Nectar, highlighting our commitment to excellence in web design.",
      },
      {
        id: 2,
        title: "Web Guru Awards",
        date: "Oct 11, 2023",
        description:
          "Design*Cube received the Web Guru Award for outstanding achievement in web design, showcasing our design expertise.",
      },
      {
        id: 3,
        title: "Mobile Excellence Awards",
        date: "Sep 28, 2023",
        description:
          "Design*Cube's dedication to providing the best mobile user experiences was acknowledged with a Mobile Excellence Award.",
      },
      {
        id: 4,
        title: "The Drum Awards",
        date: "May 21, 2023",
        description:
          "Design*Cube was honored with The Drum Award for Creative Technology, recognizing our innovative approaches to digital creativity.",
      },
      {
        id: 5,
        title: "International Design Awards",
        date: "Mar 15, 2023",
        description:
          "Design*Cube received an International Design Award for excellence in interactive media and web design.",
      },
      {
        id: 6,
        title: "Awwwards - Honorable Mention",
        date: "Feb 03, 2023",
        description:
          "Design*Cube received an Honorable Mention from Awwwards for its blend of creativity, usability, and content quality.",
      },
      {
        id: 7,
        title: "Creativepool Annual",
        date: "Jan 10, 2023",
        description:
          "Design*Cube was shortlisted in the Creativepool Annual for Digital Innovation, celebrating standout work in digital design.",
      },
    ]
    
    export const customerData = [
      {
        id: 1,
        name: "Sarah Thompson",
        title: "Marketing Director, Bright Ideas Inc.",
        image: "/c1.avif",
        description:"Working with DesignCube was a game-changer for our brand. Their innovative design solutions and attention to detail helped us create a stunning website that truly represents our values. We’ve seen a significant boost in user engagement and conversions since the redesign.",
      },
      {
        id: 2,
        name: "James Williams",
        title: "CEO, TechWorld Solutions",
        image: "/c2.avif",
        description:"DesignCube's expertise in SEO optimization and digital marketing has dramatically improved our online presence. Their strategic approach and deep understanding of our industry have driven more traffic to our site and increased our sales by 25%.",
      },
      {
        id: 3,
        name: "Emily Davis",
        title: "Founder, Artisan Crafts",
        image: "/c3.avif",
        description:"The team at DesignCube exceeded our expectations with their creative branding and graphic design services. They captured the essence of our brand perfectly and delivered beautiful, cohesive visuals that have received fantastic feedback from our customers.",
      },
      {
        id: 4,
        name: "Micheal Brown",
        title: "Product Manager, Innovatech",
        image: "/c4.avif",
        description:"DesignCube's UX/UI design expertise transformed our app into a user-friendly and engaging platform. Their collaborative approach and commitment to excellence were evident in every stage of the project. We couldn't be happier with the results.",
      },
    ]
    

    export const servicesData = [
      {
        id: 1,
        title: "Web Design",
        description:
          "Crafting visually stunning and user-friendly websites tailored to your brand’s identity and goals.",
      },
      {
        id: 2,
        title: "SEO Optimization",
        description:
          "Enhancing your website’s visibility and ranking on search engines through strategic keyword integration and technical optimization.",
      },
      {
        id: 3,
        title: "UX/UI Design",
        description:
          "Creating intuitive and engaging user experiences and interfaces that prioritize user satisfaction and ease of use.",
      },
      {
        id: 4,
        title: "Branding",
        description:
          "Building a cohesive and strong brand identity that resonates with your target audience and sets you apart from the competition.",
      },
      {
        id: 5,
        title: "Graphic Design",
        description:
          "Designing compelling and creative visuals for print and digital media to communicate your message effectively.",
      },
      {
        id: 6,
        title: "E-commerce Solutions",
        description:
          "Developing robust and scalable online stores that drive sales and provide seamless shopping experiences for your customers.",
      },
      {
        id: 7,
        title: "Mobile App Design",
        description:
          "Designing seamless and functional mobile applications that offer an optimal user experience on any device.",
      },
      {
        id: 8,
        title: "Digital Marketing",
        description:
          "Strategizing and executing comprehensive digital marketing campaigns to boost your online presence and engagement.",
      },
      {
        id: 9,
        title: "Content Creation",
        description:
          "Crafting engaging and relevant content, including blogs, videos, and graphics, to connect with your audience and enhance your brand story.",
      },
      {
        id: 10,
        title: "Social Media Management",
        description:
          "Managing and growing your social media presence effectively to engage with your audience and build your brand.",
      },
      {
        id: 11,
        title: "Video Production",
        description:
          "Creating captivating and professional videos for marketing, branding, and storytelling purposes.",
      },
      {
        id: 12,
        title: "Consulting Services",
        description:
          "Offering expert advice and strategies to enhance your digital footprint and achieve your business objectives.",
      },
    ]
    

    export const projectsData = {
      m: [
        {
          id: 1,
          image: "m1.avif"
        },
        {
          id: 2,
          image: "m2.avif"
        },
        {
          id: 3,
          image: "m3.avif"
        },
        {
          id: 4,
          image: "m4.avif"
        },
        {
          id: 5,
          image: "m5.avif"
        },
      ],
      t: [
        {
          id: 1,
          image: "t1.avif"
        },
        {
          id: 2,
          image: "t2.avif"
        },
        {
          id: 3,
          image: "t3.avif"
        },
        {
          id: 4,
          image: "t4.avif"
        },
        {
          id: 5,
          image: "t5.avif"
        },
      ],
      b: [
        {
          id: 1,
          image: "b1.avif"
        },
        {
          id: 2,
          image: "b2.avif"
        },
        {
          id: 3,
          image: "b3.avif"
        },
        {
          id: 4,
          image: "b4.avif"
        },
        {
          id: 5,
          image: "b5.avif"
        },
      ],
    };
    