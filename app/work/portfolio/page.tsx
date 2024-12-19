import NavLink from "@/components/NavLink";
import { fontCormorant, fontManrope, fontNabla, fontSpaceMono } from "@/lib/font";
import Link from "next/link";
export default function Portfolio() {
    return (
        <div className="w-full h-screen flex items-center justify-center gap-10 flex-col">
            <h1 className={`${fontCormorant.className} text-8xl text-center text-slate-900`}>Portfolio <br /> de compétences</h1>
            <p className={`${fontManrope.className} text-sm text-center text-slate-900 mt-4`}>Soon... :)</p>
            <NavLink href="/work" type="back" active={true}>Back to Work</NavLink>
        </div>
    )
}