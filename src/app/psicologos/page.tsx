import { Main } from "@/components/main/main";
import { CardPsicologo } from "@/components/psicologos/CardPsicologo";

export default function homePage() {
  return (
    <Main>
      <div className="flex flex-wrap gap-5 justify-start p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <CardPsicologo
          nome="Adriana de Souza"
          especialidade="Terapia Getsalt"
          nroCrp="123456"
          fotoPerfil="https://github.com/shadcn.png"
          descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of"
          id="1"
        />
        <CardPsicologo
          nome="Marcio de Abreu"
          especialidade="Terapia Cognitiva Comportamental"
          nroCrp="123456"
          fotoPerfil="https://github.com/shadcn.png"
          descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of"
          id="2"
        />
        <CardPsicologo
          nome="Marcio de Abreu"
          especialidade="Terapia Cognitiva Comportamental"
          nroCrp="123456"
          fotoPerfil="https://github.com/shadcn.png"
          descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of"
          id="3"
        />
        <CardPsicologo
          nome="Marcio de Abreu"
          especialidade="Terapia Cognitiva Comportamental"
          nroCrp="123456"
          fotoPerfil="https://github.com/shadcn.png"
          descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of"
          id="4"
        />
        <CardPsicologo
          nome="Marcio de Abreu"
          especialidade="Terapia Cognitiva Comportamental"
          nroCrp="123456"
          fotoPerfil="https://github.com/shadcn.png"
          descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of"
          id="5"
        />
        <CardPsicologo
          nome="Marcio de Abreu"
          especialidade="Terapia Cognitiva Comportamental"
          nroCrp="123456"
          fotoPerfil="https://github.com/shadcn.png"
          descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of"
          id="6"
        />
      </div>
    </Main>
  );
}
