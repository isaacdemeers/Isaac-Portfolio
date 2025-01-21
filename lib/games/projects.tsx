import SPWI from "@/public/games/SPWI/cover.png";
import ginventory from "@/public/projects/ginventory-preview.png";

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    source: string;
    keywords: string[];
    year: number;
    month: number;
    finished: boolean;

}

const projects: Project[] = [
    {
        id: 1,
        title: 'SPW I',
        description: "A WWI tower defense game. ",
        image: SPWI.src,
        tags: ['TD', 'WAR', 'WWI'],
        source: '/games/project/1',
        keywords: ['game'],
        year: 2022,
        month: 2,
        finished: true,

    },
]

export default projects;