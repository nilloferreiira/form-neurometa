import { InfoCard } from "./info-card";

// Info.tsx
export function Info() {
  return (
    <div className="container flex flex-col items-start justify-center  md:flex-row w-full gap-5 lg:w-8/12 mx-auto">
      <InfoCard
        description={
          "Você consegue acessar nossa lista de psicólogos prontos para te atender, no menu lateral a esquerda "
        }
        src={"https://i.imgur.com/WHCUGTO.png"}
        title={null}
        link={null}
      />
      <InfoCard
        title={"Tem alguma duvida ?"}
        link={"#"}
        description={"Entre em contato com nosso suporte"}
        src={"https://i.imgur.com/Jb5dadU.png"}
      />
    </div>
  );
}
