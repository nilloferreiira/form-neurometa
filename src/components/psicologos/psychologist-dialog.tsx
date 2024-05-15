"use client";

import { Psicologo } from "@/utils/interface-psicologo";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { PickUpDate } from "./pick-up-date";
import { Button } from "../ui/button";
import { AppointmentScheduler } from "./appointment-scheduler";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { steps } from "@/utils/steps-appointment";
import { z } from "zod";
import { toast } from "../ui/use-toast";
import {
  AppointmentSchema,
  appointmentSchema,
} from "@/utils/appointment-schema";
import { SubmitAppointment } from "./submit-appointment";
import { NavigationButtons } from "./navigation-buttons";

type FieldName = keyof AppointmentSchema;

export function PsychologistsDialog(psicologo: Psicologo) {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const formContext = useForm<AppointmentSchema>({
    resolver: zodResolver(appointmentSchema),
  });

  async function handleNextStep() {
    const fields = steps[currentStep].fields;
    const output = await formContext.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) {
      return toast({
        title: "Preencha todos os campos",
        variant: "destructive",
      });
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep((step) => step + 1);
    }
  }

  function handlePrevStep() {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  }

  const onSubmit: SubmitHandler<AppointmentSchema> = async (data) => {
    console.log(data);
  };

  return (
    <DialogContent>
      <DialogHeader className="space-y-2">
        <DialogTitle>Agendamento</DialogTitle>
        <DialogDescription className="space-y-3">
          {currentStep === 0 && (
            <h3 className="font-semibold text-zinc-800">
              {psicologo.nome}
              <h4 className="font-normal text-zinc-500">Selecione uma data para a consulta</h4>
            </h3>
          )}
          {currentStep === 1 && <h4>Selecione uma horário</h4>}
          {currentStep === 2 && <h4>Você está agendando uma consulta para:</h4>}
        </DialogDescription>
      </DialogHeader>
      <form
        onSubmit={formContext.handleSubmit(onSubmit)}
        className="w-72 mx-auto"
      >
        <FormProvider {...formContext}>
          {currentStep === 0 && <PickUpDate />}

          {currentStep === 1 && <AppointmentScheduler />}

          {currentStep === 2 && <SubmitAppointment onSubmit={onSubmit}  />}
        </FormProvider>
      </form>
      <DialogFooter>
        <div className="w-full flex justify-center">
          <NavigationButtons
            currentStep={currentStep}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        </div>
      </DialogFooter>
    </DialogContent>
  );
}
