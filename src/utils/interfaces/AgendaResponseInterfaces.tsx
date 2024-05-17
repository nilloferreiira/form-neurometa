export interface Agendamento {
  nome: string;
  data: string;
}

export interface User {
  $id: string;
  id: string;
  nome: string;
  dataNascimento: string;
  fotoPerfil: string;
  enderecoCompleto: string;
  role: string;
}

export interface Paciente {
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

export interface Psicologo {
  $id: string;
  psicologoId: string;
  crp: string;
  descricao: string;
  especialidade: string;
  carteiraCrp: string;
  user: User;
}

export interface Consulta {
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

export interface ResponseData {
  $id: string;
  $values: Consulta[];
}