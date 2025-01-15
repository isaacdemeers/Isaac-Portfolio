import { notFound } from "next/navigation";
import NavLink from "@/components/NavLink";
import { fontManrope, fontCormorant, fontSpaceMono } from "@/lib/font";
import { getProjectContent } from "@/lib/mdUtils";
import ScrollToTop from "@/components/ScrollToTop";
import Link from "next/link";




// Page du projet
export default async function ProjectPage() {


    const projectContent = await getProjectContent("main.md", "studies");
    if (!projectContent) {
        notFound();
    }
    return (
        <main className="min-h-screen w-screen flex flex-col items-start justify-center p-20">





            <NavLink href="/work" active={true} type="back">Go back</NavLink>

            <section className={`${fontCormorant.className} min-w-[500px] flex z-10 flex-col items-center justify-center gap-10 w-full h-[calc(100vh-100px)] p-10 pb-20`}>

                <h1 className="text-7xl text-center">Isaac Demeerseman</h1>
                <p className={`${fontManrope.className} text-lg text-center w-full`}>Portfolio de compétences</p>

                <ul>
                    <NavLink href="/work/studies-portfolio" active={true} type="arrow">SAÉ 501</NavLink>
                    <NavLink href="/work/studies-portfolio" active={true} type="arrow">SAÉ 502</NavLink>

                </ul>
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

            <div className="w-full h-40 flex items-start flex-col justify-center  mt-10">
                <NavLink href="/work" active={true} type="back">Go back</NavLink>
            </div>
        </main>
    );
} 