"use client";
import { AgendamentosTable } from "@/components/agendamentos/AgendamentosTable";
import { Info } from "@/components/homepage/info";
import { Welcome } from "@/components/homepage/welcome";
import { Main } from "@/components/main/main";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import {
  Agendamento,
  Consulta,
  ResponseData,
  User,
} from "@/utils/interfaces/AgendaResponseInterfaces";
import { requestVariables } from "@/utils/requestVariables/requestVariables";
import { Spinner } from "@/components/spinner";

export default function FuturosAgendamentos() {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const [loading, setLoading] = useState(true); // Add this line
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    const fetchAgendamentos = async () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const formattedYesterday = yesterday.toISOString();

      const jsonQuery = encodeURIComponent(
        JSON.stringify({
          [`${requestVariables.role}Id@igual`]: `${requestVariables.userId}@System.String`,
          "Data@maior": `${formattedYesterday}@System.DateTime`,
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

        console.log(response.data); // Log the response data

        const responseData: ResponseData = response.data;
        const consultas: Consulta[] = responseData.$values;

        const agendamentos: Agendamento[] = consultas.map(
          (agendamento: Consulta) => {
            const nome =
              requestVariables.role === "Paciente"
                ? agendamento.psicologo.user.nome
                : agendamento.paciente.user.nome;
            return { nome, data: agendamento.data };
          }
        );
        const usuario: User =
          requestVariables.role === "Paciente"
            ? consultas[0].paciente.user
            : consultas[0].psicologo.user;

        console.log(agendamentos); // Log the agendamentos
        setAgendamentos(agendamentos);
        setUsuario(usuario.nome);
        setLoading(false); // Add this line
      } catch (error) {
        setLoading(false); // Add this line
      }
    };

    fetchAgendamentos();
  }, [requestVariables.userId, requestVariables.role, requestVariables.token]);

  return (
    <Main>
      <div className="flex flex-col gap-5 justify-center">
        <Welcome usuario={usuario} loading = {loading}/>
        {loading ? (
          <Spinner />
        ) : (
          <AgendamentosTable agendamentos={agendamentos} />
        )}
      </div>
    </Main>
  );
}
