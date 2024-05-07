"use client";

import { FormSchema, formSchema } from "@/utils/formSchema";
import { steps } from "@/utils/steps-array";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CompletedForm } from "./completed-form";
import { FormDoctorData } from "./form-doctor-data";
import { FormPersonalUserData } from "./form-personal-user-data";
import { NavSteps } from "./nav-steps";
import { NavigationButton } from "./navigation-button";
import { toast } from "../ui/use-toast";
import { useAuth } from "@/hooks/use-auth";

export function FormPage() {
  const formContext = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    try {
      useAuth(data);
    } catch (error) {
      console.log();
      toast({
        title: "Erro ao enviar o formulario",
      });
    }
  };

  const [currentStep, setCurrentStep] = useState(0);

  type FieldName = keyof FormSchema;

  async function handleNextStep() {
    const fields = steps[currentStep].fields;
    const output = await formContext.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) {
      return;
    }

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        // verificar se a requisicao retornou erro, se sim, nao permitir q avance
        await formContext.handleSubmit(onSubmit)();
      }
      setCurrentStep((step) => step + 1);
    }
  }

  function handlePrevStep() {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  }

  return (
    <section className="w-full flex flex-col mx-auto items-center justify-center -mt-20 gap-2 md:gap-5">
      <NavSteps steps={steps} currentStep={currentStep} />
      <FormProvider {...formContext}>
        {currentStep === 0 && <FormPersonalUserData onSubmit={onSubmit} />}

        {currentStep === 1 && <FormDoctorData onSubmit={onSubmit} />}

        {currentStep === 2 && <CompletedForm />}
      </FormProvider>

      {/*  Navigation buttons  */}
      <NavigationButton
        currentStep={currentStep}
        handlePrevStep={handlePrevStep}
        handleNextStep={handleNextStep}
      />
    </section>
  );
}
