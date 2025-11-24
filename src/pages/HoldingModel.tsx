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
              предприниматель получает готовую модель: бренд, IT, базу клиентов,
              типовые документы и сетевой доход;
            </li>
            <li>
              головная компания не “душит” низы, а зарабатывает на росте сети и
              качестве сервиса, а не на скрытых процентах.
            </li>
          </ul>
          <p className="text-xs text-zinc-500">
            Важно: сеть растёт и горизонтально (больше компаний на одном уровне),
            и вертикально (глубина ветки). Отсюда и сетевой доход 8% — награда за
            развитие всей структуры, а не за давление “сверху”.
          </p>
        </section>

        {/* 2. Три уровня структуры */}
        <section className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900">
            2. Кто есть кто в Mobil Truck
          </h2>
          <p className="text-sm text-zinc-700">
            Внутри холдинга есть три ключевых роли — у каждой своя зона
            ответственности и свой источник дохода.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <article className="rounded-xl border border-zinc-200 bg-white/90 p-4 space-y-2">
              <h3 className="text-sm font-semibold text-zinc-900">
                1) Водитель
              </h3>
              <p className="text-sm text-zinc-700">
                Получает честную оплату за рейсы, прозрачный учёт времени и
                километров, поддержку диспетчеров и понятные правила.
              </p>
            </article>

            <article className="rounded-xl border border-zinc-200 bg-white/90 p-4 space-y-2">
              <h3 className="text-sm font-semibold text-zinc-900">
                2) Партнёр — владелец компании
              </h3>
              <p className="text-sm text-zinc-700">
                Владеет своей фирмой, сам нанимает людей, отвечает за технику и
                операционную работу. Получает 92% прибыли своей компании (после
                вычета 8% сетевого процента) и может строить свою ветку в сети.
              </p>
            </article>

            <article className="rounded-xl border border-zinc-200 bg-white/90 p-4 space-y-2">
              <h3 className="text-sm font-semibold text-zinc-900">
                3) Головная компания / основатели ветвей
              </h3>
              <p className="text-sm text-zinc-700">
                Создают систему, стандарты, IT, логистику, формируют фонды,
                помогают запускать новые компании и получают сетевой доход по
                модели 8%, а также дивиденды от долей в компаниях.
              </p>
            </article>
          </div>
          <p className="text-xs text-zinc-500">
            Так уменьшается риск для одного центра и распределяется между
            участниками холдинга: бизнес опирается не на одну “фирму-гигант”, а
            на живую сеть компаний.
          </p>
        </section>

        {/* 3. Что даёт партнёру головная компания */}
        <section className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900">
            3. Что получает партнёр, входя в холдинг
          </h2>
          <p className="text-sm text-zinc-700">
            Партнёр не просто регистрирует фирму. Он подключается к живой системе,
            где многие вещи уже сделаны за него.
          </p>
          <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
            <li>
              Бренд и репутация, с которой легче работать с заказчиками и банками.
            </li>
            <li>
              IT-система: учёт рейсов, GPS-маршруты, аналитика, отчётность.
            </li>
            <li>
              Типовые договора, процессы, юридическая поддержка.
            </li>
            <li>
              Логистическая инфраструктура Mobil Truck — диспетчеризация, планирование маршрутов, помощь с загрузками.
            </li>
            <li>
              Возможность строить свою сеть компаний и получать пассивный доход по
              модели 8%.
            </li>
          </ul>
          <p className="text-xs text-zinc-500">
            Задача головной компании — создать понятные правила и защищённую
            среду, в которой партнёры могут спокойно развиваться, а не бороться
            с хаосом и бюрократией в одиночку.
          </p>
        </section>

        {/* 4. Как формируется прибыль и фонды */}
        <section className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-zinc-900">
            4. Откуда берётся прибыль и как она делится
          </h2>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-zinc-900">
              4.1. База — прибыль каждой отдельной компании
            </h3>
            <p className="text-sm text-zinc-700">
              Каждая компания сначала зарабатывает свою чистую прибыль. Это
              деньги после всех расходов: топливо, зарплаты, налоги, лизинг и
              обслуживание.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-zinc-900">
              4.2. 8% — на сеть, 92% — остаются в компании
            </h3>
            <p className="text-sm text-zinc-700">
              Из 100% чистой прибыли компании:
            </p>
            <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
              <li>8% направляются в сеть — это сетевой процент;</li>
              <li>
                оставшиеся 92% остаются в компании — это её собственная прибыль,
                из которой затем делятся доли между владельцами (например, 51/49
                между холдингом и местным партнёром).
              </li>
            </ul>
            <p className="text-sm text-zinc-700">
              То есть компания в любом случае остаётся основным бенефициаром
              своей работы. Сетевой процент — это надстройка, а не замена её
              прибыли.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-zinc-900">
              4.3. Модель 8% по ветке
            </h3>
            <p className="text-sm text-zinc-700">
              8% идут вверх по ветке и делятся по фиксированной формуле:
            </p>
            <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
              <li>4% — основателю конкретной компании;</li>
              <li>2% — уровню выше;</li>
              <li>1% — следующему уровню; </li>
              <li>0,5% — ещё одному уровню вверх;</li>
              <li>
                оставшиеся 0,5% могут быть использованы для более высоких уровней
                или резервов (настройка для будущей финмодели).
              </li>
            </ul>
            <p className="text-sm text-zinc-700">
              Чем глубже и шире ветка, тем больше компаний дают свой небольшой
              процент наверх. Так формируется пассивный доход основателей веток —
              он растёт вместе с сетью, а не за счёт удушения одной компании.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-zinc-900">
              4.4. Фонды холдинга: куда идут деньги головной компании
            </h3>
            <p className="text-sm text-zinc-700">
              Доля холдинга (например, 51% от прибыли, оставшейся в компании)
              не “исчезает” в чьём-то кармане. Она собирается в фонды:
            </p>
            <ul className="text-sm text-zinc-700 space-y-1 list-disc list-inside">
              <li>
                <span className="font-medium">Фонд развития:</span> запуск новых
                компаний, приобретение и ремонт транспорта, лизинг, обучение
                водителей и партнёров.
              </li>
              <li>
                <span className="font-medium">Фонд IT и аналитики:</span>{" "}
                развитие систем учёта рейсов, GPS-маршрутизация, отчётность,
                оптимизация загрузки и простоев.
              </li>
              <li>
                <span className="font-medium">Резервный и защитный фонд:</span>{" "}
                подушка на форс-мажоры, сложные периоды и поддержку компаний,
                которые временно попали в трудную ситуацию.
              </li>
            </ul>
            <p className="text-xs text-zinc-500">
              По немецкому законодательству холдинг может выстраивать единую
              структуру управления и отчётности. Консолидированный подход снижает
              бумажную нагрузку на отдельных партнёров и укрепляет доверие со
              стороны банков и крупных заказчиков.
            </p>
          </div>
        </section>

        {/* 5. Путь: от водителя до основателя ветки */}
        <section className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm space-y-3">
          <h2 className="text-lg font-semibold text-zinc-900">
            5. Путь: от водителя до основателя своей ветки
          </h2>
          <p className="text-sm text-zinc-700">
            В модели Mobil Truck человек может развиваться по ступеням — без
            “закрытого клуба” и кулуарных договорённостей.
          </p>
          <ol className="text-sm text-zinc-700 space-y-1 list-decimal list-inside">
            <li>
              Водитель приходит работать в компанию холдинга и видит, как реально
              устроены рейсы, учёт и деньги.
            </li>
            <li>
              Если у него есть желание и дисциплина — он может стать менеджером,
              формировать рейсы, работать с клиентами.
            </li>
            <li>
              Дальше — открыть свою компанию в структуре Mobil Truck, получив
              поддержку холдинга и доступ к ИТ, бренду и логистике.
            </li>
            <li>
              Со временем — строить свою ветку: помогать запускать компании ниже
              по структуре и получать сетевой доход по модели 8%.
            </li>
          </ol>
          <p className="text-sm text-zinc-700">
            Так формируется современный, живой холдинг: не “пирамидой”, где один
            забирает всё, а сетью, где каждый понимает, откуда берётся его
            доход, и видит прозрачные правила игры.
          </p>
        </section>
      </div>
    </main>
  );
};

export default HoldingModelPage;
