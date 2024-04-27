"use client";

import { Input } from "@/components/ui/input";
import {
  SelectContent,
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { formSchema } from "@/utils/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

type FormSchema = z.infer<typeof formSchema>;

export function Main() {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log(data);
  };

  const [currentStep, setCurrentStep] = useState(0);

  type FieldName = keyof FormSchema;

  const steps = [
    {
      id: 1,
      stepName: "Dados pessoais",
      fields: [
        "name",
        "email",
        "password",
        "confirmPassword",
        "cpf",
        "rg",
        "phoneNumber",
        "gender",
        "birthDate",
      ],
    },
    {
      id: 2,
      stepName: "Dados médicos",
      fields: ["doctorName", "uf", "crm", "diagnostico", "cid"],
    },
    { id: 3, stepName: "Complete" },
  ];

  async function handleNextStep() {
    const fields = steps[currentStep].fields;
    const output = await trigger(fields as FieldName[], { shouldFocus: true });

    if (!output) {
      return;
    }

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(onSubmit)();
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
    <section className="w-4/5 mx-auto flex flex-col items-center justify-center gap-5">
      {/* Steps */}
      <nav className="w-1/2 mx-auto flex items-center justify-around gap-2 p-6">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="w-1/2 flex flex-col items-center justify-center text-center"
          >
            <div className="w-full flex items-center justify-center p-2 space-x-2 text-center">
              <div
                className={`rounded-full size-6 bg-royleBlue text-zinc-50 flex items-center justify-center ${
                  currentStep === index ? "opacity-100" : "opacity-20"
                }`}
              >
                {step.id}
              </div>{" "}
              <span>{step.stepName}</span>
            </div>
            <div
              className={`w-full h-1  ${
                currentStep === index ? "bg-royleBlue/70" : "bg-royleBlue/20"
              }`}
            />
          </div>
        ))}

      </nav>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto flex justify-around"
      >
        {/* first form  */}
        {currentStep === 0 && (
          <div className="w-1/2 p-2 m-4 flex flex-col gap-5">
            <Input
              className="bg-transparent"
              placeholder="Seu nome"
              {...register("name")}
              type="text"
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
            <Input
              className="bg-transparent"
              placeholder="Seu email"
              {...register("email")}
              type="email"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
            <Input
              className="bg-transparent"
              placeholder="Sua senha"
              {...register("password")}
              type="password"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
            <Input
              className="bg-transparent"
              placeholder="Confirme sua senha"
              {...register("confirmPassword")}
              type="password"
            />
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}

            <Input
              className="bg-transparent"
              placeholder="(79)999999999"
              {...register("phoneNumber")}
              type="number"
            />
            {errors.phoneNumber && (
              <span className="text-red-500">{errors.phoneNumber.message}</span>
            )}
            <Input
              className="bg-transparent"
              placeholder="Seu CPF"
              {...register("cpf")}
              type="number"
            />
            {errors.cpf && (
              <span className="text-red-500">{errors.cpf.message}</span>
            )}
            <Input
              className="bg-transparent"
              placeholder="Seu RG"
              {...register("rg")}
              type="text"
            />
            {errors.rg && (
              <span className="text-red-500">{errors.rg.message}</span>
            )}
            <Select
              {...register("gender")}
              onValueChange={(value) => setValue("gender", value)}
            >
              <SelectTrigger className="bg-transparent focus:ring-2 focus:ring-royleBlue/50">
                <SelectValue placeholder="Seu gênero" />
              </SelectTrigger>
              {errors.gender && (
                <span className="text-red-500">{errors.gender.message}</span>
              )}
              <SelectContent
                className="bg-royleBlue/20"
                {...register("gender")}
              >
                <SelectItem className="bg-zinc-50" value="M">
                  Masculino
                </SelectItem>
                <SelectItem className="bg-zinc-50" value="F">
                  Feminino
                </SelectItem>
                <SelectItem className="bg-zinc-50" value="O">
                  Prefiro não indentificar
                </SelectItem>
              </SelectContent>
            </Select>

            <label htmlFor="birthDate">Sua data de nascimento</label>
            <Input
              className="bg-transparent"
              id="birthDate"
              {...register("birthDate")}
              type="date"
            />
            {errors.birthDate && (
              <span className="text-red-500">{errors.birthDate.message}</span>
            )}
          </div>
        )}

        {/* Second form  */}
        {currentStep === 1 && (
          <div className="w-1/5 p-2 m-4 flex flex-col gap-5">
            <Input
              className="bg-transparent"
              placeholder="Nome do médico que te atendeu"
              {...register("doctorName")}
              type="text"
            />
            {errors.doctorName && (
              <span className="text-red-500">{errors.doctorName.message}</span>
            )}
            <Input
              className="bg-transparent"
              placeholder="CRM do médico"
              {...register("crm")}
              type="number"
            />
            {errors.crm && (
              <span className="text-red-500">{errors.crm.message}</span>
            )}
            <Select
              {...register("uf")}
              onValueChange={(value) => setValue("uf", value)}
            >
              <SelectTrigger className="bg-transparent focus:ring-2 focus:ring-royleBlue/50">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent className="bg-royleBlue/20">
                <SelectItem className="bg-zinc-50" value="SE">
                  SE
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.uf && (
              <span className="text-red-500">{errors.uf.message}</span>
            )}
            <Input
              className="bg-transparent"
              placeholder="Especialidade do médico"
              {...register("especialidade")}
              type="text"
            />
            <Input
              className="bg-transparent"
              placeholder="Área de atuação"
              {...register("areaAtuacao")}
              type="text"
            />
            <Input
              className="bg-transparent"
              placeholder="Seu diganóstico"
              {...register("diagnostico")}
              type="text"
            />
            {errors.diagnostico && (
              <span className="text-red-500">{errors.diagnostico.message}</span>
            )}
            <Input
              className="bg-transparent"
              placeholder="CID"
              {...register("cid")}
              type="text"
            />
            {errors.cid && (
              <span className="text-red-500">{errors.cid.message}</span>
            )}
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <span>Dados enviados, aguarde a aprovação do seu cadastro!</span>
          </div>
        )}
      </form>

      {/*  Navigation buttons  */}

      <div className="space-x-10">
        <Button
          disabled={currentStep === 0}
          className="bg-royleBlue hover:bg-royleBlue/90"
          onClick={handlePrevStep}
        >
          Anterior
        </Button>
        <Button
          className="bg-royleBlue hover:bg-royleBlue/90"
          disabled={currentStep === 2}
          onClick={handleNextStep}
        >
          {currentStep === 1 ? "Enviar" : "Próximo"}
        </Button>
      </div>
    </section>
  );
}
