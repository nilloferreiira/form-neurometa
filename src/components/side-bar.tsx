'use client'

import { useState } from "react";
import { Aside } from "./aside"

export function SideBar() {
    const [isAsideOpen, setIsAsideOpen] = useState(true);


    return (
        <div className={`w-full absolute left-0 transition-all ${isAsideOpen ? 'bg-black/40' : 'bg-transparent'} overflow-hidden z-50`}>
            <Aside isAsideOpen={isAsideOpen} setIsAsideOpen={() => setIsAsideOpen(!isAsideOpen)} />
        </div>
    )
}

