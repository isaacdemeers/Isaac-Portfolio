import Link from 'next/link';
import GameCanvas from './game/GameCanvas';
import { fontRadley, fontSpaceMono, fontCormorant, fontManrope } from '@/lib/font';


function NavLink({ href, children, active }: { href: string, children: React.ReactNode, active: boolean }) {
  const style = {
    link: 'text-black font-normal uppercase text-sm  transition-transform duration-100',
  }
  return (
    <li className="flex items-center gap-2 group">
      <p className={`${active ? 'text-black group-hover:translate-x-1' : 'text-gray-600'} font-bold uppercase text-sm  transition-transform duration-100`}>{'->'}</p>
      <a href={href} className={`${active ? 'group-hover:underline cursor-pointer' : ' cursor-default line-through text-slate-600'} ${style.link}`}>{children}</a>
    </li>
  )
}

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


    <main className="h-screen w-screen flex items-center justify-start bg-slate-100 p-10">

      <div className="flex z-50 flex-col items-center justify-center h-full w-3/5 ">
        <div className={`${fontCormorant.className} text-7xl flex flex-col  gap-10`}>
          <h2 className="">  Isaac</h2>
          <h2 className="ml-10">Demeerseman</h2>

          <div className="flex flex-col items-center justify-start w-full ">
            <p className={`${fontManrope.className} text-lg w-full`}>Bienvenue,</p>

          </div>

          <ul className={`${fontSpaceMono.className} flex flex-col items-start`}>

            <NavLink href="/projects" active={false}>Projects</NavLink>
            <NavLink href="/games" active={false}>Games</NavLink>
            <NavLink href="/work" active={false}>work</NavLink>

            <NavLink href="https://github.com/isaacdemeers" active={true}>github</NavLink>

          </ul>
        </div>



      </div>

      <GameCanvas />


    </main>
  );
}