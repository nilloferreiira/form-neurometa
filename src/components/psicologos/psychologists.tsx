"use client";

import { Dialog } from "@radix-ui/react-dialog";
import { PsychologistsCard } from "./psychologist-card";
import { PsychologistsDialog } from "./psychologist-dialog";
import { usePsychologists } from "@/hooks/use-psychologists";

interface SearchProps {
  search: string;
}

export function Psychologists({ search }: SearchProps) {
  const { psychologists } = usePsychologists();
  
  const filteredPsychologists =
    search !== ""
      ? psychologists?.filter((psychologist) =>
          psychologist.user.nome.toLowerCase().includes(search.toLowerCase())
        )
      : psychologists;

  return (
    <>
      {Array.isArray(psychologists) ? (
        filteredPsychologists?.map((psicologo) => (
          <Dialog key={psicologo.user.id}>
            <div className="w-full mx-auto flex items-center justify-center">
              <PsychologistsCard
                id={psicologo.id}
                descricao={psicologo.descricao}
                crp={psicologo.crp}
                especialidade={psicologo.especialidade}
                carteiraCrp={psicologo.carteiraCrp}
                user={{
                  id: psicologo.user.id,
                  nome: psicologo.user.nome,
                  dataNascimento: psicologo.user.dataNascimento,
                  fotoPerfil: psicologo.user.fotoPerfil,
                  enderecoCompleto: psicologo.user.enderecoCompleto,
                  role: psicologo.user.role,
                }}
              />
            </div>
            <PsychologistsDialog
              id={psicologo.id}
              descricao={psicologo.descricao}
              crp={psicologo.crp}
              especialidade={psicologo.especialidade}
              carteiraCrp={psicologo.carteiraCrp}
              user={{
                id: psicologo.user.id,
                nome: psicologo.user.nome,
                dataNascimento: psicologo.user.dataNascimento,
                fotoPerfil: psicologo.user.fotoPerfil,
                enderecoCompleto: psicologo.user.enderecoCompleto,
                role: psicologo.user.role,
              }}
            />
          </Dialog>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
