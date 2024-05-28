import { Input } from "@/components/ui/input";
import {
  Select, SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { FormSchema } from "@/utils/formSchema";
import { ErrorSpan } from "../error-span";
import { SelectUF } from "./select-uf";


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
          <ErrorSpan>{errors.doctorName.message}</ErrorSpan>
        )}
        <Input
          className="bg-transparent"
          placeholder="CRM do médico"
          {...register("crm")}
          type="number"
        />
        {errors.crm && (
          <ErrorSpan>{errors.crm.message}</ErrorSpan>
        )}
        <Select
          {...register("uf")}
          onValueChange={(value) => setValue("uf", value)}
        >
          <SelectTrigger className="bg-transparent focus:ring-2 focus:ring-royleBlue/50">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
         <SelectUF />
        </Select>
        {errors.uf && <ErrorSpan>{errors.uf.message}</ErrorSpan>}
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
          <ErrorSpan>{errors.diagnostico.message}</ErrorSpan>
        )}
        <Input
          className="bg-transparent"
          placeholder="CID"
          {...register("cid")}
          type="text"
        />
        {errors.cid && (
          <ErrorSpan>{errors.cid.message}</ErrorSpan>
        )}
          <Input
            className="bg-transparent"
            placeholder="relatorio"
            {...register("medicalReport", { required: true }) }
            type="file"
          />
          {/* {errors.medicalReport && (
            <ErrorSpan>{errors.medicalReport.message}</ErrorSpan>
          )} */}
      </div>
    </form>
  );
}
