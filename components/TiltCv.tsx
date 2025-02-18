'use client'

import Image from 'next/image';
import VanillaTilt from 'vanilla-tilt';
import cv from '@/public/CV-Isaac-DEMEERSEMAN.png';
import { useEffect } from 'react';


export default function tiltCv() {
    useEffect(() => {
        const element = document.querySelector("[data-tilt]") as HTMLElement;
        if (element) {
            VanillaTilt.init(element, {
                max: 25,
                speed: 400
            });
        }
    }, []);

    return (

        <div className="w-fit h-fit scale-[0.8] rounded-lg">
            <Image src={cv} data-tilt data-tilt-scale="1.1" data-tilt-reverse="true" data-tilt-full-page-listening alt="CV Isaac Demeerseman" width={1000} height={1000} className="w-full h-full object-contain shadow-lg rounded-lg" />
        </div>
    );
}