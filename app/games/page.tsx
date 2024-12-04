"use client";

import NavLink from "@/components/NavLink";
import { fontSpaceMono, fontManrope, fontCormorant, fontNabla, fontRubik80sFade } from "@/lib/font";

export default function Games() {


    return (
        <main className="h-screen w-screen flex items-center justify-start bg-slate-100 p-10">
            <div className="flex z-10 flex-col items-center justify-center  h-full w-3/5 ">
                <div className={`${fontCormorant.className} text-7xl flex  flex-col  gap-10`}>
                    <NavLink href="/" active={true} type="back">Go back</NavLink>
                    <h2 className={`${fontRubik80sFade.className} text-8xl`}>Games</h2>

                    <div className="flex flex-col items-center justify-start w-full ">
                        <p className={`${fontManrope.className} text-lg w-full`}>Here you'll find all the games I've <br /> developed in my spare time.</p>
                    </div>


                    <ul className={`${fontSpaceMono.className} flex flex-col items-start`}>
                        <NavLink href="https://scratch.mit.edu/users/-pAc-/" active={true} type="arrow">Scratch</NavLink>
                    </ul>
                </div>
            </div>

            <div className="flex z-10 flex-col items-center justify-center  h-full w-2/5 bg-slate-100 rounded-xl"></div>
        </main>
    );
}
