'use client';

import { Separator } from "@/components/ui/separator"
import Link from "next/link";
import { ArrowLeft, Home, SquareLibrary } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    href: string;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
    active?: boolean
    catDisabled?: boolean;
}

function NavLink({ href, disabled, catDisabled, children, active, className }: NavLinkProps) {
    let styles = `w-full flex items-center justify-start rounded-lg hover:bg-emerald-600 hover:bg-opacity-40 transition-all duration-150 px-3 py-1 text-neutral-600 px-2 ${active ? 'bg-emerald-600 bg-opacity-40' : ''}`
    let disabledStyles = 'text-slate-300 bg-slate-100 hover:bg-slate-100 cursor-default'

    return (
        <>
            {!disabled || !catDisabled ?
                <Link href={href} className={`${styles} `} > {children}</Link>
                :
                <Link href={'/work/studies-portfolio'} className={`${styles} ${disabledStyles} ${className} `}> {children}</Link>
            }
        </>
    )
}

export default function StudiesNav() {
    const pathname = usePathname();

    const PAGES = [
        {
            title: "Développer",
            href: "/work/studies-portfolio/developper",
            disabled: false,
            pages: [

            ]
        },
        {
            title: "Entreprendre",
            href: "/work/studies-portfolio/entreprendre",
            disabled: false,
            pages: [

            ]
        },
        {
            title: "Stage",
            href: "/work/studies-portfolio/stage",
            disabled: true,
            pages: [
                {
                    title: "L'entreprise",
                    href: "/work/studies-portfolio/1",
                    disabled: false
                },
                {
                    title: "Missions",
                    href: "/work/studies-portfolio/2",
                    disabled: false,
                }
            ]
        },
        {
            title: "SAÉ",
            href: "/work/studies-portfolio/sae",
            disabled: true,
            pages: [
                {
                    title: "PlanIt – 501",
                    href: "/work/studies-portfolio/501",
                    disabled: false
                },
                {
                    title: "Downtale – 502",
                    href: "/work/studies-portfolio/502",
                    disabled: false,
                }
            ]
        }
    ]

    console.log(pathname)

    return (
        <nav className="flex fixed flex-row items-start z-[60] justify-center gap-4 top-0 left-0  w-1/5 px-5  h-full bg-[#fbeddf] border border-[#f7d6b6] text-white">
            <ul className="flex flex-col  gap-6 w-full h-full rounded-lg overflow-scroll noscroll py-20 ">
                <Link href='/work/' className={`w-full flex items-center text-xl justify-start rounded-lg px-3 py-1 hover:bg-emerald-600 hover:bg-opacity-40 transition-all duration-200  text-slate-900`} ><ArrowLeft size={18} className="mr-2" /> Work</Link>
                <Separator className="h-px w-full bg-[#f7d6b6]" />
                <p className="text-neutral-600 cursor-default uppercase text-xs p-3">Studies Portfolio <br /> 2024/2025</p>

                <Link href='/work/studies-portfolio' className={`w-full flex items-center text-xl justify-start rounded-lg px-3 py-1 hover:bg-emerald-600 hover:bg-opacity-40 transition-all duration-200  text-slate-900`} ><Home size={18} className="mr-2" /> Menu</Link>

                {PAGES.map((page) => (
                    <li key={page.title} className="flex flex-col gap-2 w-full h-fit">
                        <Link href={page.disabled ? '' : page.href} className={`w-full flex items-center text-xl justify-start rounded-lg px-3 py-1  ${page.disabled ? ' cursor-default hover:bg-transparent' : ' hover:bg-emerald-600 '} text-slate-900 hover:bg-opacity-40 transition-all duration-200`} ><SquareLibrary size={18} className="mr-2" /> {page.title}</Link>
                        <ul className="flex flex-col gap-2 w-full h-fit">
                            {page.pages.map((subpage) => (
                                <NavLink
                                    key={subpage.title}
                                    disabled={subpage.disabled}
                                    href={subpage.href}
                                    catDisabled={page.disabled}
                                    active={pathname === subpage.href}

                                >
                                    {subpage.title}
                                </NavLink>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
