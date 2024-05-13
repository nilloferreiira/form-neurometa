import { Main } from "@/components/main/main";
import { PsychologistsCard } from "@/components/psicologos/psychologist-card";
import { PsychologistsDialog } from "@/components/psicologos/psychologist-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { arrayPsicologos } from "@/data/psychologists-array";

export default function PsychologistsPage() {
  return (
    <Main>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-2 mx-auto">
        {arrayPsicologos.map((psicologo) => (
          <Dialog>
            <DialogTrigger>
              <PsychologistsCard
                nome={psicologo.nome}
                id={psicologo.id}
                areaEspecializacao={psicologo.areaEspecializacao}
                descricao={psicologo.descricao}
                horariosDisponiveis={psicologo.horariosDisponiveis}
              />
            </DialogTrigger>
            <PsychologistsDialog
              nome={psicologo.nome}
              id={psicologo.id}
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
