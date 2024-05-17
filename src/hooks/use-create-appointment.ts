import { backend } from "@/lib/backend";
import Cookies from "js-cookie";

interface AppointmentDataProps {
  psicologoId: string;
  data: string;
  pacienteId: string;
  dataInicio: null;
  dataFim: null;
  nota: null;
  comentario: null;
}

export function useCreateAppointment() {
  const jwt = Cookies.get("jwtToken");

  async function createAppointment(appointmentData: AppointmentDataProps) {
    const createAppointment = await backend.post(
      "/api/Agenda/Create",
      appointmentData,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    return createAppointment;
  }

  return { createAppointment };
}
