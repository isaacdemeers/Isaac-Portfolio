import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Loader from "../components/Loader";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isaac Demeerseman - Portfolio",
  description: "Web development student at the University of Limoges. Discover my various academic and personal projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased bg-slate-100`}>
        <div className="fixed top-0 left-0 w-full h-14 bg-gradient-to-b from-white to-transparent z-50"></div>
        <div className="fixed bottom-0 left-0 w-full h-14 bg-gradient-to-t from-white to-transparent z-50"></div>
        <Loader />
        {children}
      </body>
    </html>
  );
}
