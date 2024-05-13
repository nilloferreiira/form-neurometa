import { StepProps } from "./interfaceSteps";

export const steps: StepProps[] = [
  {
    id: 1,
    stepName: "Dados pessoais",
    fields: [
      "name",
      "email",
      "password",
      "confirmPassword",
      "cpf",
      "rg",
      "phoneNumber",
      "gender",
      "birthDate",
    ],
  },
  {
    id: 2,
    stepName: "Dados médicos",
    fields: ["doctorName", "uf", "crm", "diagnostico", "cid"],
  },
  { id: 3, stepName: "Dados Enviados!" },
];
