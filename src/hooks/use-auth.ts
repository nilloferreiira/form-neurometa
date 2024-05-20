import { api } from "@/lib/api";
import { FormSchema } from "@/utils/formSchema";
import Cookies from "js-cookie";

export async function useAuth(data: FormSchema) {
  try {
    const response = await api.post("/register", {
      name: data.name,
      email: data.email,
      password: data.password,
      cpf: data.cpf,
      rg: data.rg,
      phoneNumber: data.phoneNumber,
      gender: data.gender,
      birthDate: data.birthDate,
      doctorName: data.doctorName,
      uf: data.uf,
      crm: data.crm,
      diagnostico: data.diagnostico,
      cid: data.cid,
      especialidade: data.especialidade,
      areaAtuacao: data.areaAtuacao,
    });

    const { token } = response.data;

    Cookies.set("token", token, { path: "/", expires: 30 });

    return true;
  } catch (e) {
    console.log(`Erro durante o cadastro: ${e}`);
    return false;
  }
}
