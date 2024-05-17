'use client'

import { useFormContext } from "react-hook-form";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { gerarHorariosDoDia } from "@/data/schedule";
import { AppointmentSchema } from "@/utils/appointment-schema";
import { ErrorSpan } from "../error-span";

export function AppointmentScheduler() {
  const appointments = gerarHorariosDoDia()
  
  const { setValue, formState: { errors } } = useFormContext<AppointmentSchema>()

    return (
    <div className="w-full">
      <ToggleGroup
        className="flex-wrap"
      type="single" onValueChange={value => setValue('time', value)}>
        {appointments.map((appointment) => 
            <ToggleGroupItem key={appointment}
            className="border-2 border-royleBlue rounded-full text-royleBlue"
            value={appointment}>
                { appointment }
            </ToggleGroupItem>
            )}
      </ToggleGroup>
      {errors && <ErrorSpan>{errors.time?.message}</ErrorSpan>}
    </div>
  );
}
