import planit from "@/public/projects/planit-preview.png";
import ginventory from "@/public/projects/ginventory-preview.png";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    source: string;
    readTime: number;
    keywords: string;
    year: number;
    month: number;
    mdFile: string;
    duration: number;
    finished: boolean;

}

const projects: Project[] = [
    {
        id: 1,
        title: 'PlanIt',
        description: "A Progressive Web Application for Event Management and Collaboration",
        image: planit.src,
        tags: ['NEXTJS', 'DOCKER', 'PHP'],
        source: '/work/project/1',
        readTime: 5,
        keywords: '',
        year: 2024,
        month: 12,
        mdFile: 'planit.md',
        duration: 4,
        finished: true,

    },

    {
        id: 2,
        title: 'Ginventory',
        description: "A remake of the game 'Ginventory' website. For training purpose only.",
        image: ginventory.src,
        tags: ['NEXTJS', 'TAILWIND', 'TYPESCRIPT'],
        source: '/work/project/2',
        readTime: 1,
        keywords: '',
        year: 2024,
        month: 12,
        mdFile: 'ginventory.md',
        duration: 1,
        finished: true,

    },

    
    // {
    //     id: 1,
    //     title: 'MMI Calendar',
    //     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    //     image: cv.src,
    //     tags: ['NEXT', 'TS', 'SCSS'],
    //     source: '/work/project/1',
    //     readTime: 5,
    //     keywords: '',
    //     year: 2024,
    //     month: 12,
    //     mdFile: 'projet-1.md',
    //     duration: '2',
    //     finished: false,
    // },
    // {
    //     id: 2,
    //     title: 'MMI Calendar',
    //     description: 'A calendar for the MMI',
    //     image: cv.src,
    //     tags: ['NEXT', 'TS', 'SCSS'],
    //     source: '/work/project/2',
    //     readTime: 25,
    //     keywords: '',
    //     year: 2024,
    //     month: 12,
    //     mdFile: 'projet-2.md',
    //     duration: '2',
    //     finished: true,
    // },
    // {
    //     id: 3,
    //     title: 'PlanIt',
    //     description: 'A shared planning tool for the MMI',
    //     image: cv.src,
    //     tags: ['NEXT', 'TS', 'DOCKER', 'PHP'],
    //     source: '/work/project/3',
    //     readTime: 5,
    //     keywords: '',
    //     year: 2024,
    //     month: 12,
    //     mdFile: 'projet-3.md',
    //     duration: '2',
    //     finished: true,
    // },
    // {
    //     id: 4,
    //     title: 'PlanIt',
    //     description: 'A shared planning tool for the MMI',
    //     image: cv.src,
    //     tags: ['NEXT', 'TS', 'DOCKER', 'PHP'],
    //     source: '/work/project/4',
    //     readTime: 5,
    //     keywords: '',
    //     year: 2024,
    //     month: 12,
    //     mdFile: 'projet-4.md',
    //     duration: '2',
    //     finished: true,
    // }
]

export default projects;