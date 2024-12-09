"use client";

import NavLink from "@/components/NavLink";
import { fontSpaceMono, fontManrope, fontCormorant } from "@/lib/font";
import { AtSign, Check, Copy } from 'lucide-react';
import { useState } from 'react';
import Image from "next/image";
import xequal from "@/public/frame_work.svg";



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
        <main className="h-screen w-screen flex items-center justify-start bg-slate-100 p-10">
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
                        <NavLink href="/work/cv" active={true} type="arrow">CV</NavLink>
                    </ul>
                </div>
            </div>

            <div className="flex z-10 flex-col group items-end justify-center h-full w-2/5  rounded-xl relative">
                <div className="relative flex w-1/3 items-center justify-center group-hover:blur-md group-hover:opacity-50 group-hover:scale-90 group-hover:translate-x-7 transition-all duration-700">
                    <Image src={xequal} alt="X Equal" className="" />

                    <div className="absolute w-full h-fit flex items-start justify-center flex-col p-6">
                        <p className={`${fontSpaceMono.className} text-lg uppercase`}>Album</p>
                        <p className={`${fontSpaceMono.className} text-lg uppercase`}>Album</p>
                        <p className={`${fontSpaceMono.className} text-lg uppercase`}>Album</p>

                    </div>

                </div>

                <section className=" w-full h-full absolute transition-all duration-700">
                    <ul className="bg-purple-400 h-full w-full flex items-center justify-end pr-10 ">
                        <li className="p-4 bg-slate-700 rounded-xl w-80">fsdfds</li>
                    </ul>
                </section>



            </div>
        </main>
    );
}
