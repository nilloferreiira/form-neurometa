import Link from "next/link";
import { Main } from "../main/main";

export function CompletedForm() {
  return (
    <Main>
      <div className="w-4/5 flex flex-col items-center justify-center gap-5 md:gap-10 p-4 mx-auto pt-10">
        <h1 className="font-bold text-xl">Dados enviados!</h1>
        <p className="text-lg text-center">
          Aguarde até que seu cadastro seja aprovado. Este processo pode demorar até 3 dias.
        </p>
        <Link href={"/"} className="font-semibold underline text-base text-blue-600">Página de login</Link>
      </div>
    </Main>
  );
}
