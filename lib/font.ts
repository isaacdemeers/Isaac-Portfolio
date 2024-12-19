import { Space_Mono, Radley, Cormorant_SC, Manrope, Nabla, Rubik_80s_Fade, IBM_Plex_Sans } from 'next/font/google';

export const fontSpaceMono = Space_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export const fontRadley = Radley({
    subsets: ['latin'],
    weight: ['400'],
    style: ['normal', 'italic'],
});

export const fontCormorant = Cormorant_SC({
    subsets: ['latin'],
    weight: ['400'],
});

// export const fontManrope = Manrope({
//     subsets: ['latin'],
//     weight: ['400'],
// });

export const fontNabla = Nabla({
    subsets: ['latin'],
    weight: ['400'],
});

export const fontRubik80sFade = Rubik_80s_Fade({
    subsets: ['latin'],
    weight: ['400'],
});

export const fontManrope = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['400', '700', '500', '600', '300', '200', '100'],
});