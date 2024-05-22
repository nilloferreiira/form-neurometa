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

  const handleDateChange = (value: Date | undefined) => {
    setDate(value);
    setValue("date", value!);
  };

  return (
    <>
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleDateChange}
        className="rounded-md border"
        disabled={date => date < new Date()}
      />

      {errors && <ErrorSpan>{errors.date?.message}</ErrorSpan>}
    </>
  );
}
