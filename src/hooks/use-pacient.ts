import { backend } from "@/lib/backend";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { User } from "./use-user";
import { jwtResponse } from "@/utils/jwt-response-interface";

export interface Pacient {
  pacienteId: string;
  fotoRgFrente: string;
  fotoRgVerso: string;
  comprovanteResidencia: string;
  relatorioMedico: string;
  pdfFormatado: string;
  crmMedico: number;
  nomeMedico: string;
  cid: string;
  ufCrm: string;
  user: User;
}

export async function usePacient() {
  const jwt = Cookies.get("jwtToken");

  if (!jwt) {
    throw new Error("Back-end unauthenticated.");
  }

  const decoded: jwtResponse = jwtDecode(jwt);

  const pacientId = { PacienteId: decoded.id };

  try {
    const pacientResponse = await backend.get(
      `/api/Paciente/Get/${encodeURIComponent(JSON.stringify(pacientId))}`,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    const pacient = pacientResponse.data;

    return pacient;
  } catch (e) {
    console.log(`Erro usePacient(): ${e}`);
  }
}
