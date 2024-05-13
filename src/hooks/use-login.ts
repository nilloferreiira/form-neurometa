import { LoginSchema } from "@/utils/login-schema";
import Cookies from "js-cookie";
import { api } from "@/lib/api";
// import { useRouter } from "next/navigation";

export function useLogin() {
  async function handleLogin({ email, password }: LoginSchema) {
    try {
      const responseToken = await api.post("/login", {
        email,
        password,
      });

      const { token } = responseToken.data;
      Cookies.set("token", token, { path: "/", expires: 30 });

      // router.push("/upload");

      return true;
    } catch (e) {
      console.log(`Erro ao realizar o login: ${e}`);
      return false;
    }
  }

  return { handleLogin };
}
