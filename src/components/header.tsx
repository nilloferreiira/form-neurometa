import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

export function Header() {
  return (
    <header className="w-full bg-white p-4 flex items-center justify-between">
      <div className="size-12 rounded-md overflow-hidden">
        <Image
          src={"/neurometa.jpeg"}
          alt={"Neurometa"}
          width={200}
          height={200}
        />
      </div>
      <Link
        href={"/register-form"}
        className="bg-royleBlue hover:bg-royleBlue/80 text-zinc-50 p-2 rounded-md font-regular"
      >
        Cadastre-se
      </Link>
    </header>
  );
}
