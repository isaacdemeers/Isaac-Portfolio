'use client';
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';



export default function ShowScroll() {
    const [isVisible, setIsVisible] = useState(true);


    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);


    return (

        <div className={`text-emerald-500  ${isVisible ? 'opacity-100 blur-0 translate-y-24' : ' opacity-0 blur-lg translate-y-36'} transition-all duration-1000 `}>
            <ArrowDown />
        </div>
    )

}