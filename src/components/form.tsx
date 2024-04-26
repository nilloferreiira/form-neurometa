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

const formSchema = z
  .object({
    name: z.string().min(2, "Por favor, digite um nome válido!"),
    email: z.string().email({ message: "Por favor, use um email válido!" }),
    password: z
      .string()
      .min(4, "Por favor, use uma senha com mais de 4 caracteres!"),
    confirmPassword: z.string(),
    cpf: z
      .string()
      .length(11, "Por favor, use um CPF válido e apenas os números!"),
    rg: z
      .string()
      .min(8, "Por favor, use um CPF válido: 111.111-1")
      .max(11, "Por favor, use um CPF válido: 111.111-1"),
    phoneNumber: z
      .string()
      .length(11, "Por favor, use um número de telefone válido."),
    gender: z.string().length(1, {
      message: "Por favor, selecione uma opção!", //arrumar o erro
    }),
    birthDate: z.string().date("Por favor, selecione uma data"),
    // doctor info
    doctorName: z
      .string()
      .min(9, { message: "Por favor, digite um nome válido!" }),
    uf: z.string().length(2, "Por favor, selecione uma opção!").toUpperCase(), //arrumar o erro
    crm: z.string().min(3, "Por favor digite um CRM válido!"),
    especialidade: z.string().max(25).optional(),
    areaAtuacao: z.string().max(50).optional(),
    diagnostico: z
      .string()
      .min(3, "Por favor, digite um diagnóstico válido!")
      .max(
        255,
        "Por favor, digite um diagnóstico com no máximo 255 caracteres"
      ),
    cid: z.string().max(12, "Por favor, digite um CID válido!"),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas precisam ser iguais!",
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
          <span className="text-red-500">{errors.confirmPassword.message}</span>
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
        {errors.rg && <span className="text-red-500">{errors.rg.message}</span>}
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
        {errors.birthDate && (
          <span className="text-red-500">{errors.birthDate.message}</span>
        )}
      </div>

      {/* Second form  */}
      <div className="w-1/5 p-2 m-4 flex flex-col gap-5">
        <h1>Dados médicos</h1>
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
          <SelectTrigger className="bg-transparent">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-800">
            <SelectItem className="bg-zinc-900 text-zinc-50" value="SE">
              SE
            </SelectItem>
          </SelectContent>
        </Select>
        {errors.uf && <span className="text-red-500">{errors.uf.message}</span>}
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
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
}
