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
          <span className="font-medium tracking-wide text-zinc-800">
            Mobil Truck network
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-wide text-zinc-400">
          Prototype platform • alpha
        </span>
      </div>
    </div>
  );
}

const Home = () => {
  return (
    <main className="min-h-screen bg-[#f9fafb] text-zinc-900">
      {/* Герой-блок */}
      <section className="border-b border-zinc-200 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 py-10 lg:py-16 space-y-10">
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
                  Добро пожаловать в Mobil Truck.
                  <br />
                  Это не очередная транспортная фирма.
                </h1>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-700 max-w-xl">
                  Mobil Truck — это дом для сети компаний, которые работают по
                  единым, честным правилам. Здесь предприниматели и водители
                  заходят «в приёмную» холдинга, а не в диспетчерскую.
                </p>
                <p className="text-xs sm:text-sm text-zinc-500 max-w-md">
                  Сначала познакомьтесь со структурой холдинга и моделью
                  распределения прибыли. А потом уже решайте, какая роль вам
                  ближе — водителя, партнёра или основателя своей ветки.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Link
                  to="/structure"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-zinc-900/30 hover:bg-zinc-800 active:bg-zinc-950 transition"
                >
                  Перейти к структуре холдинга
                </Link>
                <Link
                  to="/profit"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition"
                >
                  Посмотреть модель 8%
                </Link>
              </div>

              <p className="text-xs text-zinc-500 max-w-md">
                Если вы уже предприниматель или готовы им стать — начните со
                структуры и документации. Если вы водитель и хотите просто
                честной, стабильной работы — переходите к разделу «Водителям».
              </p>
            </div>
          </section>
        </div>
      </section>

      {/* Три блока ролей */}
      <section className="max-w-6xl mx-auto px-4 py-10 lg:py-14 space-y-8">
        <header className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            MOBIL TRUCK NETWORK
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
            Три роли в холдинге.
          </h2>
          <p className="text-sm text-zinc-600 max-w-2xl">
            Каждый выбирает, как далеко он готов идти. Кому-то важны стабильные
            рейсы водителем, кто-то хочет строить сеть дочерних компаний и
            получать доход как владелец. Mobil Truck даёт понятный путь роста.
          </p>
        </header>

        <section className="grid gap-6 md:gap-8 md:grid-cols-3">
          {/* Водителям */}
          <article className="card space-y-3">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-zinc-900">
                Водителям
              </h3>
              <p className="text-sm text-zinc-600">
                Для тех, кто хочет стабильные рейсы, честные выплаты и
                уважительное отношение вместо «расходного материала».
              </p>
            </div>
            <ul className="space-y-1 text-sm text-zinc-700 list-disc list-inside">
              <li>Работа строго по немецкому трудовому договору.</li>
              <li>Гарантированный отдых и база с кухней и удобствами.</li>
              <li>Чёткие правила, графики и поддержка в рейсах.</li>
            </ul>
            <div>
              <Link
                to="/drivers"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-50 transition"
              >
                Подробнее для водителей
              </Link>
            </div>
          </article>

          {/* Партнёрам */}
          <article className="card space-y-3">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-zinc-900">
                Партнёрам и предпринимателям
              </h3>
              <p className="text-sm text-zinc-600">
                Для тех, кто готов открыть свою фирму под брендом Mobil Truck и
                строить сеть дочерних компаний.
              </p>
            </div>
            <ul className="space-y-1 text-sm text-zinc-700 list-disc list-inside">
              <li>Пошаговая модель роста от одной машины до сети фирм.</li>
              <li>Юридическая и организационная поддержка от холдинга.</li>
              <li>Справедливое распределение прибыли по всей структуре.</li>
            </ul>
            <div>
              <Link
                to="/partners"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-50 transition"
              >
                Подробнее для партнёров
              </Link>
            </div>
          </article>

          {/* О холдинге */}
          <article className="card space-y-3">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-zinc-900">
                О холдинге в целом
              </h3>
              <p className="text-sm text-zinc-600">
                Если сначала нужно увидеть всю картину: структуру, модель 8% и
                будущие документы холдинга.
              </p>
            </div>
            <ul className="space-y-1 text-sm text-zinc-700 list-disc list-inside">
              <li>Модель холдинга и распределения прибыли.</li>
              <li>Модель 8% и сетевые доходы по ветке.</li>
              <li>Будущие юридические документы и регламенты.</li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/holding"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-50 transition"
              >
                Модель холдинга
              </Link>
              <Link
                to="/documents"
                className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-800 bg-white hover:bg-zinc-50 transition"
              >
                Документы холдинга
              </Link>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
};

export default Home;
