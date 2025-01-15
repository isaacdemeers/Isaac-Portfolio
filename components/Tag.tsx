import { fontSpaceMono } from "@/lib/font";

export default function Tag({ text, className }: { text: string, className?: string }) {
    return (
        <p className={`${fontSpaceMono.className} text-sm px-2 cursor-default bg-slate-900 text-white rounded-lg w-fit ${className}`}>{text}</p>
    )
}