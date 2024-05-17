'use client'

import { SubmitHandler, useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import { AppointmentSchema } from "@/utils/appointment-schema";
import { Psychologist } from "@/utils/interface-psychologist";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("pt-br");

interface SubmitAppointmentProps {
    onSubmit: SubmitHandler<AppointmentSchema>
    psicologo: Psychologist
}

export function SubmitAppointment({onSubmit, psicologo}: SubmitAppointmentProps) {
  const { watch } = useFormContext<AppointmentSchema>();
  const formData = watch();

  const date = dayjs(formData.date, 'DD/MM/YYYY');

  return (
    <div className="w-full flex flex-col items-center gap-3 justify-center">
      <h4>{`${date.format("dddd, DD")} de ${date.format("MMMM")} às ${formData.time}`}</h4>
      <span className="flex gap-5">
        <strong>Psicóloga</strong><span>{psicologo.user.nome}</span>
      </span>
      <p>Sessão online - 50 minutos</p>

      <Button 
      onClick={() => onSubmit}
      className="bg-royleBlue hover:bg-royleBlue/90">Agendar</Button>
    </div>
  );
}
