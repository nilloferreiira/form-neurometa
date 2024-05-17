"use client";
import * as React from 'react';
// AgendamentosTable.tsx
interface Agendamento {
  nome: string;
  data: string;
}

interface AgendamentosTableProps {
  agendamentos: Agendamento[];
}

export const AgendamentosTable: React.FC<AgendamentosTableProps> = ({ agendamentos }) => (
    <div className='container'>
    <h1 className="text-2xl font-bold text-center">Agendamentos</h1>
    <br></br>
  <table className="w-full border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="border items-center justify-center border-gray-300 p-3 bg-gray-300">Nome</th>
        <th className="border items-center justify-center border-gray-300 p-3 bg-gray-300">Data</th>
        <th className="border items-center justify-center border-gray-300 p-3 bg-gray-300">Ações</th>
      </tr>
    </thead>
    <tbody>
      {agendamentos.map((agendamento, index) => (
        <tr key={index} className="even:bg-gray-100">
          <td className="border text-center border-gray-300 p-3">{agendamento.nome}</td>
          <td className="border text-center border-gray-300 p-3">{new Date(agendamento.data).toLocaleString()}</td>
          <td className="border items-center justify-center border-gray-300 p-3 flex space-x-1">
            <a href="#" className="w-4 h-4 bg-contain bg-no-repeat" style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/128/126/126486.png')" }}></a>
            <a href="#" className="w-4 h-4 bg-contain bg-no-repeat" style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/128/126/126516.png')" }}></a>
            <a href="#" className="w-4 h-4 bg-contain bg-no-repeat" style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/128/126/126497.png')" }}></a>
            <a href="#" className="w-4 h-4 bg-contain bg-no-repeat" style={{ backgroundImage: "url('https://cdn-icons-png.flaticon.com/128/126/126467.png')" }}></a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>
);