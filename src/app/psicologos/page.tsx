import { Main } from "@/components/main/main";
import { GridPsychologists } from "@/components/psicologos/grid-psychologists";
import { PsychologistsProvider } from "@/components/psicologos/psychologists-provider";

export default function PsychologistsPage() {
  return (
    <Main>
      <div className="w-[90%] md:w-4/5 mx-auto flex items-center justify-center">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-center gap-2">
          <PsychologistsProvider>
            <GridPsychologists />
          </PsychologistsProvider>
        </div>
      </div>
    </Main>
  );
}
