
import { Info } from "@/components/homepage/info";
import { StatsAgendamento } from "@/components/homepage/stats";
import { Welcome } from "@/components/homepage/welcome";
import { Main } from "@/components/main/main";

export default function HomePage() {
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