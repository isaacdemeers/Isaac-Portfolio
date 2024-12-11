import cv from "@/public/cv.png";

const projects = [
    {
        id: 1,
        title: 'MMI Calendar',
        description: 'A calendar for the MMI',
        image: cv.src,
        tags: ['NEXT', 'TS', 'SCSS'],
        source: '/work/project/1',
        readTime: 5,
        keywords: '',

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
    }
]

export default projects;