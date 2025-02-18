

// import Loader from "@/components/Loader";

import StudiesNav from "@/components/studiesNav";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <section className="w-screen h-screen flex items-start justify-end  ">

                <StudiesNav />
                {children}
            </section>

        </>
    );
}
