// Componente pai
"use client";
import { AppointmentStats } from "@/components/homepage/appointments-stats";
import { Info } from "@/components/homepage/info";
import { Welcome } from "@/components/homepage/welcome";
import { Main } from "@/components/main/main";
import { useEffect, useState } from "react";
import axios from 'axios';
import { requestVariables } from "@/utils/requestVariables/requestVariables";
import {
  Agendamento,
  Consulta,
  ResponseData,
  User,
} from "@/utils/interfaces/AgendaResponseInterfaces";

export default function HomePage() {
  const [qtdAgendamentos, setqtdAgendamentos] = useState(0);
  const [agendamentosConcluidos, setAgendamentosConcluidos] = useState(0);
  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    const fetchAgendamentos = async () => {
      const now = new Date();
      const firstDayOfMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        1
      ).toISOString();
      const lastDayOfMonth = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        0
      ).toISOString();

      const jsonQuery = encodeURIComponent(
        JSON.stringify({
          [`${requestVariables.role}Id@igual`]: `${requestVariables.userId}@System.String`,
          "Data@maior": `${firstDayOfMonth}@System.DateTime`,
          "Data@menor": `${lastDayOfMonth}@System.DateTime`,
        })
      );

      try {
        const response = await axios.get(
          `https://neurometaoncoapi.azurewebsites.net/api/Agenda/Find?json=${jsonQuery}`,
          {
            headers: {
              Authorization: requestVariables.header,
              "Content-Type": "application/json",
            },
          }
        );

        const responseData: ResponseData = response.data;
        const consultas: Consulta[] = responseData.$values;
        const usuario: User = requestVariables.role === "Paciente" ? consultas[0].paciente.user : consultas[0].psicologo.user;

        const agendamentos: Agendamento[] = consultas.map(
          (agendamento: Consulta) => {
            const nome =
              requestVariables.role === "Paciente"
                ? agendamento.psicologo.user.nome
                : agendamento.paciente.user.nome;
            return { nome, data: agendamento.data };
          }
        );

        setqtdAgendamentos(agendamentos.length);
        setAgendamentosConcluidos(
          //quantidade de consultas.dataFim e consultas.dataInicio não nulas
          consultas.filter(
            (consulta) => consulta.dataFim && consulta.dataInicio
          ).length
        );
        setUsuario(usuario.nome);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchAgendamentos();
  }, [requestVariables.userId, requestVariables.role, requestVariables.token]);

  return (
    <Main>
      <div className="w-full flex flex-col gap-5 items-start justify-center -mt-10">
        <Welcome usuario={usuario} loading={loading} />
        <Info />
        <AppointmentStats
          qtdAgendamentos={qtdAgendamentos}
          agendamentosConcluidos={agendamentosConcluidos}
          loading={loading}
        />
      </div>
    </Main>
  );
}