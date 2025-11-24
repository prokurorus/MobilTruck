import React from "react";

const HoldingModelPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">
        {/* Шапка */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1 text-[11px] font-medium text-zinc-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Mobil Truck • модель холдинга
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
              Mobil Truck — как устроен и за счёт чего зарабатывает холдинг
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 max-w-3xl leading-relaxed">
              Эта страница — простое объяснение для водителей, партнёров и
              предпринимателей. Без “магии”: кто за что отвечает, откуда
              берутся деньги и почему модель выгодна всем участникам, а не
              только головной компании.
            </p>
          </div>
        </header>

        {/* 1. Зачем нужен холдинг */}
        <section className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900">
            1. Зачем вообще нужен холдинг, а не одна фирма
          </h2>
          <p className="text-sm text-zinc-700">
            Одна транспортная фирма упирается в потолок: не хватает людей, денег,
            техники, времени владельца. Холдинг Mobil Truck решает это за счёт
            сети независимых компаний, работающих по единым правилам, под одним
            брендом и с общей поддержкой.
          </p>
          <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
            <li>водитель видит понятную систему оплаты и стабильные рейсы;</li>
            <li>
              предприниматель получает готовую модель: бренд, IT, клиентов,
              документы и сетевой доход;
            </li>
            <li>
              головная компания не “душит” низы, а зарабатывает на росте сети и
              качестве сервиса, а не на скрытых процентах.
            </li>
          </ul>
        </section>

        {/* 2. Административная структура */}
        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              2. Административная структура холдинга
            </h2>
            <ul className="text-sm text-zinc-700 space-y-2">
              <li>
                <span className="font-medium">1. Головной холдинг.</span>{" "}
                Владельцы бренда Mobil Truck. Отвечают за стратегию, крупные
                договоры с заказчиками, стандарты, IT-платформу, маркетинг и
                общий каркас правил.
              </li>
              <li>
                <span className="font-medium">
                  2. Партнёрские компании (UG / GmbH).
                </span>{" "}
                Отдельные юрлица, которыми управляют местные предприниматели.
                Они работают под брендом Mobil Truck, по единой модели,
                соблюдая правила холдинга.
              </li>
              <li>
                <span className="font-medium">3. Ветки внутри холдинга.</span>{" "}
                Цепочка компаний, которую запустил один предприниматель
                (основатель ветки). Он строит свою сеть внутри Mobil Truck и
                получает сетевой доход.
              </li>
              <li>
                <span className="font-medium">4. Операционный уровень.</span>{" "}
                Водители, диспетчеры, механики, администрация — люди, которые
                каждый день работают с грузами и техникой и формируют реальную
                прибыль.
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm space-y-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              3. Роль головной компании Mobil Truck
            </h2>
            <p className="text-sm text-zinc-700">
              Головная компания не забирает себе “как получится”. Её задача —
              обеспечить рамку, внутри которой партнёры спокойно зарабатывают и
              растут.
            </p>
            <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
              <li>создание и защита бренда Mobil Truck;</li>
              <li>единые стандарты: оформление, безопасность, сервис;</li>
              <li>IT-инфраструктура, учёт рейсов и финансов;</li>
              <li>подбор крупных клиентов и переговоры по ставкам;</li>
              <li>обучение партнёров и поддержка запуска компаний;</li>
              <li>
                контроль соблюдения правил, чтобы один участник не рушил
                репутацию всей сети.
              </li>
            </ul>
            <p className="text-xs text-zinc-500">
              Доход головной компании формируется за счёт долей в партнёрских
              компаниях и части сетевого процента, а не за счёт скрытых
              удержаний с водителей.
            </p>
          </article>
        </section>

        {/* 3. Финансовая архитектура */}
        <section className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-zinc-900">
            4. Финансовая архитектура холдинга
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-zinc-800">
                4.1. База: компания и её прибыль
              </h3>
              <p className="text-sm text-zinc-700">
                Каждая партнёрская компания — полноценный бизнес. У неё есть
                доходы (рейсы), расходы (топливо, зарплаты, лизинг, ремонт,
                налоги) и чистая прибыль.
              </p>
              <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
                <li>зарплаты и бонусы водителям;</li>
                <li>лизинг или выкуп тягачей и прицепов;</li>
                <li>страховки, сервис, парковка;</li>
                <li>административные расходы.</li>
              </ul>
              <p className="text-xs text-zinc-500">
                После всех расходов формируется чистая прибыль. Именно с неё
                считается сетевой процент 8%.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-zinc-800">
                4.2. 92% внутри компании, 8% — в сеть
              </h3>
              <p className="text-sm text-zinc-700">
                Модель простая:{" "}
                <span className="font-medium">92% чистой прибыли</span> остаются
                в компании (владельцам и на развитие),{" "}
                <span className="font-medium">8%</span> идут вверх по ветке —
                основателю и структуре холдинга.
              </p>
              <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
                <li>компания не теряет свою экономику — у неё остаётся база;</li>
                <li>сетевой доход не душит низ, а строится на росте сети;</li>
                <li>
                  правила одинаковы для всех: нет “особых” условий для “своих”.
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-zinc-800">
                4.3. Распределение сетевых 8%
              </h3>
              <p className="text-sm text-zinc-700">
                8% распределяются вверх по ветке по фиксированной схеме:
              </p>
              <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
                <li>4% — основателю компании (тот, кто её создал);</li>
                <li>2% — компании уровнем выше в ветке;</li>
                <li>1% — следующему уровню;</li>
                <li>0,5% — ещё выше.</li>
              </ul>
              <p className="text-xs text-zinc-500">
                Дальше проценты могут продолжаться по убывающей, но суммарно
                никогда не выходят за предел 8%. Подробные примеры — на
                странице «Модель 8%».
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-zinc-800">
                4.4. Фонды холдинга
              </h3>
              <p className="text-sm text-zinc-700">
                Часть средств, которые поднимаются наверх (в том числе от долей
                в компаниях), может направляться в прозрачные фонды:
              </p>
              <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
                <li>фонд развития сети (запуск новых компаний, техника);</li>
                <li>резервный фонд (поддержка в сложных ситуациях);</li>
                <li>фонд IT-развития (системы учёта, трекинг, аналитика);</li>
                <li>маркетинговый фонд (поиск водителей, клиентов, бренд).</li>
              </ul>
              <p className="text-xs text-zinc-500">
                Правила работы фондов фиксируются в документах холдинга и не
                могут меняться “по настроению”.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Путь участника */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-zinc-900">
            5. Путь: от водителя до основателя ветки
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm space-y-2">
              <h3 className="text-sm font-semibold text-zinc-900">
                Водитель
              </h3>
              <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
                <li>понятная ставка и/или процент от рейсов;</li>
                <li>доступ к хорошим клиентам и рейсам;</li>
                <li>прозрачные правила: кто за что платит и что остаётся фирме;</li>
                <li>
                  возможность роста — старший водитель, диспетчер, партнёр.
                </li>
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm space-y-2">
              <h3 className="text-sm font-semibold text-zinc-900">
                Партнёр — владелец компании
              </h3>
              <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
                <li>
                  открывает свою UG / GmbH под брендом Mobil Truck по готовой
                  модели;
                </li>
                <li>получает 92% прибыли своей компании;</li>
                <li>
                  участвует в сетевой модели 8% как основатель для своих
                  “дочек”;
                </li>
                <li>не остаётся один: поддержка холдинга и других партнёров.</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white/90 p-5 shadow-sm space-y-2">
              <h3 className="text-sm font-semibold text-zinc-900">
                Основатель ветки
              </h3>
              <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
                <li>создаёт не одну, а сеть компаний внутри холдинга;</li>
                <li>
                  получает проценты с глубины — 4% / 2% / 1% / 0,5% и далее по
                  модели;
                </li>
                <li>формирует пассивный доход за счёт работы своей сети;</li>
                <li>
                  отвечает за качество партнёров в своей ветке и репутацию
                  бренда.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* 6. Краткое резюме “кто что получает” */}
        <section className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-zinc-900">
            6. Кто что получает — в двух словах
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-200">
                  <th className="text-left px-2 py-1 text-zinc-500 font-medium">
                    Участник
                  </th>
                  <th className="text-left px-2 py-1 text-zinc-500 font-medium">
                    Доход
                  </th>
                  <th className="text-left px-2 py-1 text-zinc-500 font-medium">
                    Ответственность
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-zinc-50/60">
                  <td className="px-2 py-1 text-zinc-800">Водитель</td>
                  <td className="px-2 py-1 text-zinc-800">
                    Ставка и/или процент от рейсов, бонусы.
                  </td>
                  <td className="px-2 py-1 text-zinc-800">
                    Безопасная и качественная работа на линии.
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-zinc-800">
                    Партнёрская компания
                  </td>
                  <td className="px-2 py-1 text-zinc-800">
                    92% чистой прибыли своей фирмы.
                  </td>
                  <td className="px-2 py-1 text-zinc-800">
                    Команда, техника, организация работы, выполнение стандартов
                    Mobil Truck.
                  </td>
                </tr>
                <tr className="bg-zinc-50/60">
                  <td className="px-2 py-1 text-zinc-800">
                    Основатель ветки
                  </td>
                  <td className="px-2 py-1 text-zinc-800">
                    Сетевой доход по модели 8% с компаний своей ветки.
                  </td>
                  <td className="px-2 py-1 text-zinc-800">
                    Подбор партнёров, развитие сети, контроль качества.
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-1 text-zinc-800">
                    Головной холдинг
                  </td>
                  <td className="px-2 py-1 text-zinc-800">
                    Доли в компаниях + часть сетевого процента, фонды.
                  </td>
                  <td className="px-2 py-1 text-zinc-800">
                    Стратегия, бренд, правила, IT, крупные заказчики, защита
                    интересов всей сети.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-zinc-700">
            Подробные цифры, примеры по уровням и динамику дохода можно увидеть
            на странице <span className="font-medium">«Модель 8%»</span>, а
            юридические детали и формы договоров — на странице{" "}
            <span className="font-medium">«Документы»</span>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default HoldingModelPage;
