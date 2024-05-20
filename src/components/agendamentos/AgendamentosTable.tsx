"use client";
import * as React from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Consulta } from "@/utils/interfaces/AgendaResponseInterfaces";
import UserInfoDialog from "./userInfoPopup";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { CancelarConsulta } from "./cancelarConsultaDialog";
import { useState } from "react";
import { createHash } from "crypto";

interface Agendamento {
  nome: string;
  data: string;
}

interface AgendamentosTableProps {
  agendamentos: Agendamento[];
  consultas: Consulta[];
  role: string;
}

export const AgendamentosTable: React.FC<AgendamentosTableProps> = ({
  agendamentos,
  consultas,
  role,
}) => {
  const [consultasState, setConsultasState] = useState(consultas);

  const handleDeleteSuccess = (consulta: Consulta) => {
    setConsultasState(consultasState.filter((c) => c !== consulta));
    alert("Consulta deletada com sucesso");
  };

  const generateChannelName = (consulta: Consulta) => {
    // Gerar o hash SHA-256 dos IDs do psicólogo e do paciente
    const hashPsicologo = createHash("sha256")
      .update(consulta.psicologoId)
      .digest("hex")
      .slice(-4);
    const hashPaciente = createHash("sha256")
      .update(consulta.pacienteId)
      .digest("hex")
      .slice(-4);

    // Retornar o nome do canal com os hashes dos IDs
    return `Psicologo${hashPsicologo}fimPaciente${hashPaciente}`;
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold text-center">Agendamentos</h1>
      <br></br>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border items-center justify-center border-gray-300 p-3 bg-gray-300">
              Nome
            </th>
            <th className="border items-center justify-center border-gray-300 p-3 bg-gray-300">
              Data
            </th>
            <th className="border items-center justify-center border-gray-300 p-3 bg-gray-300">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {consultasState.map((consulta, index) => (
            <tr key={index} className="even:bg-gray-100">
              <td className="border text-center border-gray-300 p-3">
                {role === "Paciente"
                  ? consulta.psicologo.user.nome
                  : consulta.paciente.user.nome}
              </td>
              <td className="border text-center border-gray-300 p-3">
                {new Date(consulta.data).toLocaleString()}
              </td>
              <td className="border items-center justify-center border-gray-300 p-3 flex space-x-1">
                <Dialog>
                  <DialogTrigger asChild>
                    <a
                      href="#"
                      className="w-4 h-4 bg-contain bg-no-repeat"
                      style={{
                        backgroundImage:
                          "url('https://cdn-icons-png.flaticon.com/128/126/126486.png')",
                      }}
                    ></a>
                  </DialogTrigger>
                  <UserInfoDialog
                    user={
                      role === "Paciente"
                        ? consulta.psicologo.user
                        : consulta.paciente.user
                    }
                  />
                </Dialog>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <a
                      href="#"
                      className="w-4 h-4 bg-contain bg-no-repeat"
                      style={{
                        backgroundImage:
                          "url('https://cdn-icons-png.flaticon.com/128/126/126497.png')",
                      }}
                    ></a>
                  </AlertDialogTrigger>
                  <CancelarConsulta
                    consulta={consulta}
                    onDeleteSuccess={() => handleDeleteSuccess(consulta)}
                  />
                </AlertDialog>
                {/* Ícone que deve levar o psicólogo ou o paciente para o channel da chamada */}
                <a
                  href={`/consulta?channel=defaultChannel`} // Passe os parâmetros na URL
                  className="w-4 h-4 bg-contain bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url('https://cdn-icons-png.flaticon.com/128/126/126467.png')",
                  }}
                ></a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
