"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorSpan } from "../error-span";
import { LoginSchema, loginSchema } from "@/utils/login-schema";
import { useLogin } from "@/hooks/use-login";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    const { handleLogin } = useLogin();
    try {
      toast({
        title: "Aguarde um momento!",
        description:
          "Devido a latência do servidor o processo pode demorar ate 50 segundos",
        variant: "default",
      });

      const isLoginsucceeded = await handleLogin(data);

      if (!isLoginsucceeded) {
        toast({
          title: "Erro ao fazer login",
          variant: "destructive",
        });

        throw new Error("Erro ao fazer o login");
      }
      return router.push("/upload");
    } catch (e) {
      toast({
        title: "Erro ao fazer login",
        variant: "destructive",
      });

      console.log(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 justify-center"
    >
      <Input type="email" placeholder="email" {...register("email")} />
      {errors.email && <ErrorSpan>{errors.email.message}</ErrorSpan>}
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="senha"
        {...register("password")}
      />
      <div className="flex gap-2 items-center">
        <Checkbox
          id="showPassword"
          onCheckedChange={() => setShowPassword(!showPassword)}
        />{" "}
        <Label htmlFor="showPassword">Mostrar senha</Label>
      </div>
      {errors.password && <ErrorSpan>{errors.password.message}</ErrorSpan>}
      <Button
        disabled={isSubmitting}
        className="bg-royleBlue hover:bg-royleBlue/80 text-zinc-50 p-2 text-sm md:text-base rounded-md font-regular"
      >
        {isSubmitting ? "Logando" : "Login"}
      </Button>
    </form>
  );
}
