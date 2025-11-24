import { Link } from "react-router-dom";

function AndroidCard() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-white shadow-xl shadow-zinc-200/70">
        <img
          src="/lovable-uploads/android.png"
          alt="Mobil Truck network illustration"
          className="block w-full h-auto"
        />
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 px-1 text-[11px] text-zinc-600">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span className="uppercase tracking-[0.12em] text-zinc-500 font-semibold">
            MOBIL TRUCK HOLDING
          </span>
        </div>
        <span className="text-[10px] text-zinc-400">
          Reception • prototype platform
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      <div className="wrap py-12 space-y-14">
        {/* HERO-БЛОК: «приёмная холдинга» */}
        <section className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-center">
          {/* Левая часть — спокойная карточка с грузовиком / сетью */}
          <div className="order-2 lg:order-1">
            <AndroidCard />
          </div>

          {/* Правая часть — текст как в приёмной крупной компании */}
          <div className="order-1 space-y-6 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1 text-xs font-medium text-zinc-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Mobil Truck • саморазвивающийся транспортный холдинг
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900">
                Mobil Truck
              </h1>
              <p className="text-base sm:text-lg text-zinc-700 leading-relaxed max-w-xl">
                Добро пожаловать в Mobil Truck. Это не диспетчерская и не кабинет
                начальника колонны. Это приёмная холдинга, который превращает
                обычные транспортные фирмы в единую, цивилизованную сеть компаний.
              </p>
              <p className="text-sm text-zinc-600 max-w-xl">
                Здесь водители, предприниматели и головная компания работают по
                одной понятной схеме: открытая модель прибыли, прозрачные
                договорённости и возможность расти от наёмного водителя до
                владельца собственной ветки.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/structure"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-zinc-900/30 hover:bg-zinc-800 active:bg-zinc-950 transition"
                >
                  Перейти к структуре холдинга
                </Link>
                <Link
                  to="/profit-model"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-2.5 text-xs sm:text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition"
                >
                  Посмотреть модель 8%
                </Link>
              </div>
              <p className="text-xs text-zinc-500 max-w-md">
                Начните со структуры и финансовой модели. Через несколько минут
                станет ясно, подходит ли вам Mobil Truck как место работы,
                партнёрства или запуска собственной компании.
              </p>
            </div>
          </div>
        </section>

        {/* ДЛЯ КОГО ЭТОТ ХОЛДИНГ */}
        <section className="grid gap-6 lg:grid-cols-3">
          {/* ВОДИТЕЛЯМ */}
          <div className="card space-y-3">
            <h2 className="text-xl font-semibold text-zinc-900">Водителям</h2>
            <p className="text-sm text-zinc-600">
              Для тех, кто хочет стабильные рейсы, честные выплаты и живой
              контакт с руководством, а не безликую «бухгалтерию».
            </p>
            <ul className="space-y-1 text-sm text-zinc-700 list-disc list-inside">
              <li>Работа на европейских грузовиках и маршрутах.</li>
              <li>Прозрачная система оплаты без скрытых удержаний.</li>
              <li>Понятный путь роста до статуса партнёра.</li>
            </ul>
            <Link
              to="/drivers"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-50 transition"
            >
              Подробнее для водителей
            </Link>
          </div>

          {/* ПАРТНЁРАМ */}
          <div className="card space-y-3">
            <h2 className="text-xl font-semibold text-zinc-900">Партнёрам</h2>
            <p className="text-sm text-zinc-600">
              Для предпринимателей, которые хотят открыть собственную транспортную
              компанию под брендом Mobil Truck и при этом не оставаться в одиночестве.
            </p>
            <ul className="space-y-1 text-sm text-zinc-700 list-disc list-inside">
              <li>Доли 51% / 49% между холдингом и партнёром.</li>
              <li>Единые стандарты, общие фонды и IT-система.</li>
              <li>Сетевой доход от развития собственной ветки компаний.</li>
            </ul>
            <Link
              to="/partners"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-50 transition"
            >
              Подробнее для партнёров
            </Link>
          </div>

          {/* О ХОЛДИНГЕ В ЦЕЛОМ */}
          <div className="card space-y-3">
            <h2 className="text-xl font-semibold text-zinc-900">О холдинге</h2>
            <p className="text-sm text-zinc-600">
              Если вы хотите сначала понять всю конструкцию целиком, начните с
              документов и описания модели холдинга.
            </p>
            <ul className="space-y-1 text-sm text-zinc-700 list-disc list-inside">
              <li>Модель холдинга и распределения прибыли.</li>
              <li>Модель 8% и сетевые доходы по ветке.</li>
              <li>Будущие юридические документы и регламенты.</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/holding-model"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-50 transition"
              >
                Модель холдинга
              </Link>
              <Link
                to="/documents"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-xs sm:text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-50 transition"
              >
                Документы
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
