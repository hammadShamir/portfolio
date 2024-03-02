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