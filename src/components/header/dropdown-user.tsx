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
        {user !== null && user?.nome} <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <LogoutBtn />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
