import { Main } from "@/components/main/main";
import { PsychologistsCard } from "@/components/psicologos/psychologist-card";
import { PsychologistsDialog } from "@/components/psicologos/psychologist-dialog";
import {
    Dialog
} from "@/components/ui/dialog";
import { arrayPsicologos } from "@/data/psychologists-array";

export default function PsychologistsPage() {
  return (
    <Main>
      <div className="w-full ml-10 md:ml-10 lg:ml-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start justify-center gap-2 ">
        {arrayPsicologos.map((psicologo) => (
          <Dialog>
            <PsychologistsCard
              nome={psicologo.nome}
              id={psicologo.id}
              numCRP={psicologo.numCRP}
              areaEspecializacao={psicologo.areaEspecializacao}
              descricao={psicologo.descricao}
              profilePicture={psicologo.profilePicture}
              horariosDisponiveis={psicologo.horariosDisponiveis}
            />

            <PsychologistsDialog
              nome={psicologo.nome}
              id={psicologo.id}
              numCRP={psicologo.numCRP}
              areaEspecializacao={psicologo.areaEspecializacao}
              descricao={psicologo.descricao}
              horariosDisponiveis={psicologo.horariosDisponiveis}
            />
          </Dialog>
        ))}
      </div>
    </Main>
  );
}
