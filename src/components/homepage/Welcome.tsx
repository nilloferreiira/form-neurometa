// Welcome.tsx
export function Welcome() {
    return (
      <div className="container bg-white p-4 rounded-md flex flex-row w-8/12 justify-between shadow-md border border-blue-600">
        <article className="flex flex-col">
          <h3 className="text-slate-600 font-bold">Seja bem vindo @!</h3>
          <p className="text-slate-500">
            Não importa que você vá devagar contanto que você não pare! Pois
            Quanto mais fortes forem suas provações, maiores serão suas
            vitórias. //mais texto
          </p>
        </article>
        <img src="https://i.imgur.com/IAZLwZ9.png"></img>
      </div>
    );
  }