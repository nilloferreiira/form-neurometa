"use client";
import { AgendamentosTable } from "@/components/agendamentos/AgendamentosTable";
import { Info } from "@/components/homepage/info";
import { Welcome } from "@/components/homepage/welcome";
import { Main } from "@/components/main/main";
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

interface Agendamento {
  nome: string;
  data: string;
}

interface User {
  $id: string;
  id: string;
  nome: string;
  dataNascimento: string;
  fotoPerfil: string;
  enderecoCompleto: string;
  role: string;
}

interface Paciente {
  $id: string;
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

interface Psicologo {
  $id: string;
  psicologoId: string;
  crp: string;
  descricao: string;
  especialidade: string;
  carteiraCrp: string;
  user: User;
}

interface Consulta {
  $id: string;
  psicologoId: string;
  data: string;
  pacienteId: string;
  dataInicio: string | null;
  dataFim: string | null;
  nota: string | null;
  comentario: string | null;
  paciente: Paciente;
  psicologo: Psicologo;
}

interface Response {
  $id: string;
  $values: Consulta[];
}

export default function FuturosAgendamentos() {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

  
  const token: any = Cookies.get('jwt');
  if (typeof token !== 'string') {
    console.error('Token is not a string');
    return;
  }
  const header = 'Bearer ' + token;
  const decodedToken: any = jwtDecode(token);
  const userId = decodedToken.id;
  const role = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

  useEffect(() => {
    const fetchAgendamentos = async () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const formattedYesterday = yesterday.toISOString();
      
      const jsonQuery = encodeURIComponent(JSON.stringify({
        [`${role}Id@igual`]: `${userId}@System.String`,
        "Data@maior": `${formattedYesterday}@System.DateTime`
      }));
      
      try {
        const response = await axios.get(`https://neurometaoncoapi.azurewebsites.net/api/Agenda/Find?json=${jsonQuery}`, {
          headers: {
            'Authorization': header,
            'Content-Type': 'application/json'
          }
        });
      
        console.log(response.data);  // Log the response data
      
        const responseData: Response = response.data;
        const consultas: Consulta[] = responseData.$values;
      
        const agendamentos: Agendamento[] = consultas.map((agendamento: Consulta) => {
          const nome = role === "Paciente" ? agendamento.psicologo.user.nome : agendamento.paciente.user.nome;
          return { nome, data: agendamento.data };
        });
        console.log(agendamentos);  // Log the agendamentos
        setAgendamentos(agendamentos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAgendamentos();
  }, [userId, role, token]);

  return (
    <Main>
      <div className="flex flex-col gap-5 justify-center">
        <Welcome />
        <AgendamentosTable agendamentos={agendamentos} />
      </div>
    </Main>
  );
}
