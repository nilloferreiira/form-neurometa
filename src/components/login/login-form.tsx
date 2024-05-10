"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorSpan } from "../error-span";
import { LoginSchema, loginSchema } from "@/utils/login-schema";
import { useLogin } from "@/hooks/use-login";
import { toast } from "../ui/use-toast";
import { returnToUpload } from "@/hooks/return-to-upload";


export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    const login = useLogin(data);
    if (!login) {
      toast({
        title: "Erro ao fazer login",
        variant: "destructive",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 justify-center"
    >
      <Input type="email" placeholder="email" {...register("email")} />
      {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
      <Input type="text" placeholder="senha" {...register("password")} />
      {errors.password && <ErrorSpan>{errors.password.message}</ErrorSpan>}
      <Button className="bg-royleBlue hover:bg-royleBlue/80 text-zinc-50 p-2 text-sm md:text-base rounded-md font-regular">
        Login
      </Button>
    </form>
  );
}
