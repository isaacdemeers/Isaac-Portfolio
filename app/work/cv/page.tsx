
import NavLink from "@/components/NavLink";
import { fontSpaceMono, fontManrope, fontCormorant } from "@/lib/font";

export default function Work() {
    return (
        <main className="h-screen w-screen flex items-center justify-start bg-slate-100 p-10">

            <div className="flex z-10 flex-col items-center justify-center  h-full w-3/5 bg-blue-500">
                <div className={`${fontCormorant.className} text-7xl flex  flex-col  gap-10`}>
                    <NavLink href="/" active={true} type="back">Go back</NavLink>
                    <h2 className="">  Work</h2>

                    <div className="flex flex-col items-center justify-start w-full ">
                        <p className={`${fontManrope.className} text-lg w-full`}>Here you will find everything related <br /> to my <span className="font-bold">professional profile</span>.</p>

                    </div>

                    <ul className={`${fontSpaceMono.className} flex flex-col items-start`}>
                        <NavLink href="https://www.linkedin.com/in/isaac-demeerseman-8701b6247/" active={true} type="arrow">Linkedin</NavLink>
                        <NavLink href="https://github.com/isaacdemeers" active={true} type="arrow">Github</NavLink>
                        <NavLink href="" active={true} type="arrow">X</NavLink>

                    </ul>
                </div>





            </div>

            <div className="flex flex-col items-center justify-center bg-red-500 w-2/5 h-full">
                <p className={`${fontManrope.className} text-lg w-full`}>Here you will find my <span className="font-bold">CV</span>.</p>

            </div>

        </main>
    );
}
