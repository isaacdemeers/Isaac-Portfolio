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

    return (<ul>
        <button
            onClick={handleDownload}
            className={`${fontSpaceMono.className} text-[1rem] flex items-center gap-2 border-none bg-transparent hover:underline`}
        >
            <Download className="w-4 h-4" />
            Download CV
        </button>
    </ul>);
}