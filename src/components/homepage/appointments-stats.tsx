"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as React from "react";
import { Spinner } from "@/components/spinner";


export function AppointmentStats({ qtdAgendamentos, agendamentosConcluidos, loading } : { qtdAgendamentos: number, agendamentosConcluidos: number, loading: boolean }) {
 
  return (
    <div className="w-3/4 lg:w-2/5 flex flex-col items-center justify-center lg:flex-row bg-white gap-4 shadow-lg rounded-lg mx-auto">
      <div className="w-4/5 flex flex-col items-center justify-center gap-4 leading-6 border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h3 className="font-semibold">Sessões Participadas</h3>
            <h4>
              em {new Date().toLocaleString("default", { month: "long" })}
            </h4>
            <h1 className="font-bold text-royleBlue text-4xl">
              {agendamentosConcluidos}/{qtdAgendamentos}
            </h1>
          </>
        )}
      </div>
      <Link
        className="w-4/5 flex flex-col items-center justify-center"
        href={"/futuros-agendamentos"}
      >
        <h3 className="font-semibold">Futuros Agendamentos</h3>
        <img src="https://i.imgur.com/IhzLj5t.png" />
      </Link>
    </div>
  );
}
