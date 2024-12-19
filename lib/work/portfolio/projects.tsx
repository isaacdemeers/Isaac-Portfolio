import cv from "@/public/project1.webp";

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
        title: 'MMI Calendar',
        description: "This is only a exemple of a project's page. The data below is only the README.md file of the project. Real data will be added later.",
        image: cv.src,
        tags: ['NEXTJS', 'DOCKER', 'PHP'],
        source: '/work/project/1',
        readTime: 5,
        keywords: '',
        year: 2024,
        month: 12,
        mdFile: 'projet-1.md',
        duration: 2,
        finished: false,
    }
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