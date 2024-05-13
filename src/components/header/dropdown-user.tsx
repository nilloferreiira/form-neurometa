import { getUserData } from "@/hooks/get-user-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { LogoutBtn } from "./logout-btn";

export function DropDownUser() {
  const { name } = getUserData();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 border-[1px] border-royleBlue/20 rounded-lg p-2 outline-none">
        {name} <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <LogoutBtn />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
