import Link from 'next/link';
import GameCanvas from './game/GameCanvas';
import { fontRadley } from '@/lib/font';
function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
  const style = {
    link: 'text-black font-bold uppercase text-sm group-hover:underline transition-transform duration-100',
  }
  return (
    <li className="flex items-center gap-2 group">
      <p className="text-black font-bold uppercase text-sm group-hover:translate-x-1 transition-transform duration-100">{'->'}</p>
      <a href={href} className={style.link}>{children}</a>
    </li>
  )
}

export default function Home() {


  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center bg-slate-100 overflow-hidden">
      <header className={`${fontRadley.className} absolute top-20 italic text-md font-bold uppercase	 mb-2`}>
        <p className="text-black">Isaac Demeerseman</p>
      </header>
      <GameCanvas />

      <ul className="flex absolute bottom-20 flex-col items-start">

        <NavLink href="/">Projects</NavLink>
        <NavLink href="/about">Games</NavLink>
        <NavLink href="/about">work</NavLink>

        <NavLink href="https://github.com/isaacdemeers">github</NavLink>

      </ul>
    </main>
  );
}