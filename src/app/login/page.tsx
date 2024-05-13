
import { Main } from "@/components/main/main";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";


export default function loginFormPage() {
  return (
    <Main>
      <div className="">
        <h1>Login !</h1>
        <div className="w-full flex justify-center items-center h-full flex-col p-5 rounded-lg shadow-2xl gap-5">
         <label>
            <span className="text-gray-500 text-sm">Username</span>
          <Input
            className="bg-transparent"
            placeholder="Seu login"
            type="text"
          />
          </label>
          <label>
            <span className="text-gray-500 text-sm">Password</span>
          <Input
            className="bg-transparent"
            placeholder="Sua senha"
            type="password"
          />
          <a className="underline text-sm justify-self-start">Esqueci a senha</a>
          </label>

          
          <Button>Entrar</Button>
        </div>
      </div>
    </Main>
    
  );
}
