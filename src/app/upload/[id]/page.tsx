import { Main } from "@/components/main/main";
import { Toaster } from "@/components/ui/toaster";
import { UploadForm } from "@/components/upload-page/upload-form";

export default function UploadPage() {
  return (
    <Main>
      {/* componentizar  */}
      
      <div className="w-4/5 h-[500px] mx-auto flex flex-col items-center justify-between gap-5 bg-white rounded-md p-4 -mt-10">
        <div className="w-full mx-auto flex flex-col md:flex-row gap-10 items-center md:items-start md:justify-between">
          <h1 className="text-base md:text-lg text-left md:w-1/2">
            Para que seu cadastro seja aprovado é preciso que você faça o
            download do documento que estamos disponibilziando e que ele seja
            devolvido assinado pelo seu médico.{" "}
            <span className="font-semibold">
              O médico deve ser o mesmo o qual os dados foram informados durante
              o cadastro!
            </span>
          </h1>

          <a
              download={"#"}
              className="bg-royleBlue hover:bg-royleBlue/80 text-zinc-50 text-center p-3 text-sm md:text-base rounded-md font-regular cursor-pointer"
            >
              Download do documento
            </a>
        </div>
        <div className="w-full md:w-1/2 mx-auto flex flex-col items-center justify-center gap-5">
          <UploadForm />
          <Toaster  />
        </div>
      </div>
    </Main>
  );
}
