// CardPsicologo.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CardPsicologoProps {
  nome: string;
  especialidade: string;
  nroCrp: string;
  fotoPerfil: string;
  descricao: string;
  id: string;
}

export const CardPsicologo: React.FC<CardPsicologoProps> = ({
  nome,
  especialidade,
  nroCrp,
  fotoPerfil,
  descricao,
  id,
}) => {
  return (
    <div className="bg-white p-2 rounded-xl w-96">
      <Accordion
        type="single"
        collapsible
      >
        <AccordionItem value={id}>
          <AccordionTrigger>
            <div className="flex flex-row items-start justify-center gap-4">
              <Avatar>
                <AvatarImage src={fotoPerfil} alt={nome} />
                <AvatarFallback>{nome[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <h3 className="font-bold text-xl text-black ">{nome}</h3>
                <p className="text-sm text-gray-400">{especialidade}</p>
                <p className="text-sm text-gray-400">{nroCrp}</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col max-w-96 gap-4 text-gray-400">
              {descricao}
              <button className="bg-blue-600 max-w-20 text-white p-1 text-sm rounded-md">
                Agendar Consulta
              </button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};