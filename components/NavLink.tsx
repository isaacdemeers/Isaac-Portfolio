"use client";

import { fontSpaceMono } from '@/lib/font';
import { ArrowBigRightDash, ArrowUpRight, ExternalLink, GitCommitHorizontal, GitCommitVertical, GitCommitVerticalIcon, LinkIcon, MoveLeft, MoveRight } from 'lucide-react';
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
        link: `${fontSpaceMono.className} font-normal uppercase text-sm   transition-transform duration-100`,
        linkActive: `${fontSpaceMono.className} font-normal uppercase text-sm   transition-transform duration-100`,
    }

    const handleClick = (e: React.MouseEvent) => {
        if (type === 'back') {
            e.preventDefault();
            router.back();
        }
    };

    let arrow = null;
    if (type === 'arrow' || type === 'Link') {
        arrow = <p className={`${active ? 'text-emerald-600 group-hover:translate-x-1' : 'text-gray-600'} ${fontSpaceMono.className} font-bold uppercase text-sm  transition-transform duration-100`}><MoveRight className="w-4 h-4" /></p>
    }
    else if (type === 'back') {
        arrow = <p className={`${active ? 'text-emerald-600 group-hover:-translate-x-1' : 'text-gray-600'} ${fontSpaceMono.className} font-bold uppercase text-sm  transition-transform duration-100`}><MoveLeft className="w-4 h-4" /></p>
    }

    return (
        <li className={`${className} group flex items-center gap-2 transition-transform duration-100`}>
            {arrow}
            <a
                href={href}
                onClick={handleClick}
                className={`${active ? 'group-hover:underline cursor-pointer text-emerald-600' : ' cursor-default line-through text-slate-600'} ${style.link} flex items-center gap-1`}
            >
                {children}
                {type == 'Link' && <ArrowUpRight className="w-4 h-4" />}
            </a>
        </li>
    )
}