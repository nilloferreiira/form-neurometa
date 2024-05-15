import { LoginSchema } from "@/utils/login-schema";
import Cookies from "js-cookie";
import { api } from "@/lib/api";
import { backend } from "@/lib/backend";
import { useRouter } from "next/navigation";

export function useLogin() {
  const router = useRouter()

  async function handleLogin({ email, password }: LoginSchema) {
    try {
      await backend.post("/LoginUser", {
        email,
        password,
      });

      const responseToken = await api.post("/login", {
        email,
        password,
      });

      const { token } = responseToken.data;
      Cookies.set("token", token, { path: "/", expires: 30 });

      

      return router.push("/upload");;
    } catch (e) {
      console.log(`Erro ao realizar o login: ${e}`);
      return false;
    }
  }

  return { handleLogin };
}
