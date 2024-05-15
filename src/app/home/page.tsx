
import { AppointmentStats } from "@/components/homepage/appointments-stats";
import { Info } from "@/components/homepage/info";
import { StatsAgendamento } from "@/components/homepage/stats-1";
import { Welcome } from "@/components/homepage/welcome";
import { Main } from "@/components/main/main";

export default function HomePage() {
  return (
    <Main>
      <div className="w-full flex flex-col gap-5 items-start justify-center -mt-10">
        <Welcome />
        <Info />
        <AppointmentStats />
        {/* <StatsAgendamento /> */}
      </div>
    </Main>
  );
}