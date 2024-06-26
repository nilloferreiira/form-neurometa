import { LoginSchema } from "@/utils/login-schema";
import Cookies from "js-cookie";
import { backend } from "@/lib/backend";

export function useLogin() {
  async function handleLogin({ email, password }: LoginSchema) {
    try {
      const backendToken = await backend.post("/LoginUser", {
        email,
        password,
      });

      const jwtToken = backendToken.data;
      const jwt = jwtToken.data.token;
      Cookies.set("jwtToken", jwt, { path: "/", expires: 15 });

      window.location.reload();
      return true;
    } catch (e) {
      console.log(`Erro ao realizar o login: ${e}`);
      return false;
    }
  }

  return { handleLogin };
}
