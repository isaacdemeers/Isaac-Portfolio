'use client';

import { Download } from 'lucide-react';
import { fontSpaceMono } from '@/lib/font';

export default function Home() {

    const handleDownload = () => {
        // Créer un lien pour télécharger le PDF
        const link = document.createElement('a');
        link.href = '/CV-Isaac-DEMEERSEMAN.pdf';
        link.download = 'CV-Isaac-DEMEERSEMAN.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (<ul className='group'>
        <button
            onClick={handleDownload}
            className={`${fontSpaceMono.className} text-[1rem] flex items-center gap-2 border-none bg-transparent duration-200 hover:text-emerald-600`}
        >
            <Download className="w-4 h-4 group-hover:text-emerald-600 transition-all duration-200" />
            Download CV
        </button>
    </ul>);
}