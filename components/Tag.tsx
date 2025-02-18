import { fontSpaceMono } from "@/lib/font";

export default function Tag({ text, className }: { text: string, className?: string }) {
    return (
        <p className={`${fontSpaceMono.className} text-sm px-2 cursor-default bg-neutral-700 text-[#fbeddf] rounded-lg w-fit ${className}`}>{text}</p>
    )
}