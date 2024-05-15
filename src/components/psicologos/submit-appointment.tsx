'use client'

import { SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import { AppointmentSchema } from "@/utils/appointment-schema";

interface SubmitAppointmentProps {
    onSubmit: SubmitHandler<AppointmentSchema>
}

export function SubmitAppointment({onSubmit}: SubmitAppointmentProps) {
  return (
    <div className="w-full flex flex-col items-center gap-3 justify-center">
      <h4>Segunda, 8 de abril às 17:00</h4>
      <span className="flex gap-5">
        <strong>Psicóloga</strong>Adriana barros
      </span>
      <p>Sessão online - 50 minutos</p>

      <Button 
      onClick={() => onSubmit}
      className="bg-royleBlue hover:bg-royleBlue/90">Agendar</Button>
    </div>
  );
}
