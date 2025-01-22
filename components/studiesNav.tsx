'use client';


import { Separator } from "@/components/ui/separator"
import Link from "next/link";


interface NavLinkProps {
    href: string;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
    catDisabled?: boolean;
}

function NavLink({ href, disabled, catDisabled, children, className }: NavLinkProps) {

    let styles = 'w-full flex items-center justify-start rounded-lg hover:bg-slate-200 transition-all duration-150 px-3 py-1 text-slate-600 ml-2'

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


    const PAGES = [
        {
            title: "Développer",
            href: "/work/studies-portfolio/developper",
            disabled: false,
            pages: [
                {
                    title: "PlanIt",
                    href: "/work/studies-portfolio/developper/1",
                    disabled: false,

                },
                {
                    title: "Downtale",
                    href: "/work/studies-portfolio/developper/2",
                    disabled: false,

                },

            ]
        },
        {
            title: "Entreprendre",
            href: "/work/studies-portfolio/entreprendre",
            disabled: false,

            pages: [
                {
                    title: "PlanIt",
                    href: "/work/studies-portfolio/entreprendre/1",
                    disabled: false,

                },
                {
                    title: "Downtale",
                    href: "/work/studies-portfolio/entreprendre/2",
                    disabled: false,

                }
            ]
        },
        {
            title: "Stage",
            href: "/work/studies-portfolio/stage",
            disabled: false,
            pages: [
                {
                    title: "Mémoire",
                    href: "/work/studies-portfolio/stage/1",
                    disabled: true
                },
                {
                    title: "Déroulement",
                    href: "/work/studies-portfolio/stage/2",
                    disabled: true,

                }
            ]
        }
    ]


    return (
        <nav className="flex fixed flex-row items-start justify-center gap-4 top-0 left-0 w-1/5 py-20 px-10  h-full bg-slate-100 border border-slate-200 text-white">


            <ul className="flex flex-col  gap-6 w-full h-fit ">

                {PAGES.map((page) => (
                    <li key={page.title} className="flex flex-col gap-2 w-full h-fit">
                        <Link href={page.disabled ? '/work/studies-portfolio' : page.href} className={`w-full flex items-center text-xl justify-start rounded-lg px-3 py-1  ${page.disabled ? 'text-slate-300 cursor-default' : 'text-slate-900'}`} >{page.title}</Link>
                        <ul className="flex flex-col gap-2 w-full h-fit">
                            {page.pages.map((subpage) => (
                                <NavLink key={subpage.title} disabled={subpage.disabled} href={subpage.href} catDisabled={page.disabled}>{subpage.title}</NavLink>
                            ))}
                        </ul>
                    </li>
                ))}

            </ul>

        </nav>
    )

}
