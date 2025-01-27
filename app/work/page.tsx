"use client";

import NavLink from "@/components/NavLink";
import { fontSpaceMono, fontManrope, fontCormorant } from "@/lib/font";
import { AtSign, Check, Copy, Clock } from 'lucide-react';
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import xequal from "@/public/frame_work.svg";

import projects from "@/lib/work/portfolio/projects";
import { Separator } from "@/components/ui/separator";




export default function Work() {



    const [copied, setCopied] = useState(false);

    const handleCopyEmail = async () => {
        const email = "isaac@demeerseman.com";
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    return (
        <main className="h-screen w-screen flex items-center justify-start  p-10">
            <div className="flex z-10 flex-col items-center justify-center  h-full w-3/5 ">
                <div className={`${fontCormorant.className} text-7xl flex  flex-col  gap-10`}>
                    <NavLink href="/" active={true} type="back">Go back</NavLink>
                    <h2 className="text-8xl">Work</h2>

                    <p className={`${fontManrope.className} text-lg w-full`}>Here you will find everything related <br /> to my <span className="font-bold">professional profile</span>.</p>

                    <ul className={`${fontManrope.className} flex flex-col items-start`}>
                        <li
                            onClick={handleCopyEmail}
                            className="font-normal text-sm flex items-center gap-2 select-text  cursor-pointer group"
                        >
                            <AtSign className="w-4 h-4" />
                            <p className="">isaac@demeerseman.com</p>
                            {copied ? (
                                <Check className="w-4 h-4 text-green-600" />
                            ) : (
                                <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                        </li>
                    </ul>

                    <ul className={`${fontSpaceMono.className} flex flex-col items-start`}>
                        <NavLink href="https://www.linkedin.com/in/isaac-demeerseman-8701b6247/" active={true} type="Link">Linkedin</NavLink>
                        <NavLink href="https://github.com/isaacdemeers" active={true} type="Link">Github</NavLink>
                        <NavLink href="/work/studies-portfolio" active={false} type="arrow">Studies portfolio</NavLink>
                        <NavLink href="/work/cv" active={true} type="arrow">CV</NavLink>




                    </ul>
                </div>
            </div>

            <div className="flex z-10 flex-col group items-center justify-center h-full w-2/5  rounded-xl relative">
                <div className="relative flex w-3/4 items-center justify-center group-hover:blur-md group-hover:opacity-20 group-hover:scale-90 [transition:all_0.4s_cubic-bezier(0.76,0,0.24,1)]">
                    <Image src={xequal} alt="X Equal" className=" rotate-90  " />

                    <div className="absolute w-full h-fit flex z-20 items-center justify-center flex-col p-6">
                        <p className={`${fontManrope.className} text-sm text-center font-bold text-slate-900 uppercase`}>[ Work ]</p>

                        <h2 className={`${fontSpaceMono.className} text-3xl text-center text-slate-900`}>Projects</h2>
                        {projects.length > 0 ? <p className={`${fontManrope.className} text-sm text-center mt-2  text-slate-500`}>{projects.length} projects</p> : <p className={`${fontManrope.className} text-xs text-center mt-2  text-slate-500 uppercase`}>No projects yet.</p>}

                    </div>

                </div>

                <section className=" w-full h-full absolute transition-all duration-700">
                    <ul className="h-full w-full relative flex flex-col items-end justify-start p-4 pr-10 gap-4 overflow-scroll">

                        {projects.map((item, index) => (

                            <li key={index} className=" p-2 cursor-pointer relative origin-right rounded-xl w-72 h-fit bg-slate-100 bg-opacity-50 backdrop-blur-sm border-2 border-slate-200  translate-x-5 opacity-0 blur-lg group-hover:translate-x-0 group-hover:scale-100 scale-90 group-hover:opacity-100 group-hover:blur-0 hover:bg-slate-200 [transition:all_0.2s_cubic-bezier(0.76,0,0.24,1)]">
                                <div className="absolute top-0 -translate-x-full w-20 h-full flex flex-col items-end justify-start ">
                                    {/* <p className={`${fontSpaceMono.className} text-3xl text-slate-900 text-end font-bold uppercase pr-4`}>{item.id.toString().padStart(2, '0')}</p> */}
                                    <p className={`${fontSpaceMono.className} text-xs text-slate-900 text-end uppercase -rotate-90  rounded-md pr-6 pt-2`}>{item.month}.{item.year}</p>
                                </div>
                                <Link href={`/work/project/${item.id}`} className="flex items-start  justify-center flex-col" >
                                    <h3 className={` ${fontManrope.className} font-black text-lg`}>{item.title}</h3>
                                    <div className="flex items-center justify-start gap-2">
                                        <h4 className="text-gray-600 flex items-center justify-start gap-1"><Clock size={12} /> {item.readTime}</h4>
                                        <Separator orientation="vertical" className="h-3 w-[1px] bg-slate-300" />
                                        <h4 className="text-gray-600 flex text-xs w-full "> {item.tags.join(', ')}</h4>
                                    </div>


                                    <figure className="w-full max-h-32 overflow-hidden rounded-md mt-2">
                                        <Image src={item.image} width={200} height={200} alt="project image" className="w-full h-full  object-cover" />

                                    </figure>
                                </Link>
                            </li>


                        ))}

                        <li className="flex items-center justify-center p-2 cursor-default relative origin-right rounded-xl w-72 h-fit  bg-opacity-50 backdrop-blur-sm border-2 border-slate-200  translate-x-5 opacity-0 blur-lg group-hover:translate-x-0 group-hover:scale-100 scale-90 group-hover:opacity-100 group-hover:blur-0 bg-slate-200 [transition:all_0.2s_cubic-bezier(0.76,0,0.24,1)]">

                            <p className="text-sm text-center">My other projects are currently being added and will be available soon</p>
                        </li>
                    </ul>
                </section>




            </div>
        </main>
    );
}
