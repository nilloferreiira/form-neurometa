import { RegisterButton } from "../register-button";
import { Logo } from "../logo";
import Link from "next/link";
import { DropDownUser } from "./dropdown-user";
import { cookies } from "next/headers";

export function Header() {
  const token = cookies().get("token")?.value;
  return (
    <header className="w-full bg-white p-4 flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <Link href={"/home"}>
          <Logo />
        </Link>
      </div>
      {token ? <DropDownUser /> : <RegisterButton />}
    </header>
  );
}
