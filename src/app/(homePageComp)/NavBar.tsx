'use client'
import Link from "next/link"

import { useState } from "react"

import ListIcon from "./listIcon"
import X from "./xIcon"
import MiniMeniu from "./miniMeniu"

export default function NavBar() {

    const [ isOpen, setIsOpen ] = useState(false)

    const handleClick = () => {
        setIsOpen( prevState => !prevState )
    }

    return (
        <div className="min-h-14"> 
            <div className="container mx-auto mt-4 flex justify-between items-center max-w-screen-2xl">
                <div className="text-2xl px-8">
                    <Link href='/' className="hover:text-blue-600 transition duration-500"> 
                        <button className="px-4 py-2 mr-4 rounded-full text-dark-bej bg-gradient-to-r from-cyan-500 to-blue-500"> 
                        B </button> 
                        Bogdan Olar 
                    </Link>
                </div>
                <div className="flex">
                    {   !isOpen ?
                        <ListIcon click={handleClick} /> :
                        <X click={handleClick} /> 
                    }
                    <Link href='/' className="px-8 font-medium hover:text-blue-600 transition duration-500 hidden lg:block"> Home </Link>
                    <Link href='/cv' className="px-8 font-medium hover:text-blue-600 transition duration-500 hidden lg:block"> Curiculum Vitae </Link>
                    <Link href='/proiecte' className="px-8 font-medium hover:text-blue-600 transition duration-500 hidden lg:block"> Proiecte </Link>
                    <Link href='contact' className="px-8 font-medium hover:text-blue-600 transition duration-500 hidden lg:block"> Contact </Link>
                </div>
            </div>
            <div className="absolute right-10">
                   {
                     isOpen ? <MiniMeniu click={handleClick} /> : null
                   } 
            </div>
        </div>
    )
    
}