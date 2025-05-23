'use client'
import Link from 'next/link';
import GameCanvas from './game/GameCanvas';
import { fontRadley, fontSpaceMono, fontCormorant, fontManrope } from '@/lib/font';
import NavLink from '@/components/NavLink';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

export default function Home() {


  return (
    // <main className="h-screen w-screen flex flex-col items-center justify-center bg-slate-100 overflow-hidden">
    //   <header className={`${fontRadley.className} absolute top-20 italic text-md font-bold uppercase flex flex-col items-center mb-2`}>
    //     <p className="text-black">Isaac Demeerseman</p>
    //     <p className={`${fontSpaceMono.className} text-black`}>WIP</p>
    //   </header>

    //   <ul className="flex absolute bottom-20 flex-col items-start">

    //     <NavLink href="/" active={false}>Projects</NavLink>
    //     <NavLink href="/about" active={false}>Games</NavLink>
    //     <NavLink href="/about" active={false}>work</NavLink>

    //     <NavLink href="https://github.com/isaacdemeers" active={true}>github</NavLink>

    //   </ul>
    // </main>


    <main className="h-screen w-screen flex items-center justify-start ">

      <div className="flex z-10 flex-col items-center justify-center h-full w-3/5 ml-10">
        <div className={`${fontCormorant.className} text-7xl flex flex-col  gap-10`}>
          <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="">  Isaac</motion.h2>
          <motion.h2 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.4 }} className="ml-10">Demeerseman</motion.h2>

          <div className="flex flex-col items-center justify-start w-full ">
            <p className={`${fontManrope.className} text-lg w-full`}>Welcome,</p>

          </div>

          <ul className={`${fontSpaceMono.className} flex flex-col items-start`}>

            <NavLink href="/" active={false} type="arrow">Projects</NavLink>
            <NavLink href="/" active={false} type="arrow">Games</NavLink>
            <NavLink href="/work" active={true} type="arrow">work</NavLink>

            <NavLink href="https://github.com/isaacdemeers" active={true} type="Link">github</NavLink>

            <Separator className="bg-emerald-600 opacity-25 h-px w-10 my-4" />

            <NavLink href="/work/cv" active={true} type="arrow" className='border border-emerald-600 rounded-lg px-2 py-1'>Contact me</NavLink>

          </ul>
          <section className=" w-fit flex items-center justify-center">
            <h1 className={`${fontManrope.className} text-sm font-light flex items-center justify-center gap-2  opacity-50`}>Last updated <span className="w-px p-px h-px flex items-center justify-center bg-slate-900 rounded-full"></span> 08.01.2025</h1>
          </section>
        </div>



      </div>

      <GameCanvas />


    </main>
  );
}