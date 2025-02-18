"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);
    const [shouldRender, setShouldRender] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        setIsLoading(true);
        setShouldRender(true);

        const timer = setTimeout(() => {
            setIsLoading(false);
            // Attendre que l'animation d'opacité soit terminée avant de retirer le composant
            setTimeout(() => {
                setShouldRender(false);
            }, 200); // Même durée que la transition
        }, 200);

        return () => clearTimeout(timer);
    }, [pathname]);

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed inset-0 bg-[#fbeddf] z-50 flex items-center transition-all duration-300 justify-center scale-150  ${isLoading ? 'bg-opacity-100 backdrop-blur-lg' : 'bg-opacity-0 backdrop-blur-0 pointer-events-none'
                }`}
        >
            {/* <div className="w-8 h-8 border-4 border-black border-t-transparent rounded-full animate-spin" /> */}
        </div>
    );
}