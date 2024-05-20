import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Consulta } from "@/utils/interfaces/AgendaResponseInterfaces";
import { useEffect, useState } from "react";
import { Spinner } from "../spinner";
import { requestVariables } from "@/utils/requestVariables/requestVariables";
import axios from "axios";
import { toast } from "../ui/use-toast";

export function CancelarConsulta({ consulta, onDeleteSuccess }: { consulta: Consulta, onDeleteSuccess: () => void }) {
    const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    const jsonChavesPrimarias = encodeURIComponent(
      JSON.stringify({
        PsicologoId: consulta.psicologoId,
        Data: consulta.data,
        PacienteId: consulta.pacienteId,
      })
    );

    try {
      await axios.delete(
        `https://neurometaoncoapi.azurewebsites.net/api/Agenda/Delete?id=${jsonChavesPrimarias}`,
        {
          headers: {
            Authorization: requestVariables.header,
            "Content-Type": "application/json",
          },
        }
      );
      onDeleteSuccess();
      // handle success here
    } catch (error) {
      // handle error here
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Você tem certeza ?</AlertDialogTitle>
        <AlertDialogDescription>
          Essa ação não pode ser desfeita. Sua consulta será cancelada e só será
          possivel agendar outra na mesma data, se houver vaga disponível.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={handleDelete}>
          {loading ? <Spinner /> : "Continue"}
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
