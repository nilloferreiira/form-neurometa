
import { Info } from "@/components/homepage/Info";
import { StatsAgendamento } from "@/components/homepage/Stats";
import { Welcome } from "@/components/homepage/Welcome";
import { Main } from "@/components/main/main";

export default function homePage() {
  return (
    <Main>
      <div className="flex flex-col gap-5 justify-center">
        <Welcome />
        <Info />
        <StatsAgendamento />
      </div>
    </Main>
  );
}