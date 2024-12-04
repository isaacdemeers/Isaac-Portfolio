"use client";

import NavLink from "@/components/NavLink";
import { fontSpaceMono, fontManrope, fontCormorant } from "@/lib/font";
import Image from "next/image";
import cv from "@/public/cv.png";
import { Download } from "lucide-react";
import VanillaTilt from 'vanilla-tilt';
import { useEffect } from 'react';

export default function Work() {
    useEffect(() => {
        const element = document.querySelector("[data-tilt]") as HTMLElement;
        if (element) {
            VanillaTilt.init(element, {
                max: 25,
                speed: 400
            });
        }
    }, []);

    const handleDownload = () => {
        // Créer un lien pour télécharger le PDF
        const link = document.createElement('a');
        link.href = '/CV_Isaac_Demeerseman.pdf';
        link.download = 'CV_Isaac_Demeerseman.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <main className="h-screen w-screen flex items-center justify-start bg-slate-100 p-10">
            <div className="flex z-10 flex-col items-center justify-center  h-full w-3/5 ">
                <div className={`${fontCormorant.className} text-7xl flex  flex-col  gap-10`}>
                    <NavLink href="/work" active={true} type="back">Go back</NavLink>
                    <div className="flex flex-col items-start justify-start gap-2">
                        <h2 className="text-8xl">Curriculum</h2>
                        <h2 className="text-8xl">Vitae</h2>
                    </div>


                    <ul>
                        <button
                            onClick={handleDownload}
                            className={`${fontSpaceMono.className} text-[1rem] flex items-center gap-2 border-none bg-transparent`}
                        >
                            <Download className="w-4 h-4" />
                            Download CV
                        </button>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center  w-2/5 h-full">
                <div data-tilt data-tilt-scale="1.1" className="w-fit h-4/5 shadow-xl rounded-lg">
                    <Image src={cv} alt="CV Isaac Demeerseman" width={1000} height={1000} className="w-full h-full object-contain rounded-lg" />
                </div>
            </div>
        </main>
    );
}
