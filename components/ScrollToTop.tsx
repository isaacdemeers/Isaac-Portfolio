'use client';

import { useEffect, useState } from 'react';
import { ArrowUpIcon } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Vérifier la position du scroll
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Fonction pour remonter en haut
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>

            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 bg-slate-900 shadow-lg text-white p-3 rounded-2xl hover:bg-slate-800 transition-all duration-500 z-50 ${isVisible ? 'opacity-100 blur-0 scale-100' : ' opacity-0 blur-lg scale-50'}`}
                aria-label="Retour en haut"
            >
                <ArrowUpIcon className="w-6 h-6" />
            </button>
        </>
    );
} 