// Definição de tipo para os horários disponíveis
export type HorarioDisponivel = string[]; // Pode ser alterado conforme necessário

// Interface para representar um psicólogo
export interface Psicologo {
    nome: string;
    id: number;
    numCRP: number;
    areaEspecializacao: string;
    descricao: string;
    profilePicture?: string;
    horariosDisponiveis: HorarioDisponivel;

    
}