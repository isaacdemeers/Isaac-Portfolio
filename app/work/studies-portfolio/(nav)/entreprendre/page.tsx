import { notFound } from "next/navigation";
import NavLink from "@/components/NavLink";
import { fontManrope, fontCormorant, fontSpaceMono } from "@/lib/font";
import { getProjectContent } from "@/lib/mdUtils";
import ScrollToTop from "@/components/ScrollToTop";
import { Link } from "lucide-react";




// Page du projet
export default async function ProjectPage() {


    const projectContent = await getProjectContent("entreprendre.md", "studies");
    if (!projectContent) {
        notFound();
    }
    return (
        <main className=" w-4/5  flex flex-col items-start justify-center p-20">
            <section className={`min-w-[500px] flex z-10 flex-col items-center justify-center gap-10 w-full h-[calc(100vh-100px)] p-10 pb-20`}>

                <h1 className={`${fontSpaceMono} text-9xl text-center uppercase`}>Entreprendre,</h1>
                <p className={`${fontManrope.className} text-lg text-center w-full`}>pour le web et les médias numériques.
                </p>



            </section>


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