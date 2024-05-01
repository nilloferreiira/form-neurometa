import { RegisterButton } from "../register-button";
import { Logo } from "../logo";
import Link from "next/link";

export function Header() {

  return (
    <header className="w-full bg-white p-4 flex items-center justify-between">
     
     <div className="flex gap-4 items-center">
      <Link href={'/'}>
        <Logo />
      </Link>
     </div>
      {/* pegar o caminho da URL e caso esteja na pagina de cadastro trocar o botao para login  */}
      <RegisterButton />
    </header>
  );
}
