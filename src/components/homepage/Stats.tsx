// StatsAgendamento.tsx
export function StatsAgendamento() {
    return (
      <div className="mt-10 pb-1">
        <div className="relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-2">
                <div className="flex flex-col items-center justify-center border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                    Sessões participadas 04/2024
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-blue-700">
                    2/4
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg  leading-6 font-medium text-gray-500">
                    Futuros agendamentos
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold flex items-center justify-center text-gray-700">
                    <img className="cursor-pointer" src="https://i.imgur.com/IhzLj5t.png"></img>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    );
  }