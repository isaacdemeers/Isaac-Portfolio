"use client";

import { fontSpaceMono } from '@/lib/font';
import { useRouter } from 'next/navigation';

export default function NavLink({ href, children, active, type }: { href: string, children: React.ReactNode, active: boolean, type: string }) {
    const router = useRouter();
    const style = {
        link: `${fontSpaceMono.className} text-black font-normal uppercase text-sm  transition-transform duration-100`,
    }

    const handleClick = (e: React.MouseEvent) => {
        if (type === 'back') {
            e.preventDefault();
            router.back();
        }
    };

    let arrow = null;
    if (type === 'arrow') {
        arrow = <p className={`${active ? 'text-black group-hover:translate-x-1' : 'text-gray-600'} ${fontSpaceMono.className} font-bold uppercase text-sm  transition-transform duration-100`}>{'->'}</p>
    }
    else if (type === 'back') {
        arrow = <p className={`${active ? 'text-black group-hover:-translate-x-1' : 'text-gray-600'} ${fontSpaceMono.className} font-bold uppercase text-sm  transition-transform duration-100`}>{'<-'}</p>
    }

    return (
        <li className="flex items-center gap-2 group">
            {arrow}
            <a
                href={href}
                onClick={handleClick}
                className={`${active ? 'group-hover:underline cursor-pointer' : ' cursor-default line-through text-slate-600'} ${style.link}`}
            >
                {children}
            </a>
        </li>
    )
}