import { Psicologo } from "@/utils/interface-psicologo";
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

export function PsychologistsDialog(psicologo: Psicologo) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
            {psicologo.nome}
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}
