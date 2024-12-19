import { notFound } from "next/navigation";
import projects from "@/lib/work/portfolio/projects";
import NavLink from "@/components/NavLink";
import { fontCormorant } from "@/lib/font";
import { getProjectContent } from "@/lib/mdUtils";
import { Space_Mono } from "next/font/google";

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
        <main className="min-h-screen w-screen flex items-center justify-center bg-slate-100 p-10">
            <div className={`${fontCormorant.className} min-w-[500px] flex z-10 flex-col items-start justify-start gap-10 w-full p-10 bg-red-200`}>
                <NavLink href="/work" active={true} type="back">Go back</NavLink>
                <h1 className="text-8xl">{project.title}</h1>
                <p>{project.description}</p>
                <div
                    className="prose-lg  lg:prose-xl w-full bg-red-50 "
                    dangerouslySetInnerHTML={{ __html: projectContent.contentHtml }}
                />
            </div>
        </main>
    );
} 