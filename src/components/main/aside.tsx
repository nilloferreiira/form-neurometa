import { AlignLeft, Dot } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Aside() {
  const [isAsideOpen, setIsAsideOpen] = useState(true);

  return (
    <aside className={` ${isAsideOpen ? 'w-1/6' : 'w-[5%]'} p-2 flex flex-col gap-5 items-center justify-start h-screen bg-white`}>
      <button
        className="w-full pl-2"
        onClick={() => setIsAsideOpen(!isAsideOpen)}
      >
        <AlignLeft />
      </button>
      {isAsideOpen && (
        <ul className="w-full space-y-2">
          <li className="flex items-center justify-start hover:opacity-80">
            <Dot /> <Link href={"#"}>Lista de psicologos</Link>
          </li>
          <li className="flex items-center justify-start hover:opacity-80">
            <Dot /> <Link href={"#"}>Lista de psicologos</Link>
          </li>
          <li className="flex items-center justify-start hover:opacity-80">
            <Dot /> <Link href={"#"}>Lista de psicologos</Link>
          </li>
        </ul>
      )}
    </aside>
  );
}
