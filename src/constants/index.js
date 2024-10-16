import {
  backend, creator, javascript,
  html, css,
  tailwind,
  git, php,
  mysql, mui,
} from "../assets";

export const socialLinks = [
  {
    name: "Whatsapp",
    link: "https://web.whatsapp.com/send?phone=923006673009",
    icon: "fa-brands fa-whatsapp",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/moizkhan6",
    icon: "fa-brands fa-facebook",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/m_moiz_k/",
    icon: "fa-brands fa-instagram",
  },
  {
    name: "GitHub",
    link: "https://github.com/MShoaibNazami",
    icon: "fa-brands fa-github",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/moiz-khan-developer/",
    icon: "fa-brands fa-linkedin",
  },
  {
    name: "Google",
    link: "mailto:dev.moiz.khan@gmail.com",
    icon: "fa-brands fa-google",
  },
  {
    name: "Phone",
    link: "tel:+923006673009",
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
    title: "Game Developement",
    icon: creator,
  },
  {
    title: "Responsive Games",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Material UI",
    icon: mui,
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Animals Transform",
    description:
      "Animal Shape Transforming Race offers an exhilarating and captivating race where you must morph your animal to match the terrain, boosting your speed and leaving competitors in the dust. Step into a world of endless fun where every transformation brings laughter and excitement. 🌟",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "ShaderGraph",
        color: "pink-text-gradient",
      },
    ],
    image:"" ,
    source_code_link: "",
    source_link: "https://play.google.com/store/apps/details?id=com.my.animal.transform.race.game/",
  },
];

export { services, technologies, testimonials, projects };
