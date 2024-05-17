"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { LogoutBtn } from "./logout-btn";
import { useEffect, useState } from "react";
import { User, useUser } from "@/hooks/use-user";
import Image from "next/image";

export function DropDownUser() {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userData = await useUser();
        setUser(userData);
      } catch (e) {
        console.log(`Erro getUser Dropdown: ${e}`);
      }
    };

    getUser();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 border-[1px] border-royleBlue/20 rounded-lg p-2 outline-none">
        {user?.fotoPerfil ? (
          <div className="flex items-center justify-center">
          <Image src={user.fotoPerfil} width={40} height={40} alt="Foto de perfil" className="w-10 h-10 rounded-full" />  <ChevronDown />
          </div>
        ) : (
          <>
            {user?.nome} <ChevronDown />
          </>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          {user !== null && user?.nome}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogoutBtn />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
