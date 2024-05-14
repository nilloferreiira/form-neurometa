// Info.tsx
export function Info() {
    return (
      <div className="container flex flex-row w-8/12">
        <div className="container p-4 rounded-md flex flex-col w-5/12 justify-center items-center gap-5 bg-blue-700 shadow-md">
          <p className="text-white">
            Você consegue acessar nossa lista de psicólogos prontos para te
            atender, no menu lateral a esquerda
          </p>
          <img className="w-8/12" src="https://i.imgur.com/WHCUGTO.png"></img>
        </div>
        <div className="container p-4 rounded-md flex flex-col w-5/12 justify-center items-center gap-5 bg-blue-700 shadow-md">
          <article className="flex flex-col gap-4">
            <h3 className="font-bold text-slate-300">Tem alguma duvida ?</h3>
            <p className="text-white">
              Entre em contato com nosso suporte{" "}
              <a className="text-black underline">clicando aqui</a>
            </p>
          </article>
  
          <img className="w-5/12" src="https://i.imgur.com/Jb5dadU.png"></img>
        </div>
      </div>
    );
  }