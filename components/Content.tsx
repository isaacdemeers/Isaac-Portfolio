'use client'

import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
// import { useEffect, useState } from "react"

export default function Content({ children }: { children: ReactNode }) {
    const pathname = usePathname()

    // const [isLoading, setIsLoading] = useState(false)  

    // useEffect(() => {
    //     setIsLoading(true)
    //     const timeout = setTimeout(() => {
    //         setIsLoading(false)
    //     }, 800)
    //     return () => clearTimeout(timeout)
    // }, [pathname])

    return (
        <AnimatePresence mode="wait">
            <motion.main
                key={pathname}
                initial={{ opacity: 0,y:2, filter: 'blur(5px)' }}
                animate={{ opacity: 1,y:0, filter: 'blur(0px)' }}
                exit={{ opacity: 0,y:2, filter: 'blur(5px)' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="flex items-center justify-start w-screen h-screen overflow-x-hidden overflow-y-scroll"
            >{children}
            </motion.main>
                

            {/* {isLoading && (
                <motion.div 
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FFF4EA]"
                >
                    
                </motion.div>
            )} */}
        </AnimatePresence>
    )
}



