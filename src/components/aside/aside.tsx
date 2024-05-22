import { ChevronLeft, ChevronRight, Dot } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { requestVariables } from "@/utils/requestVariables/requestVariables";

interface SideBarProps {
  isAsideOpen: boolean;
  setIsAsideOpen: () => void;
}

export function Aside({ isAsideOpen, setIsAsideOpen }: SideBarProps) {
  const [hasToken, setHasToken] = useState(false);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    if (requestVariables.token !== null) {
      setHasToken(true);
      setRole(requestVariables.role);
    }
  }, []);

  return (
    <aside className={`transition-all ${isAsideOpen ? 'w-2/4 md:w-1/6' : 'w-10 md:w-16'} md:p-4 flex flex-col md:gap-5 items-center justify-start h-screen bg-white`}>
      <button
        className="w-full pl-2 transition-all"
        onClick={setIsAsideOpen}
      >
        {isAsideOpen ? <ChevronRight /> : <ChevronLeft />}
      </button>
      {isAsideOpen && (
        <ul className="w-full space-y-2">
          {!hasToken ? (
            <>
              <li className="flex items-center justify-start hover:opacity-80">
                <Dot /> <Link href={"/"}>Login</Link>
              </li>
              <li className="flex items-center justify-start hover:opacity-80">
                <Dot /> <Link href={"/upload"}>Entrega do documento</Link>
              </li>
            </>
          ) : (
            <>
              <li className="flex items-center justify-start hover:opacity-80">
                <Dot /> <Link href={"/"}>Home</Link>
              </li>
              <li className="flex items-center justify-start hover:opacity-80">
                <Dot /> <Link href={"/futuros-agendamentos"}>Seus agendamentos</Link>
              </li>
              {role !== "Psicologo" && (
                <li className="flex items-center justify-start hover:opacity-80">
                  <Dot /> <Link href={"/psicologos"}>Lista de psicologos</Link>
                </li>
              )}
            </>
          )}
        </ul>
      )}
    </aside>
  );
}
