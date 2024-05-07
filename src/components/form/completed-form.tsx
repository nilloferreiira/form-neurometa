import Link from "next/link";
import { Main } from "../main/main";

export function CompletedForm() {
  // get user ID

  return (
    <Main>
      <div className="w-4/5 flex flex-col items-center justify-center gap-5 md:gap-10 p-4 mx-auto pt-10">
        <h1 className="font-bold text-xl">Dados enviados!</h1>
        <p className="text-lg text-center">
          Para completar seu cadastro é preciso enviar um documento assinado
          pelo seu médico.
        </p>
        <Link href={"/upload/id"} className="font-semibold underline text-base text-blue-600">Enviar documento</Link>
      </div>
    </Main>
  );
}
