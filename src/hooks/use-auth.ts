import { api } from "@/lib/api";
import { handleMedicalReportBase64 } from "@/utils/convert-to-base64";
import { FormSchema } from "@/utils/formSchema";

export async function useAuth(data: FormSchema) {
  try {
    const { medicalReportBase64 } = await handleMedicalReportBase64(data.medicalReport)
   
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
      medicalReport: medicalReportBase64,
    });

    if (response.status !== 201) {
      console.log("Erro ao validar o usuario");
      console.log(response.data.message);
    }

    console.log("usuario cadastrado");

    return true;
  } catch (e) {
    console.log(`Erro durante o cadastro: ${e}`);
    return false;
  }
}
