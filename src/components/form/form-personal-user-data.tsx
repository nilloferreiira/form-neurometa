import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { FormSchema } from "@/utils/formSchema";
import { ErrorSpan } from "../error-span";


interface FormProps {
  onSubmit: SubmitHandler<FormSchema>;
}

export function FormPersonalUserData({ onSubmit }: FormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useFormContext<FormSchema>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mx-auto flex justify-around"
    >
      
        <div className="w-3/4 md:w-1/2 p-2 m-4 flex flex-col ml-10 gap-5">
          <Input
            className="bg-transparent"
            placeholder="Seu nome"
            {...register("name")}
            type="text"
          />
          {errors.name && (
            <ErrorSpan>{errors.name.message}</ErrorSpan>
          )}
          <Input
            className="bg-transparent"
            placeholder="Seu email"
            {...register("email")}
            type="email"
          />
          {errors.email && (
            <ErrorSpan>{errors.email.message}</ErrorSpan>
          )}
          <Input
            className="bg-transparent"
            placeholder="Sua senha"
            {...register("password")}
            type="password"
          />
          {errors.password && (
            <ErrorSpan>{errors.password.message}</ErrorSpan>
          )}
          <Input
            className="bg-transparent"
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
            type="password"
          />
          {errors.confirmPassword && (
            <ErrorSpan>
              {errors.confirmPassword.message}
            </ErrorSpan>
          )}

          <Input
            className="bg-transparent"
            placeholder="(79)999999999"
            {...register("phoneNumber")}
            type="number"
          />
          {errors.phoneNumber && (
            <ErrorSpan>{errors.phoneNumber.message}</ErrorSpan>
          )}
          <Input
            className="bg-transparent"
            placeholder="Seu CPF"
            {...register("cpf")}
            type="text"
          />
          {errors.cpf && (
            <ErrorSpan>{errors.cpf.message}</ErrorSpan>
          )}
          <Input
            className="bg-transparent"
            placeholder="Seu RG"
            {...register("rg")}
            type="text"
          />
          {errors.rg && (
            <ErrorSpan>{errors.rg.message}</ErrorSpan>
          )}
          <Select
            {...register("gender")}
            onValueChange={(value) => setValue("gender", value)}
          >
            <SelectTrigger className="bg-transparent focus:ring-2 focus:ring-royleBlue/50">
              <SelectValue placeholder="Seu gênero" />
            </SelectTrigger>
            {errors.gender && (
              <ErrorSpan>{errors.gender.message}</ErrorSpan>
            )}
            <SelectContent className="bg-royleBlue/20" {...register("gender")}>
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
            <ErrorSpan>{errors.birthDate.message}</ErrorSpan>
          )}
        </div>
     
    </form>
  );
}
