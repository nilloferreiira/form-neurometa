import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function UploadForm() {
  return (
    <form className="w-3/4 flex flex-col gap-2 items-center justify-center">
      <Input
        type="file"
        className="w-full bg-zinc-50 border-2 border-royleBlue/50 hover:border-royleBlue hover:bg-zinc-100 transition-all cursor-pointer focus-visible:ring-royleBlue/40 outline-none"
      />

    <Button className="bg-royleBlue hover:bg-royleBlue/90">Enviar</Button>
    </form>
  );
}
