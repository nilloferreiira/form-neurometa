"use client";
import { Info } from "@/components/homepage/info";
import { StatsAgendamento } from "@/components/homepage/stats";
import { Welcome } from "@/components/homepage/welcome";
import { Main } from "@/components/main/main";
import axios from 'axios'
import{ useEffect, useState } from "react";
interface Agendamento {
  nome: string;
  data: string;
  // include other properties as needed
}
export default function FuturosAgendamentos() {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);
  const pacienteId = '2f4106df-6cee-42f9-a22e-8d65d994b824';
  const token = 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ1c2VyMUBleGFtcGxlLmNvbSIsImlkIjoiNDZjYzVhNmYtZTYxMi00MmNhLWE5NjktYmI2Y2E1MDdlYzcxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiUHNpY29sb2dvIiwiZXhwIjoxNzE1ODE3OTA1fQ.6nRlLBIIXHTx3krgPAaXBVLDAfHX_TKZgxo3T1HEVGw';

  useEffect(() => {
    const fetchAgendamentos = async () => {
      const response = await axios.get(`https://neurometaoncoapi.azurewebsites.net/api/Agenda/AgendasPorPaciente/${pacienteId}`, {
        headers: { Authorization: token }
      });
      const agendamentos: Agendamento[] = await Promise.all(response.data.map(async (agendamento: any) => {
        const responsePsicologo = await axios.get(`https://neurometaoncoapi.azurewebsites.net/api/Psicologo/GetPsicologoUser/${agendamento.psicologoId}`, {
          headers: { Authorization: token }
        });
        return { ...agendamento, nome: responsePsicologo.data.data.descricao };
      }));
      setAgendamentos(agendamentos);
    };
    fetchAgendamentos();
  }, []);
  return (
    <Main>
      <div className="flex flex-col gap-5 justify-center">
        <Welcome />
        <table className="w-full border-collapse border border-gray-300">
            <thead>
                <tr>
                    <th className="border border-gray-300 p-3 bg-gray-300 text-left">Nome</th>
                    <th className="border border-gray-300 p-3 bg-gray-300 text-left">Data</th>
                    <th className="border border-gray-300 p-3 bg-gray-300 text-left">Ações</th>
                </tr>
            </thead>
            <tbody>
                {agendamentos.map((agendamento, index) => (
                  <tr key={index} className="even:bg-gray-100">
                    <td className="border border-gray-300 p-3">{agendamento.nome}</td>
                    <td className="border border-gray-300 p-3">{agendamento.data}</td>
                    <td className="border border-gray-300 p-3 flex space-x-1">
                        <a href="#" className="w-4 h-4 bg-contain bg-no-repeat" style={{backgroundImage: "url('https://cdn-icons-png.flaticon.com/128/126/126486.png')"}}></a>
                        <a href="#" className="w-4 h-4 bg-contain bg-no-repeat" style={{backgroundImage: "url('https://cdn-icons-png.flaticon.com/128/126/126516.png')"}}></a>
                        <a href="#" className="w-4 h-4 bg-contain bg-no-repeat" style={{backgroundImage: "url('https://cdn-icons-png.flaticon.com/128/126/126497.png')"}}></a>
                        <a href="#" className="w-4 h-4 bg-contain bg-no-repeat" style={{backgroundImage: "url('https://cdn-icons-png.flaticon.com/128/126/126467.png')"}}></a>
                    </td>
                  </tr>
                ))}
            </tbody>
        </table>
      </div>
    </Main>
  );
}