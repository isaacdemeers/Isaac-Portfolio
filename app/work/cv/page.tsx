

import projects from "@/lib/work/portfolio/projects";
import { getProjectContent } from "@/lib/mdUtils";
import ScrollToTop from "@/components/ScrollToTop";
import NavLink from "@/components/NavLink";
import { fontSpaceMono, fontManrope, fontCormorant } from "@/lib/font";
import TiltCv from "@/components/TiltCv";
import DLButton from "@/components/DLButton";
import { ArrowDown } from "lucide-react";

import ShowScroll from "@/components/showScroll";


// Générer les paramètres statiques pour chaque projet
export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

// Fonction pour récupérer un projet par son ID
function getProjectById(id: string) {
    return projects.find((project) => project.id.toString() === id);
}

// Page du projet
export default async function ProjectPage({ params }: { params: { id: string } }) {


    const projectContent = await getProjectContent('cv.md', 'cv');





    return (
        <main className="min-h-screen w-screen flex flex-col items-start justify-center">






            <main className="h-screen w-screen flex items-center justify-start bg-slate-100 p-10">
                <div className="flex z-10 flex-col items-center justify-center  h-full w-3/5 ">
                    <div className={`${fontCormorant.className} text-7xl flex  flex-col  gap-10`}>
                        <NavLink href="/work" active={true} type="back">Go back</NavLink>
                        <div className="flex flex-col items-start justify-start gap-2">
                            <h2 className="text-8xl">Curriculum</h2>
                            <h2 className="text-8xl">Vitae</h2>
                        </div>

                        <DLButton />

                        <section className=" w-fit flex items-center justify-center">
                            <h1 className={`${fontManrope.className} text-sm font-light flex items-center justify-center gap-2 opacity-50`}>Last updated <span className="w-px p-px h-px flex items-center justify-center bg-slate-900 rounded-full"></span> 08.01.2025</h1>
                        </section>
                        <ShowScroll />

                    </div>
                </div>

                <div className="flex flex-col items-center justify-center  w-2/5 h-full">
                    <TiltCv />
                </div>
            </main>


            <article
                className={`
                        ${fontManrope.className} 
                        prose prose-lg lg:prose-xl 
                        prose-a:text-blue-600 prose-a:no-underline
                        hover:prose-a:text-blue-800 hover:prose-a:underline
                        prose-headings:text-slate-900
                        w-full
                        p-20
                    `}
                dangerouslySetInnerHTML={{ __html: projectContent.contentHtml }}
            />
            <ScrollToTop />

            <div className="w-full h-40 flex items-start flex-col justify-center px-20  mt-10">
                <NavLink href="/work" active={true} type="back">Go back</NavLink>
            </div>
        </main>
    );
} 