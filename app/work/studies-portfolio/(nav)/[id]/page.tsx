import { notFound } from "next/navigation";
import NavLink from "@/components/NavLink";
import { fontManrope, fontCormorant, fontSpaceMono } from "@/lib/font";
import { getProjectContent } from "@/lib/mdUtils";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";
import Tag from "@/components/Tag";
import { BadgeInfo } from "lucide-react";

// Générer les paramètres statiques pour chaque projet
export async function generateStaticParams() {
    return ['1', '2', '501', '502'].map((id) => ({
        id,
    }));
}

// Fonction pour récupérer un projet par son ID
// function getProjectById(id: string) {
//     return projects.find((project) => project.id.toString() === id);
// }

// Page du projet
export default async function ProjectPage({ params }: { params: { id: string } }) {
    

   const projectContent = await getProjectContent(params.id + '.md', "studies/others");
    if (!projectContent) {
        notFound();
    }

    return (
        <main className="min-h-screen w-4/5 flex flex-col items-start justify-center p-20">

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

        </main>
    );
} 