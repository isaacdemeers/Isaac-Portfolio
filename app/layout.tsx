import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Content from "../components/Content";
import { Analytics } from "@vercel/analytics/react"

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
    <body className={`${spaceGrotesk.className} antialiased bg-[#FFF4EA] overflow-x-hidden`}>
      <div className="fixed top-0 left-0 w-full h-14 bg-gradient-to-b from-[#FFF4EA] to-transparent z-[70]"></div>
      <div className="fixed bottom-0 left-0 w-full h-14 bg-gradient-to-t from-[#FFF4EA] to-transparent z-[70]"></div>
      <Content>
        {children}
      </Content>
<Analytics />
    </body>
  </html>
)};