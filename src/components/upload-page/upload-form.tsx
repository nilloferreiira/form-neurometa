'use client'

import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const uploadFormSchema = z.object({
  file: z.instanceof(FileList).transform((list) => list.item(0)!)
  .refine(file => file.size <= 5 * 1024 * 1024, 'O arquivo precisa ter no máximo 5mb!'),
});

type UploadFormSchema = z.infer<typeof uploadFormSchema>;

export function UploadForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<UploadFormSchema>({
    resolver: zodResolver(uploadFormSchema),
  });
  
  const onSubmit: SubmitHandler<UploadFormSchema> = (data) => {
    console.log(data.file);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-3/4 flex flex-col gap-2 items-center justify-center"
    >
      <Input
        type="file"
        {...register("file")}
        className={`
        w-full bg-zinc-50
        outline-none
        transition-all 
        cursor-pointer 
        border-2 border-royleBlue/50 
        focus-visible:ring-royleBlue/40 
        hover:border-royleBlue hover:bg-zinc-100 
        `}
      />

      

      {errors.file && <span className="text-sm md:text-base font-semibold text-red-500">{errors.file.message}</span>}

      <Button className="bg-royleBlue hover:bg-royleBlue/90">Enviar</Button>
    </form>
  );
}
