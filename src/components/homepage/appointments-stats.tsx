import Link from "next/link";

export function AppointmentStats() {
  return (
    <div className="w-3/4 lg:w-2/5 flex flex-col items-center justify-center lg:flex-row bg-white gap-4 shadow-lg rounded-lg mx-auto">
      <div className="w-4/5 flex flex-col items-center justify-center gap-4 leading-6 border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
        <h3 className="font-semibold">Sessões Participadas</h3>
        <h1 className="font-bold text-royleBlue text-4xl">2/4</h1>
      </div>

      {/* <div className="h-40 w-0.5 bg-black/20 "/> */}

      <Link
        className="w-4/5 flex flex-col items-center justify-center"
        href={"/psicologos"}
      >
        <h3 className="font-semibold">Futuros Agendamentos</h3>
        <img src="https://i.imgur.com/IhzLj5t.png" />
      </Link>
    </div>
  );
}
