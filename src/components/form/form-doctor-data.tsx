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

interface FormProps {
  onSubmit: SubmitHandler<FormSchema>;
}

export function FormDoctorData({ onSubmit }: FormProps) {
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
      </div>
    </form>
  );
}
