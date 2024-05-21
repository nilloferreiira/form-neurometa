'use client'

import { Main } from "@/components/main/main";
import { Psychologists } from "@/components/psicologos/psychologists";
import { PsychologistsProvider } from "@/components/psicologos/psychologists-provider";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";

export default function PsychologistsPage() {
  const [search, setSearch] = useState<string>("")

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  return (
    <Main>
      <div className="w-[90%] md:w-4/5 mx-auto flex flex-col items-center justify-center gap-8 md:gap-16 -mt-10">
        <Input 
        onChange={handleSearch}
        placeholder="Busque pelo nome do psicologo"
        className="focus-visible:ring-royleBlue/30 w-4/5"
        />
        <PsychologistsProvider>
          <Psychologists search={search}/>
        </PsychologistsProvider>
      </div>
    </Main>
  );
}
