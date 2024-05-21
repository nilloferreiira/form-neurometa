import { api } from "@/lib/api";
import { backend } from "@/lib/backend";
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

  //   const backendResponse = await backend.post('/RegisterUser', {
  //     registerUser: {
  //               email: data.email,
  //               password: data.password,
  //               nome: data.name,
  //               passwordConfirmation: data.confirmPassword,
  //               agreeTerms: true,
  //               enderecoCompleto: "endereço completo",
  //               role: "Paciente",
  //               fotoPerfil: "Zm90b3JndmVyc28=",
  //               telefone: data.phoneNumber,
  //               cpf: data.cpf,
  //               rg: data.rg
  //             },
  //             paciente: {
  //               fotoRgFrente: "Zm90b3JndmVyc28=",
  //               fotoRgVerso: "Zm90b3JndmVyc28=",
  //               comprovanteResidencia: "Zm90b3JndmVyc28=",
  //               relatorioMedico: data.diagnostico,
  //               pdfFormatado: "Zm90b3JndmVyc28=",
  //               crmMedico: data.crm,
  //               nomeMedico: data.doctorName,
  //               cid: data.cid,
  //               ufCrm: data.uf
  //             }
  // })

  //   const jwtToken  = backendResponse.data;
  //   console.log(jwtToken)
  //   const jwt = jwtToken.data.token;
  //   Cookies.set("jwtToken", jwt, { path: "/", expires: 15})

    const { token } = response.data;

    Cookies.set("token", token, { path: "/", expires: 30 });

    return true;
  } catch (e) {
    console.log(`Erro durante o cadastro: ${e}`);
    return false;
  }
}
