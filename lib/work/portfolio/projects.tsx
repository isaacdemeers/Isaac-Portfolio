import cv from "@/public/cv.png";

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
}

const projects: Project[] = [
    {
        id: 1,
        title: 'MMI Calendar',
        description: 'A calendar for the MMI',
        image: cv.src,
        tags: ['NEXT', 'TS', 'SCSS'],
        source: '/work/project/1',
        readTime: 5,
        keywords: '',
        year: 2024,
        month: 12,
        mdFile: 'projet-1.md',
    },
    {
        id: 2,
        title: 'MMI Calendar',
        description: 'A calendar for the MMI',
        image: cv.src,
        tags: ['NEXT', 'TS', 'SCSS'],
        source: '/work/project/2',
        readTime: 25,
        keywords: '',
        year: 2024,
        month: 12,
        mdFile: 'projet-2.md',
    },
    {
        id: 3,
        title: 'PlanIt',
        description: 'A shared planning tool for the MMI',
        image: cv.src,
        tags: ['NEXT', 'TS', 'DOCKER', 'PHP'],
        source: '/work/project/3',
        readTime: 5,
        keywords: '',
        year: 2024,
        month: 12,
        mdFile: 'projet-3.md',
    },
    {
        id: 4,
        title: 'PlanIt',
        description: 'A shared planning tool for the MMI',
        image: cv.src,
        tags: ['NEXT', 'TS', 'DOCKER', 'PHP'],
        source: '/work/project/4',
        readTime: 5,
        keywords: '',
        year: 2024,
        month: 12,
        mdFile: 'projet-4.md',
    }
]

export default projects;