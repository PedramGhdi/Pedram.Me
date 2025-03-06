import { Github, Linkedin, Youtube } from "lucide-react";

const data = {
  home: {
    name: "Pedram Ghaderi",
    description:
      "I Fix, Optimize & Build #Next_js & #React & #Vue Apps - Powered by #AI",
    cvLink: "#contact",
  },
  sidebar: {
    links: [
      {
        name: "github",
        link: "https://github.com/PedramGhdi",
        icon: Github,
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/pedram-ghaderi/",
        icon: Linkedin,
      }
    ],
  },

  projects: {
    projects: [
      {
        id: 1,
        title: "Exchange Platform",
        description:
          "Exchange Platform v3 is a cutting-edge online marketplace built with Vue.js and Vuex, offering a highly interactive and responsive user experience. This version features an adaptive theme system with multi-theme support—allowing users to seamlessly switch between dark/light modes or region-specific styles—to deliver a personalized look and feel. Powered by a robust back-end developed in Laravel and PHP, and enhanced with real-time communication via Socket connections, Exchange Platform v3 ensures dynamic updates and a smooth, modern trading environment.",
        image: "/projects-imgs/Globiance-Exchange.png",
        previewLink: "https://v3.globiance.com",
      },
      {
        id: 2,
        title: "Rocket",
        description:
          "Rocket is a cross-platform Loyalty CRM App, designed to enhance customer engagement and reward management. The admin panel is powered by React.js with Ant Design, offering an intuitive and feature-rich interface, while Node.js and Redux manage state and backend functionality efficiently. Additionally, the main website is built on WordPress with a fully customized theme, ensuring a unique and tailored brand experience. I also developed a custom React Native application from scratch for one of their projects, providing a seamless mobile experience across both iOS and Android.",
        image: "/projects-imgs/Rocket.png",
        previewLink: "https://Rocket.in.th",
      },
      {
        id: 3,
        title: "Zeeplatform",
        description:
          "Zeeplatform is a professional and visually striking website designed to reflect the vintage aesthetic of the business while delivering a smooth and engaging user experience. Built with Vanilla JavaScript, it features fully customized animations, seamless page transitions, and an elegant interface. The static pages ensure optimal performance, while Swiper integration enhances interactive elements with smooth, touch-friendly sliders. Powered by PHP on the backend, Zeeplatform offers a fast and efficient browsing experience with a handcrafted design approach.",
        image: "/projects-imgs/Zeeplatform.png",
        previewLink: "https://Zeeplatform.com",
      },
      {
        id: 4,
        title: "Medad Streaming Platform",
        description:
          "Medad Streaming Platform is a high-performance streaming service designed to deliver seamless content distribution and user engagement. Built with React and Redux on the frontend, it provides a smooth and dynamic user experience. The backend, powered by Node.js and Express, ensures fast and scalable data processing, while MongoDB efficiently manages content and user data. With a strong focus on real-time interactions and optimized performance, Medad offers a reliable and immersive streaming experience.",
        image: "/projects-imgs/Default.jpg",
        previewLink: "#",
      },
    ],
  },
  technologies: {
    skills: [
      {
        id: 1,
        name: "html",
        src: "/skills/html.svg",
        link: "https://en.wikipedia.org/wiki/HTML",
      },
      {
        id: 2,
        name: "css",
        src: "/skills/css.svg",
        link: "https://en.wikipedia.org/wiki/CSS",
      },
      {
        id: 3,
        name: "javascript",
        src: "/skills/javascript.svg",
        link: "https://en.wikipedia.org/wiki/JavaScript",
      },
      {
        id: 4,
        name: "typescript",
        src: "/skills/typescript.svg",
        link: "https://en.wikipedia.org/wiki/TypeScript",
      },
      {
        id: 5,
        name: "react",
        src: "/skills/react.svg",
        link: "https://en.wikipedia.org/wiki/React_(JavaScript_library)",
      },
      {
        id: 6,
        name: "vueJS",
        src: "/skills/vue.svg",
        link: "https://en.wikipedia.org/wiki/Vue.js",
      },
      {
        id: 7,
        name: "tailwind",
        src: "/skills/tailwind.svg",
        link: "https://en.wikipedia.org/wiki/Tailwind_CSS",
      },
      {
        id: 8,
        name: "nextJS",
        src: "/skills/nextJS.svg",
        link: "https://en.wikipedia.org/wiki/Next.js",
      },
      {
        id: 9,
        name: "nodeJS",
        src: "/skills/nodejs.svg",
        link: "https://en.wikipedia.org/wiki/Node.js",
      },
      {
        id: 10,
        name: "expressJS",
        src: "/skills/expressjs.svg",
        link: "https://en.wikipedia.org/wiki/Express.js",
      },
      {
        id: 11,
        name: "strapi",
        src: "/skills/strapi.svg",
        link: "https://en.wikipedia.org/wiki/Strapi",
      },
      {
        id: 12,
        name: "postgresql",
        src: "/skills/postgresql.svg",
        link: "https://en.wikipedia.org/wiki/PostgreSQL",
      },
      {
        id: 13,
        name: "vitejs",
        src: "/skills/vitejs.svg",
        link: "https://en.wikipedia.org/wiki/Vite_(software)",
      },
      {
        id: 14,
        name: "git",
        src: "/skills/git.svg",
        link: "https://en.wikipedia.org/wiki/Git",
      },
      {
        id: 15,
        name: "docker",
        src: "/skills/docker.svg",
        link: "https://en.wikipedia.org/wiki/Docker_(software)",
      },
      {
        id: 16,
        name: "figma",
        src: "/skills/figma.svg",
        link: "https://en.wikipedia.org/wiki/Figma",
      },
      {
        id: 17,
        name: "firebase",
        src: "/skills/firebase.svg",
        link: "https://en.wikipedia.org/wiki/Firebase",
      },
      {
        id: 18,
        name: "markdown",
        src: "/skills/markdown.svg",
        link: "https://en.wikipedia.org/wiki/Markdown",
      },
      {
        id: 19,
        name: "mongoDB",
        src: "/skills/mongoDB.svg",
        link: "https://en.wikipedia.org/wiki/MongoDB",
      },
    ],
  },
  contact: {
    email: "ghaderipedram16@gmail.com",
    name: "Pedram Ghaderi",
  },
};

export default data;
