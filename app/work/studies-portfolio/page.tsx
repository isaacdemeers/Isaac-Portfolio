import { notFound } from "next/navigation";
import NavLink from "@/components/NavLink";
import { fontManrope, fontCormorant, fontSpaceMono } from "@/lib/font";
import { getProjectContent } from "@/lib/mdUtils";
import ScrollToTop from "@/components/ScrollToTop";
import { Link } from "lucide-react";
import StudiesNav from "@/components/studiesNav";

// Page du projet
export default async function ProjectPage() {


    const projectContent = await getProjectContent("main.md", "studies");
    if (!projectContent) {
        notFound();
    }
    return (
        <section className="w-screen h-screen overflow-hidden flex items-start justify-end  ">
            <main className=" w-4/5  h-full flex flex-col items-start justify-center p-20">

                <StudiesNav />


                <section className={`${fontCormorant.className} min-w-[500px] flex z-10 flex-col items-center justify-center gap-10 w-full h-[calc(100vh-100px)] p-10 pb-20`}>

                    <h1 className="text-9xl text-center leading-10">Isaac <br /> <br />  <span className={`${fontSpaceMono.className} text-6xl font-extralight   uppercase`}> Demeerseman</span> </h1>
                    <p className={`${fontManrope.className} text-lg text-center w-full text-slate-600`}> <span className="text-slate-800 font-semibold">Portfolio de compétences</span>  pour l'année 2024 / 2025.
                        <br />
                        3ème année de BUT Métiers du multimédia et de l'internet.
                    </p>


                    <div className=" bg-[#fbeddf] border border-[#f7d6b6] flex items-start flex-col justify-start rounded-2xl w-60 p-4 gap-4 mt-10">
                        <div className="flex items-center gap-2">
                            <Link size={16} className="text-slate-900" />
                            <h2 className={`${fontManrope.className} text-md`}>Liens Rapides</h2>
                        </div>
                        <ul>
                            <NavLink href="/work/studies-portfolio/developper" active={true} type="arrow">DÉVELOPPER</NavLink>
                            <NavLink href="/work/studies-portfolio/entreprendre" active={true} type="arrow">ENTREPRENDRE</NavLink>
                            <NavLink href="/work/studies-portfolio/stage" active={true} type="arrow">STAGE</NavLink>

                        </ul>
                    </div>
                </section>


                {/* <article
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
                </div> */}
            </main>
        </section>
    );
} 