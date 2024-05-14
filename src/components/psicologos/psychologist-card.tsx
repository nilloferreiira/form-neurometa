"use client";

import { Psicologo } from "@/utils/interface-psicologo";

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export function PsychologistsCard(psicologo: Psicologo) {
  return (
    <div className="w-4/5 bg-white p-2 rounded-xl">
      <Accordion type="single" collapsible>
        <AccordionItem value={psicologo.id.toString()}>
          <AccordionTrigger className="w-full focus-visible:ring-0 outline-none">
            <div className="flex flex-row items-start justify-start gap-4">
              <Avatar>
                <AvatarImage
                  className="size-12 rounded-full"
                  src={psicologo.profilePicture}
                  alt={psicologo.nome}
                />
                <AvatarFallback>{psicologo.nome.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <h3 className="font-bold text-xl text-black ">
                  {psicologo.nome}
                </h3>
                <p className="text-sm text-gray-400">
                  {psicologo.areaEspecializacao}
                </p>
                <p className="text-sm text-gray-400">{psicologo.numCRP}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col items-start justify-center max-w-96 gap-4 text-gray-400 pl-16">
              {psicologo.descricao}
              <DialogTrigger>
                <Button className="bg-royleBlue hover:bg-royleBlue/70 text-white p-2 text-sm rounded-md">
                  Agendar Consulta
                </Button>
              </DialogTrigger>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
