import {
  web,
  backend,
  creator,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  devbrains,
} from "../assets";

export const socialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/MShoaibNazami",
    icon: "fa-brands fa-github",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/m-shoaib-nazami",
    icon: "fa-brands fa-linkedin",
  },
  {
    name: "Whatsapp",
    link: "https://wa.me/923076051825",
    icon: "fa-brands fa-whatsapp",
  },
  {
    name: "Email",
    link: "mailto:m.shoaib.nazami@gmail.com",
    icon: "fa-solid fa-envelope",
  },
  {
    name: "Phone",
    link: "tel:+923076051825",
    icon: "fa-solid fa-phone",
  },
];

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "MERN Stack Apps",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend / Full-Stack Developer",
    company_name: "DevBrains",
    icon: devbrains,
    iconBg: "#383E56",
    date: "Sep 2025 - Present",
    points: [
      "Build production SaaS interfaces with React, Next.js and TypeScript, consuming GraphQL APIs backed by NestJS, Prisma and PostgreSQL.",
      "Develop feature-based frontend modules in a DDD-structured codebase using typed GraphQL operations generated through codegen.",
      "Maintain a reusable component library to keep the UI consistent across features.",
      "Deliver work through Jira tickets, pull requests and code review in an Agile team.",
    ],
  },
  {
    title: "Business Development Manager",
    company_name: "DevBrains",
    icon: devbrains,
    iconBg: "#383E56",
    date: "Feb 2024 - Aug 2025",
    points: [
      "Managed lead research and outreach, and the company's presence on LinkedIn, Wellfound and Glassdoor, before returning to engineering with a stronger understanding of client needs.",
    ],
  },
  {
    title: "Junior Web Developer",
    company_name: "DevBrains",
    icon: devbrains,
    iconBg: "#383E56",
    date: "Apr 2023 - Jan 2024",
    points: [
      "Built and maintained responsive client websites in JavaScript and React; fixed bugs and delivered client change requests.",
    ],
  },
];

const projects = [
  {
    name: "Gulshan Estate: Real-Estate Web Platform",
    description:
      "A fast, searchable way for property buyers and agents to browse and enquire about listings, with responsive listing and detail pages, search/filter and an enquiry flow.",
    tags: [
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    ],
    image: "",
    source_code_link: "",
    source_link: "",
  },
  {
    name: "3D Portfolio",
    description:
      "Interactive 3D portfolio website built with React, Three.js and Tailwind CSS.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/MShoaibNazami/3D-Portfolio",
    source_link: "",
  },
  {
    name: "Rangy-e-Noor",
    description: "Web project hosted on GitHub.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/MShoaibNazami/rangy-e-noor",
    source_link: "",
  },
];

export { services, technologies, experiences, projects };
