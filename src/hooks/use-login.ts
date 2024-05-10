import { LoginSchema } from "@/utils/login-schema";
import Cookies from "js-cookie";
import { api } from "@/lib/api";

export async function useLogin({ email, password }: LoginSchema) {
  
  try {
    const responseToken = await api.post("/login", {
        email,
        password,
      });
    
      const { token } = responseToken.data;
      Cookies.set("token", token, { path: "/", expires: 30 });
      return true
  } catch (e) {
    console.log(`Erro ao realizar o login: ${e}`)
    return false
  }
}
