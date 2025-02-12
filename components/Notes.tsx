
import { Link } from 'lucide-react';
import { fontManrope } from '@/lib/font';
import NavLink from '@/components/NavLink';


export function Head() {

    return (
        <div className="flex items-center gap-2">
            <Link size={16} className="text-slate-900" />
            <h2 className={`${fontManrope.className} text-md`}>Liens Rapides</h2>
        </div>)
}

export default function Notes( text: string, content: string, icon: string) {

    return (

        <div className=" bg-slate-200 border border-slate-300 flex items-start flex-col justify-start rounded-2xl w-60 p-4 gap-4 mt-10">
            <Head />
            <ul>
                <NavLink href="/work/studies-portfolio/developper" active={true} type="arrow">DÉVELOPPER</NavLink>
                <NavLink href="/work/studies-portfolio/entreprendre" active={true} type="arrow">ENTREPRENDRE</NavLink>
                <NavLink href="/work/studies-portfolio/stage" active={true} type="arrow">STAGE</NavLink>

            </ul>
        </div>

    );
}