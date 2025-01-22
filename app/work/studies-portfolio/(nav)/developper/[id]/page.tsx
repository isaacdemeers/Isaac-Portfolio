import { notFound } from "next/navigation";
import projects from "@/lib/work/portfolio/projects";
import NavLink from "@/components/NavLink";
import { fontManrope, fontCormorant, fontSpaceMono } from "@/lib/font";
import { getProjectContent } from "@/lib/mdUtils";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";
import Tag from "@/components/Tag";
import { BadgeInfo } from "lucide-react";

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
    const project = getProjectById(params.id);

    if (!project) {
        notFound();
    }

    const projectContent = await getProjectContent(project.mdFile);

    return (
        <main className="min-h-screen w-4/5 flex flex-col items-start justify-center p-20">






            <div className={`${fontCormorant.className} min-w-[500px] flex z-10 flex-col items-center justify-center gap-10 w-full h-[calc(100vh-100px)] p-10 pb-20`}>
                <h1 className="text-8xl">{project.title}</h1>
                <p className={`${fontManrope.className} text-lg text-center`}>{project.description}</p>

                <div className="flex flex-col gap-6 items-start justify-center mt-4">
                    <ul className={`${fontSpaceMono.className} flex flex-row gap-2`}>
                        <li className={`${fontSpaceMono.className} text-sm`}>Developed with</li>

                        {project.tags.map((tag) => (
                            <li className="text-sm px-2 cursor-default bg-slate-900 text-white rounded-lg" key={tag}>{tag}</li>
                        ))}
                    </ul>
                    <ul className={`${fontSpaceMono.className} flex flex-col gap-2`}>
                        {project.finished ? (
                            <>
                                <li className={`${fontSpaceMono.className} text-sm`}>Ended : {project.month}.{project.year}</li>
                                <li className={`${fontSpaceMono.className} text-sm`}>Duration : {project.duration} month{project.duration > 1 ? 's' : ''}</li>
                                <Tag text="Finished" className="w-fit" />
                            </>
                        ) : (
                            <Tag text="In progress" className="w-fit" />
                        )}

                    </ul>
                    <p className={`${fontSpaceMono.className} text-sm`}>{project.readTime} min read</p>


                    <div className=" bg-slate-200 border border-slate-300 flex items-start flex-col justify-start rounded-2xl p-4 gap-2 mt-10">
                        <div className="flex items-center gap-2">
                            <BadgeInfo size={16} className="text-slate-900" />
                            <h2 className={`${fontManrope.className} text-md`}>Note</h2>
                        </div>
                        <p className={`${fontSpaceMono.className} text-sm`}>Images will be added soon</p>
                    </div>

                </div>


            </div>
            <article
                className={`
                        ${fontManrope.className} 
                        prose prose-lg lg:prose-xl 
                        prose-a:text-blue-600 prose-a:no-underline
                        hover:prose-a:text-blue-800 hover:prose-a:underline
                        prose-headings:text-slate-900
                        w-full
                    `}
                dangerouslySetInnerHTML={{ __html: projectContent.contentHtml }}
            />
            <ScrollToTop />

            <div className="w-full h-40 flex items-start flex-col justify-center  mt-10">
                <NavLink href="/work" active={true} type="back">Go back</NavLink>
            </div>
        </main>
    );
} 