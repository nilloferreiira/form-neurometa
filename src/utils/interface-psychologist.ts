// Interface para representar um psicólogo
export interface Psychologist {
  id: string;
  crp: string;
  descricao: string;
  especialidade: string;
  carteiraCrp: string;
  user: {
    id: string;
    nome: string;
    dataNascimento: string; //2024-05-16T19:00:42.363Z,
    fotoPerfil: string;
    enderecoCompleto: string;
    role: string;
  };
}
