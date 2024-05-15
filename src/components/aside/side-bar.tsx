"use client";

import { useState } from "react";
import { Aside } from "./aside";

export function SideBar() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  return (
    <div
      className={`${isAsideOpen ? 'w-full' : 'w-10 md:w-16'} h-full absolute left-0 ${
        isAsideOpen ? "bg-black/40 md:bg-transparent" : "bg-transparent"
      } overflow-hidden z-10`}
    >
      <Aside
        isAsideOpen={isAsideOpen}
        setIsAsideOpen={() => setIsAsideOpen(!isAsideOpen)}
      />
    </div>
  );
}
