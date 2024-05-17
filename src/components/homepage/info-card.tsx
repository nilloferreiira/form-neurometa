interface InfoCardProps {
  title: string | null;
  description: string;
  link: string | null;
  src: string;
}

export function InfoCard({ title, description, src, link }: InfoCardProps) {
  return (
    <div className="container p-4 rounded-md flex flex-col w-4/5 lg:w-5/12 md:h-[270px] justify-center items-center gap-5 bg-blue-700 shadow-md">
      <article className="flex flex-col gap-4">
        {title !== null && <h3 className="font-bold text-slate-300">Tem alguma duvida ?</h3>}
        <p className="text-white">
          {description}
        {link !== null && <a className="font-semibold underline" href={link!}> clicando aqui</a>}
        </p>
      </article>

      <img className="w-5/12" src={src} />
    </div>
  );
}
