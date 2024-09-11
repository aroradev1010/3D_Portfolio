export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Tech Art Showcase - Immersive Portfolio with Interactive Elements",
    desc: "Introducing a vibrant and dynamic portfolio showcasing your creative work. The website's striking blue background, combined with captivating 3D elements, creates a visually stunning and immersive experience.",
    subdesc:
      "This portfolio is designed to showcase your unique style and talent. The combination of color, 3D effects, and interactivity will leave a lasting impression on visitors.",
    href: "https://devarora.vercel.app/",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "black",

      border: "0.2px solid #405982",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
      {
        id: 5,
        name: "Prismic",
        path: "/assets/prismic.png",
      },
    ],
  },
  {
    title: "Reimagined Canvas - Real-Time Google Docs Clone",
    desc: "ReimaginedCanvas is a creative and visually stunning frontend project, meticulously crafted with Framer Motion to bring dynamic and fluid animations to life. This repository showcases the art of frontend development, presenting a reimagination of design with a focus on innovation and creativity.",
    subdesc:
      "Explore the seamless blend of technology and aesthetics in this project that stands as a testament to the capabilities of Framer Motion.",
    href: "https://65b1a587b273e30922de7c25--stellar-sunflower-a5ba44.netlify.app/",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      border: "0.2px solid #36201D",
      backgroundColor: "black",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "TeeCraft - Tshirt Designing Platform",
    desc: "Tee Craft is a dynamic web application designed for creative minds who want to bring their T-shirt designs to life. With the power of React.js, Three.js, and Tailwind CSS, Tee Craft enables users to customize T-shirts effortlessly.",
    subdesc:
      "Change colors, upload files, and tweak the front logo design, all within an intuitive interface. Leveraging React for seamless interactivity, Three.js for engaging 3D visuals, and Tailwind CSS for a responsive design, Tee Craft is a testament to the fusion of cutting-edge technologies in web development. Dive into the world of personalized fashion with Tee Craft!.",
    href: "https://thunderous-pegasus-3b214e.netlify.app/",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "black",

      border: "0.2px solid #46753c",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.08,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.55, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
