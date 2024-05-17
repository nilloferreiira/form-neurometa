import { Main } from "@/components/main/main";
import { Psychologists } from "@/components/psicologos/psychologists";
import { PsychologistsProvider } from "@/components/psicologos/psychologists-provider";

export default function PsychologistsPage() {
  return (
    <Main>
      <div className="w-[90%] md:w-4/5 mx-auto flex items-center justify-center">
        <PsychologistsProvider>
          <Psychologists />
        </PsychologistsProvider>
      </div>
    </Main>
  );
}
