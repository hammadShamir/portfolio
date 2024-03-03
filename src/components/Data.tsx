import { ReactElement } from "react";

import { MdWeb } from "react-icons/md";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { MdAddBusiness } from "react-icons/md";
import { SiWebpack } from "react-icons/si";


interface projectData {
    name: string,
    url: string
    img: string
}
interface serviceData {
    icon: ReactElement,
    title: string,
    desc: string
}
interface qualificationData {
    date: string,
    title: string,
    desc: string
    designation?: string
}

interface skillsData {
    name: string,
    img: string
}


export const projects: projectData[] = [
    {
        name: "Ethical Node",
        url: "https://www.ethicalnode.com/",
        img: "ethicalNode.png"
    },
    {
        name: "Esthetix Dental Center",
        url: "http://www.esthetixdentalcenters.com/",
        img: "esthetix.png"
    },
    {
        name: "Hostelow",
        url: "https://www.hostelow.com/",
        img: "hostelow.png"
    },
    {
        name: "Vuoto",
        url: "https://www.vuoto.ca/",
        img: 'vuoto.png'
    },
    {
        name: "Analog Mutations",
        url: "https://analogmutations.com/",
        img: "analog.png"
    },
];

export const service: serviceData[] = [
    {
        icon: <MdWeb className="text-4xl text-DeepNavy-blue group-hover:text-DeepNavy-blue" />,
        title: "Custom Website Development",
        desc: "Crafting unique websites with a focus on responsive design and user-centric experiences."
    },
    {
        icon: <MdAddBusiness className="text-4xl text-DeepNavy-blue group-hover:text-DeepNavy-blue" />,
        title: "E-commerce & Business Platform",
        desc: "Building secure and feature-rich e-commerce platforms and robust business platforms."
    },
    {
        icon: <SiWebpack className="text-4xl text-DeepNavy-blue group-hover:text-DeepNavy-blue" />,
        title: "Content Management Systems (CMS)",
        desc: "Simplifying content management through user-friendly custom CMS solutions."
    },
    {
        icon: <BsDatabaseFillCheck className="text-4xl text-DeepNavy-blue group-hover:text-DeepNavy-blue" />,
        title: "API Development & Database Design",
        desc: "Optimizing applications with robust APIs development and efficient database design"
    },
]

export const education: qualificationData[] = [
    {
        date: "JAN 2020 - DEC 2023",
        title: "Bachelors in Software Engineering",
        designation: "University Of Sindh",
        desc: "I earned my Bachelor's in Software Engineering, gaining expertise in programming, software development, and advanced system design. Beyond coursework, I've applied these skills to real-world projects, fostering a commitment to innovative contributions in the dynamic IT landscape."
    },
    {
        date: "JAN 2021 - DEC 2022",
        title: "Full Stack Web Development",
        designation: "Udemy",
        desc: "During my MERN Stack Development journey, I mastered building robust web applications with MongoDB, Express.js, React.js, and Node.js. The course equipped me to craft visually compelling interfaces using Bootstrap, Tailwind CSS, and Material-UI. Exploring Next.js, I gained insights into implementing server-side rendering for optimal performance and improved SEO. This experience enhanced not only my technical skills but also deepened my understanding of modern web development practices."
    }
]
export const experiences: qualificationData[] = [
    {
        date: "APR 2023 - DEC 2023",
        designation: "Analog Mutations",
        title: "Associate Software Engineer",
        desc: "As an Associate Software Engineer at Analog Mutations, I enhanced my understanding of web technologies, including React JS, Next JS, Node.js, Express.js, and MongoDB. Additionally, I gained proficiency in implementing JWT authentication for advanced security and contributed to the creation of RESTful APIs while seamlessly integrating middleware. Throughout my work, I consistently maintained a cohesive development approach, prioritizing the production of clean and maintainable code."
    },
    {
        date: "OCT 2022 - MAR 2023",
        designation: "AliTech Solutions",
        title: "Frontend Developer",
        desc: "While holding the position of Frontend Developer at AliTech Solutions, I expanded my knowledge in frontend technologies. I focused on mastering responsiveness, achieving pixel-perfect designs, implementing server-side rendering, and delving into frameworks like Next JS, React, and various CSS frameworks such as Tailwind, Material UI, and Bootstrap. In my projects, I applied these technologies to elevate the user interface, ensuring an exceptional user experience."
    }
]

export const skills: skillsData[] = [
    {
        name: "MongoDB",
        img: "/img/Skills/mongodb.png"
    },
    {
        name: "Node JS",
        img: "/img/Skills/nodejs.png"
    },
    {
        name: "Express JS",
        img: "/img/Skills/express.png"
    },
    {
        name: "React JS",
        img: "/img/Skills/react.png"
    },
    {
        name: "Next JS",
        img: "/img/Skills/nextjs.png"
    },
    {
        name: "JavaScript",
        img: "/img/Skills/js.png"
    },
    {
        name: "TypeScript",
        img: "/img/Skills/ts.png"
    },
    {
        name: "Tailwind CSS",
        img: "/img/Skills/tailwind.png"
    },
    {
        name: "Material UI",
        img: "/img/Skills/mui.png"
    },
    {
        name: "Bootstrap ",
        img: "/img/Skills/bootstrap.png"
    },
    {
        name: "HTML5",
        img: "/img/Skills/html.png"
    },
    {
        name: "CSS3",
        img: "/img/Skills/css.png"
    },

]

