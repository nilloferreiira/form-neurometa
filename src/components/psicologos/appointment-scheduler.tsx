'use client'

import { useFormContext, useWatch } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { gerarHorariosDoDia } from "@/data/schedule";
import { AppointmentSchema } from "@/utils/appointment-schema";
import { ErrorSpan } from "../error-span";
import { Psychologist } from "@/utils/interface-psychologist";
import { Agendamento, Consulta, ResponseData, User } from "@/utils/interfaces/AgendaResponseInterfaces";
import { requestVariables } from "@/utils/requestVariables/requestVariables";
import { Spinner } from "@/components/spinner";

interface AppointmentSchedulerProps {
  psicologo: Psychologist;
}

export function AppointmentScheduler({ psicologo }: AppointmentSchedulerProps) {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [loading, setLoading] = useState(false);
  const appointments = gerarHorariosDoDia();

  const { setValue, formState: { errors }, control } = useFormContext<AppointmentSchema>();
  const date = useWatch({
    control,
    name: 'date',
  });

  useEffect(() => {
    const fetchConsultas = async () => {
      if (date) {
        setLoading(true); // Inicia o spinner
        const startOfDay = new Date(date);
        startOfDay.setUTCHours(8, 0, 0, 0);

        const endOfDay = new Date(date);
        endOfDay.setUTCHours(20, 0, 0, 0);

        const jsonQuery = encodeURIComponent(
          JSON.stringify({
            "PsicologoId@igual": `${psicologo.user.id}@System.String`,
            "Data@maiorigual": `${startOfDay.toISOString()}@System.DateTime`,
            "Data@menorigual": `${endOfDay.toISOString()}@System.DateTime`,
          })
        );

        console.log(endOfDay.toISOString());
        console.log(startOfDay.toISOString());

        try {
          const response = await axios.get(
            `https://neurometaoncoapi.azurewebsites.net/api/Agenda/Find?json=${jsonQuery}`,
            {
              headers: {
                Authorization: requestVariables.header,
                "Content-Type": "application/json",
              },
            }
          );
          const responseData: ResponseData = response.data;
          const consultas: Consulta[] = responseData.$values;

          setConsultas(consultas);
        } catch (error) {
          console.error("Erro ao buscar consultas:", error);
        } finally {
          setLoading(false); // Finaliza o spinner
        }
      }
    };

    fetchConsultas();
  }, [date, psicologo.user.id]);

  const isTimeSlotOccupied = (timeSlot: string) => {
    return consultas.some((consulta) => {
      const consultaDate = new Date(consulta.data);
      const consultaTime = consultaDate.toISOString().substr(11, 5); // Extrai HH:mm
      return consultaTime === timeSlot;
    });
  };

  return (
    <div className="w-full">
      {loading ? (
        <Spinner />
      ) : (
        <ToggleGroup
          className="flex-wrap"
          type="single"
          onValueChange={value => setValue('time', value)}
        >
          {appointments.map((appointment) => 
            <ToggleGroupItem
              key={appointment}
              className="border-2 border-royleBlue rounded-full text-royleBlue"
              value={appointment}
              disabled={isTimeSlotOccupied(appointment)}
            >
              {appointment}
            </ToggleGroupItem>
          )}
        </ToggleGroup>
      )}
      {errors && <ErrorSpan>{errors.time?.message}</ErrorSpan>}
    </div>
  );
}