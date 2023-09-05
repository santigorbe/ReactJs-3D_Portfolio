import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "sobreMi",
    title: "Sobre Mí",
  },
  {
    id: "estudios",
    title: "Estudios",
  },
  {
    id: "contacto",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Science",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analysis",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Administracion de empresas y economia",
    company_name: "Secundaria",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Marzo 2016 - Noviembre 2020",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quas ut qui eos similique at, unde numquam vitae assumenda aperiam ea maxime quia quam magnam dolorem ex tenetur. Dicta, labore!",
    ],
  },
  {
    title: "Curso de programacion web",
    company_name: "Nivel 1",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Diciembre 2018",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, architecto, mollitia velit ea labore, voluptas totam voluptate hic nisi ratione maiores minima obcaecati soluta eligendi sint doloremque exercitationem quo itaque quas. Quis illum provident unde hic qui pariatur labore inventore.",
      
    ],
  },
  {
    title: "Curso de programacion web",
    company_name: "Nivel 2",
    icon: shopify,
    iconBg: "#383E56",
    date: "Julio 2019",
    points: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi amet asperiores facilis harum deleniti eaque soluta reprehenderit ea quisquam exercitationem suscipit aut, eos rem optio, numquam quae vel ipsum assumenda iure? Sapiente cum explicabo, libero tempora eveniet maiores. Dolor, quisquam"
      
    ],
  },
  {
    title: "Ingenieria en Sistemas",
    company_name: "Universidad Tecnologica Nacional",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Enero 2022 - Present",
    points: [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia deleniti quasi laborum corrupti optio vitae. Itaque fugiat perferendis quas dolores quod neque molestiae iusto placeat natus pariatur explicabo eligendi quisquam incidunt numquam temporibus, debitis adipisci nobis atque, aliquam eveniet autem!",
    ],
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
    name: "Resumen con IA",
    description:
      "Esta es una pagina web que permite ingresar el link de otro web o documento, y a partir de eso la pagina logra crear un resumen de la informacion que contiene.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Chat-GPT",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };