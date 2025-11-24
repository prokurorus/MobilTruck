import { Link } from "react-router-dom";

function AndroidCard() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="rounded-[32px] bg-zinc-50 border border-zinc-200 shadow-xl shadow-zinc-200/80 p-8">
        {/* «Солнечное» пятно */}
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-300 blur-3xl opacity-70 pointer-events-none" />

        {/* Лицо-овал */}
        <div className="relative mx-auto h-44 w-44 rounded-[40%] bg-gradient-to-br from-zinc-100 via-zinc-200 to-zinc-300 shadow-inner flex items-center justify-center">
          {/* Глаза */}
          <div className="flex gap-6 items-center justify-center">
            <div className="h-5 w-10 rounded-full bg-white/80 shadow-inner" />
            <div className="h-5 w-10 rounded-full bg-white/80 shadow-inner" />
          </div>

          {/* «Чёлка» / лоб */}
          <div className="absolute top-7 left-1/2 -translate-x-1/2 h-7 w-24 rounded-full bg-gradient-to-b from-white/90 to-zinc-200/70 shadow" />

          {/* Подбородок */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 h-6 w-18 rounded-b-[40%] bg-zinc-200/80" />
        </div>

        {/* Небольшой текст под изображением */}
        <div className="mt-6 text-center text-sm text-zinc-500">
          Цифровой «мозг» холдинга: помогает считать, планировать и расти, но не
          командует и не подчиняется — работает по понятным правилам.
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="wrap py-10 space-y-12">
        {/* HERO-БЛОК */}
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1 text-xs font-medium text-zinc-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Mobil Truck • транспортный холдинг
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900">
                Саморазвивающаяся сеть транспортных компаний
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 max-w-xl">
                Mobil Truck — это не одна фирма, а платформа, на которой водители
                и предприниматели создают свои компании под общим брендом. Прибыль
                делится по простой формуле, а каждый участник понимает, за что он
                получает деньги.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/join"
                className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-zinc-900/20 hover:bg-zinc-800 transition"
              >
                Присоединиться к Mobil Truck
              </Link>
              <Link
                to="/forum"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-2.5 text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-50 transition"
              >
                Перейти на форум
              </Link>
            </div>

            <p className="text-xs text-zinc-500 max-w-md">
              Здесь нет «волшебных» процентов и скрытых условий. Только структура,
              открытые правила и возможность расти: от наёмного водителя — до
              владельца собственной ветки холдинга.
            </p>
          </div>

          <AndroidCard />
        </section>

        {/* КОМУ И ДЛЯ ЧЕГО */}
        <section className="grid gap-6 lg:grid-cols-3">
          {/* ВОДИТЕЛЯМ */}
          <div className="card space-y-3">
            <h2 className="text-xl font-semibold text-zinc-900">Водителям</h2>
            <p className="text-sm text-zinc-600">
              Для тех, кто хочет стабильную загрузку, честные выплаты и понятную
              перспективу роста.
            </p>
            <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
              <li>Работа на европейских грузовиках и маршрутах.</li>
              <li>Прозрачная система оплаты: без «магии» в расчётах.</li>
              <li>Возможность перейти в партнёры и открыть свою компанию.</li>
              <li>
                Поддержка по документам, технике и рабочему режиму в ЕС
                (Немецкое право, паузы, тахограф и т.д.).
              </li>
            </ul>
          </div>

          {/* ПАРТНЕРАМ / ПРЕДПРИНИМАТЕЛЯМ */}
          <div className="card space-y-3">
            <h2 className="text-xl font-semibold text-zinc-900">
              Партнёрам и предпринимателям
            </h2>
            <p className="text-sm text-zinc-600">
              Для тех, кто хочет работать под брендом Mobil Truck и строить
              собственную сеть.
            </p>
            <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
              <li>
                Открытие своей компании (UG/GmbH) с опорой на опыт и структуру
                холдинга.
              </li>
              <li>
                Доступ к общей клиентской базе, бренду и отлаженным процессам.
              </li>
              <li>
                Пассивный доход с созданной тобой сети (ветка дочерних компаний).
              </li>
              <li>
                Понятные договоры: кто за что отвечает и как делится прибыль.
              </li>
            </ul>
          </div>

          {/* СТРУКТУРА ХОЛДИНГА */}
          <div className="card space-y-3">
            <h2 className="text-xl font-semibold text-zinc-900">
              Структура и модель 8%
            </h2>
            <p className="text-sm text-zinc-600">
              В холдинге фиксированная доля прибыли уходит на развитие сети.
              Она делится между теми, кто создает и развивает ветки.
            </p>
            <div className="rounded-xl bg-zinc-50 border border-zinc-200 p-3 text-xs text-zinc-700 space-y-2">
              <p className="font-medium text-zinc-900">
                Пример распределения по уровням (от нижестоящей компании вверх):
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>4% — создателю компании (основателю ветки).</li>
                <li>2% — компании уровнем выше.</li>
                <li>1% — ещё выше.</li>
                <li>0.5% — следующий уровень.</li>
              </ul>
              <p>
                И так далее по убывающей, но в сумме не более фиксированных 8%,
                заложенных под развитие сети. Формула простая и одинакова для
                всех — от первого до последнего участника.
              </p>
            </div>
          </div>
        </section>

        {/* ПРИСОЕДИНИТЬСЯ */}
        <section className="card space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900">
            Как присоединиться
          </h2>
          <p className="text-sm text-zinc-600 max-w-2xl">
            Если ты водитель — начни с простого сообщения и обсуждения условий.
            Если ты предприниматель — обсудим структуру, модель дохода и варианты
            запуска собственной компании в рамках холдинга Mobil Truck.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/join"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-2 text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-50 transition"
            >
              Открыть страницу «Присоединиться»
            </Link>
            <Link
              to="/forum"
              className="inline-flex items-center justify-center rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-700 bg-zinc-50 hover:bg-zinc-100 transition"
            >
              Задать вопросы на форуме
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
