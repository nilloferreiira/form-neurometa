"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorSpan } from "../error-span";
import { api } from "@/lib/api";
import { useToast } from "../ui/use-toast";

const isPDF = (file: File) => {
  return file.type === "application/pdf";
};

const uploadFormSchema = z.object({
  file: z
    .instanceof(FileList)
    .transform((list) => list.item(0)!)
    .refine((file) => isPDF(file), "O arquivo deve ser um PDF")
    .refine(
      (file) => file.size <= 5 * 1024 * 1024,
      "O arquivo precisa ter no máximo 5mb!"
    ),
});

type UploadFormSchema = z.infer<typeof uploadFormSchema>;

export function UploadForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UploadFormSchema>({
    resolver: zodResolver(uploadFormSchema),
  });

  const { toast } = useToast()

  const onSubmit: SubmitHandler<UploadFormSchema> = async (data) => {
    const pdf = data.file;

    const form = new FormData();
    form.append("file", pdf);

    await api
      .post("/upload/2462e529-4f50-43b1-9d4b-fb70ceea1d04", form, {
        headers: { "Content-Type": "application/pdf" },
      })
      .then(() => toast({
        title: 'Arquivo enviado com sucesso!'
      }))
      .catch((error) => {
        toast({
          title: 'Erro ao enviar o arquivo!',
          variant: "destructive"
        })
        
        console.log(error)
      });
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

      {errors.file && <ErrorSpan>{errors.file.message}</ErrorSpan>}
      <Button className="bg-royleBlue hover:bg-royleBlue/90">Enviar</Button>
      {errors.root && <ErrorSpan>{errors.root.message}</ErrorSpan>}
    </form>
  );
}
