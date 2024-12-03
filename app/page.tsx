import Link from 'next/link';
import GameCanvas from './game/GameCanvas';
import { fontRadley, fontSpaceMono } from '@/lib/font';


function NavLink({ href, children, active }: { href: string, children: React.ReactNode, active: boolean }) {
  const style = {
    link: 'text-black font-bold uppercase text-sm group-hover:underline transition-transform duration-100',
  }
  return (
    <li className="flex items-center gap-2 group">
      <p className={`${active ? 'text-black' : 'text-gray-600'} font-bold uppercase text-sm group-hover:translate-x-1 transition-transform duration-100`}>{'->'}</p>
      <a href={href} className={`${active ? '' : 'line-through text-slate-600'} ${style.link}`}>{children}</a>
    </li>
  )
}

export default function Home() {


  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center bg-slate-100 overflow-hidden">
      <header className={`${fontRadley.className} absolute top-20 italic text-md font-bold uppercase flex flex-col items-center mb-2`}>
        <p className="text-black">Isaac Demeerseman</p>
        <p className={`${fontSpaceMono.className} text-black`}>WIP</p>
      </header>
      <GameCanvas />

      <ul className="flex absolute bottom-20 flex-col items-start">

        <NavLink href="/" active={false}>Projects</NavLink>
        <NavLink href="/about" active={false}>Games</NavLink>
        <NavLink href="/about" active={false}>work</NavLink>

        <NavLink href="https://github.com/isaacdemeers" active={true}>github</NavLink>

      </ul>
    </main>
  );
}