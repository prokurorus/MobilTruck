import React from "react";

const StructurePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-10 px-4 space-y-8">
        {/* Верхний блок: крошка + заголовок + вводный текст */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1 text-[11px] font-medium text-zinc-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Mobil Truck • структура холдинга
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
            Как устроен холдинг Mobil Truck
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 max-w-3xl leading-relaxed">
            Mobil Truck — это сеть взаимосвязанных компаний. Водители, партнёры
            и головной холдинг зарабатывают по прозрачной, заранее понятной
            модели. Ниже — краткая схема, без красивых слов.
          </p>
        </div>

        {/* Три основных блока */}
        <section className="grid gap-6 lg:grid-cols-3">
          {/* Уровни структуры */}
          <article className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-900 mb-3">
              Уровни структуры
            </h2>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li>
                <span className="font-medium">
                  1. Головной холдинг —
                </span>{" "}
                бренд, общая стратегия, ключевые договоры с заказчиками,
                поддержка и IT-инфраструктура.
              </li>
              <li>
                <span className="font-medium">
                  2. Партнёрские компании (UG / GmbH) —
                </span>{" "}
                независимые юрлица под брендом Mobil Truck, работающие по
                единой модели.
              </li>
              <li>
                <span className="font-medium">
                  3. Ветки внутри холдинга —
                </span>{" "}
                цепочка компаний, которую основал один предприниматель
                (основатель ветки).
              </li>
              <li>
                <span className="font-medium">
                  4. Операционный уровень —
                </span>{" "}
                водители, диспетчеры, механики и вся команда, которая двигает
                грузы и зарабатывает деньги.
              </li>
            </ul>
          </article>

          {/* Фиксированный сетевой процент */}
          <article className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-900 mb-3">
              Фиксированный сетевой процент 8%
            </h2>
            <p className="text-sm text-zinc-700 mb-3">
              Каждая компания холдинга отдаёт заранее оговорённую долю прибыли
              на развитие сети. Эта доля фиксирована и одинакова для всех —
              <span className="font-semibold"> 8%</span>. Она делится по
              уровням вверх по ветке:
            </p>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li>
                <span className="font-medium">4% —</span> основателю компании
                (создал эту конкретную фирму).
              </li>
              <li>
                <span className="font-medium">2% —</span> компании уровнем выше
                в ветке.
              </li>
              <li>
                <span className="font-medium">1% —</span> следующему уровню.
              </li>
              <li>
                <span className="font-medium">0,5% —</span> ещё выше.
              </li>
            </ul>
            <p className="mt-3 text-xs text-zinc-500">
              Дальше проценты могут продолжаться по убывающей, но суммарно
              никогда не выходят за предел 8%. Так каждая ветка заинтересована
              развивать сеть до любой глубины, не забирая чужую прибыль и не
              меняя общие правила.
            </p>
          </article>

          {/* Роли участников */}
          <article className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-zinc-900 mb-3">
              Роли участников
            </h2>
            <ul className="space-y-2 text-sm text-zinc-700">
              <li>
                <span className="font-medium">Водитель —</span> получает ставку
                и/или процент по прозрачной схеме, знает, откуда берётся его
                доход и какие расходы несёт компания.
              </li>
              <li>
                <span className="font-medium">Партнёр (владелец компании) —</span>{" "}
                отвечает за свою фирму, команду и технику, подключён к общему
                бренду и получает долю сетевого процента от созданных им
                компаний.
              </li>
              <li>
                <span className="font-medium">Основатель ветки —</span>{" "}
                предприниматель, который строит свою цепочку компаний внутри
                холдинга и получает пассивный доход от всей ветки (в рамках тех
                же 8%).
              </li>
              <li>
                <span className="font-medium">Холдинг —</span> отвечает за
                правила игры, защиту бренда, общие сервисы и поддержку. Не
                забирает «скрытые» проценты, работает по заранее согласованной
                модели.
              </li>
            </ul>
          </article>
        </section>

        <section className="pt-2 text-xs text-zinc-500 max-w-3xl">
          <p>
            Эта схема — технический каркас. На её основе дальше можно строить
            подробные договоры, расчёты и дорожные карты роста холдинга по
            странам ЕС.
          </p>
        </section>
      </div>
    </main>
  );
};

export default StructurePage;
