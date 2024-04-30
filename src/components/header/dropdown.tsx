import { AlignLeft } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

export function DropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger><AlignLeft/></DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Páginas</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><Link href={"#"}>Lista de psicologos</Link></DropdownMenuItem>
        <DropdownMenuItem><Link href={"#"}>Lista de psicologos</Link></DropdownMenuItem>
        <DropdownMenuItem><Link href={"#"}>Lista de psicologos</Link></DropdownMenuItem>
        <DropdownMenuItem><Link href={"#"}>Lista de psicologos</Link></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
