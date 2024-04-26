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
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import errorsToRecord from "@hookform/resolvers/io-ts/dist/errorsToRecord.js";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  confirmPassword: z.string(),
  cpf: z.string().length(11),
  rg: z.string().min(8).max(11),
  phoneNumber: z.string().length(11),
  gender: z.string().length(1, { message: "Por favor, selecione uma opção!" }),
  birthDate: z.string(),
  // doctor info
  doctorName: z.string(),
  uf: z.string().length(2).toUpperCase(),
  crm: z.string(),
  especialidade: z.string().max(25).optional(),
  areaAtuacao: z.string().max(50).optional(),
  diagnostico: z.string().min(3).max(255),
  cid: z.string().max(12),
});
type FormSchema = z.infer<typeof formSchema>;

export function Form() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-4/5 mx-auto flex  justify-around"
    >
      {/* first form  */}
      <div className="w-1/5 p-2 m-4 flex flex-col gap-5">
        <h1>Seus dados pessoais</h1>
        <Input
          className="bg-transparent"
          placeholder="Seu nome"
          {...register("name")}
          type="text"
        />
        <Input
          className="bg-transparent"
          placeholder="Seu email"
          {...register("email")}
          type="email"
        />
        <Input
          className="bg-transparent"
          placeholder="Sua senha"
          {...register("password")}
          type="password"
        />
        <Input
          className="bg-transparent"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
          type="password"
        />

        <Input
          className="bg-transparent"
          placeholder="(79)999999999"
          {...register("phoneNumber")}
          type="number"
        />
        <Input
          className="bg-transparent"
          placeholder="Seu CPF"
          {...register("cpf")}
          type="number"
        />

        <Input
          className="bg-transparent"
          placeholder="Seu RG"
          {...register("rg")}
          type="text"
        />

        <Select
          {...register("gender")}
          onValueChange={(value) => setValue("gender", value)}
        >
          <SelectTrigger className="bg-transparent">
            <SelectValue placeholder="Seu gênero" />
          </SelectTrigger>
          {errors.gender && (
            <span className="text-red-500">{errors.gender.message}</span>
          )}
          <SelectContent className="bg-zinc-800" {...register("gender")}>
            <SelectItem className="bg-zinc-900 text-zinc-50" value="M">
              Masculino
            </SelectItem>
            <SelectItem className="bg-zinc-900 text-zinc-50" value="F">
              Feminino
            </SelectItem>
            <SelectItem className="bg-zinc-900 text-zinc-50" value="O">
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
      </div>

      <div className="w-1/5 p-2 m-4 flex flex-col gap-5">
        <h1>Dados médicos</h1>
        <Input
          className="bg-transparent"
          placeholder="Nome do médico que te atendeu"
          {...register("doctorName")}
          type="text"
        />
        <Input
          className="bg-transparent"
          placeholder="CRM do médico"
          {...register("crm")}
          type="number"
        />
        <Select 
           {...register("uf")}
           onValueChange={(value) => setValue("uf", value)}
        >
          <SelectTrigger className="bg-transparent">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-800">
            <SelectItem className="bg-zinc-900 text-zinc-50" value="SE">
              SE
            </SelectItem>
          </SelectContent>
        </Select>
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
        <Input
          className="bg-transparent"
          placeholder="CID"
          {...register("cid")}
          type="text"
        />
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
}
