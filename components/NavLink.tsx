"use client";

import { fontSpaceMono } from '@/lib/font';
import { ExternalLink, LinkIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

let navTypes = {}

export default function NavLink({ href, children, active, type, className }: {
    href: string;
    children: React.ReactNode;
    active: boolean;
    type: string;
    className?: string;
}) {
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
    if (type === 'arrow' || type === 'Link') {
        arrow = <p className={`${active ? 'text-black group-hover:translate-x-1' : 'text-gray-600'} ${fontSpaceMono.className} font-bold uppercase text-sm  transition-transform duration-100`}>{'->'}</p>
    }
    else if (type === 'back') {
        arrow = <p className={`${active ? 'text-black group-hover:-translate-x-1' : 'text-gray-600'} ${fontSpaceMono.className} font-bold uppercase text-sm  transition-transform duration-100`}>{'<-'}</p>
    }

    return (
        <li className={`${className} flex items-center gap-2 `}>
            {arrow}
            <a
                href={href}
                onClick={handleClick}
                className={`${active ? 'group-hover:underline cursor-pointer' : ' cursor-default line-through text-slate-600'} ${style.link} flex items-center gap-1`}
            >
                {children}
                {type == 'Link' && <ExternalLink className="w-3 h-3" />}
            </a>
        </li>
    )
}