
import { Logo } from "../logo";
import Link from "next/link";
import { ProfileContainer } from "./profile-container";

export function Header() {
  return (
    <header className="w-full bg-white p-4 flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <Link href={"/home"}>
          <Logo />
        </Link>
      </div>
      <ProfileContainer />
    </header>
  );
}
