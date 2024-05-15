"use client";

import { useState } from "react";
import { Calendar } from "../ui/calendar";
import { AppointmentSchema } from "@/utils/appointment-schema";
import { useFormContext } from "react-hook-form";
import { ErrorSpan } from "../error-span";

export function PickUpDate() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const {
    setValue,
    formState: { errors },
  } = useFormContext<AppointmentSchema>();

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={(value) => {
          setDate(value);
          setValue("date", value!);
        }}
        className="rounded-md border"
      />

      {errors && <ErrorSpan>{errors.date?.message}</ErrorSpan>}
    </>
  );
}
