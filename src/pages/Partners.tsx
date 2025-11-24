import React from "react";

const PartnersPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 text-zinc-800">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-zinc-900">Партнёрам Mobil Truck</h1>
        <p className="text-lg text-zinc-700 leading-relaxed">
          Mobil Truck — это не просто автопарк. Это сеть компаний, объединённых едиными принципами:
          честностью, прозрачностью, технологичностью и взаимной выгодой. 
          Каждый партнёр получает инфраструктуру, процессы и поддержку, которые обычно доступны только крупным холдингам.
        </p>
      </div>

      {/* BLOCK 1 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-zinc-900">Кто такой партнёр Mobil Truck?</h2>
        <p className="text-zinc-700 leading-relaxed">
          Партнёр — это предприниматель, который создаёт собственную транспортную компанию 
          в составе холдинга. Он работает под защитой Mobil Truck, но остаётся владельцем 
          49% своей фирмы — и распоряжается её ростом. Холдинг получает только 51% долей
          для обеспечения юридической поддержки, фондов и стабильности.
        </p>
        <p className="text-zinc-700 leading-relaxed">
          Важно: партнёр — это не сотрудник и не франчайзи. Это самостоятельный владелец компании,
          который пользуется всеми преимуществами холдинга и при этом сохраняет личную свободу,
          инициативу и прибыль.
        </p>
      </section>

      {/* BLOCK 2 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Что получает партнёр?</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-zinc-200 shadow-sm bg-white">
            <h3 className="font-semibold text-zinc-900 mb-3">1. Полный юридический каркас</h3>
            <p className="text-zinc-700">
              Открытие фирмы, бухгалтерия, отчётность, договора, кадровые документы —
              всё это обеспечивает головная структура холдинга. Партнёр может сосредоточиться 
              на работе и развитии бизнеса.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-zinc-200 shadow-sm bg-white">
            <h3 className="font-semibold text-zinc-900 mb-3">2. Логистика и управление рейсами</h3>
            <p className="text-zinc-700">
              Mobil Truck предоставляет IT-системы для учёта рейсов, GPS-контроля,
              расчётов, аналитики и оптимизации загрузок. Это уровень, который одиночная фирма
              не сможет позволить себе самостоятельно.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-zinc-200 shadow-sm bg-white">
            <h3 className="font-semibold text-zinc-900 mb-3">3. Финансовые фонды</h3>
            <p className="text-zinc-700">
              Холдинг формирует фонды развития: покупка транспорта, ремонт, поддержка в кризисных
              ситуациях, страхование, инструменты для роста. Это снижает риски партнёров
              и повышает устойчивость всей сети.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-zinc-200 shadow-sm bg-white">
            <h3 className="font-semibold text-zinc-900 mb-3">4. Клиенты и заказы</h3>
            <p className="text-zinc-700">
              Партнёр получает доступ к существующему пулу заказчиков и к централизованной системе
              распределения рейсов. Это гарантирует стабильную загрузку даже на старте.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK 3 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Модель распределения прибыли</h2>

        <p className="text-zinc-700 leading-relaxed">
          Чистая прибыль компании делится так:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-zinc-700">
          <li><strong>92%</strong> остаются в компании — именно на эти деньги живёт и растёт фирма партнёра.</li>
          <li><strong>8%</strong> — сетевой процент, который распределяется по ветке холдинга, создавая 
            для каждого предпринимателя стабильный пассивный доход.
          </li>
        </ul>

        <p className="text-zinc-700 leading-relaxed">
          Эта модель мотивирует партнёров развивать собственную сеть дочерних компаний — 
          ведь чем сильнее структура, тем выше совокупный доход.
        </p>
      </section>

      {/* BLOCK 4 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Почему Mobil Truck — это современная модель?</h2>

        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>
            В классической схеме единая компания несёт на себе огромные риски:
            судебные, финансовые, операционные. Mobil Truck распределяет эти риски между
            множеством независимых структур, сохраняя при этом единую систему управления.
          </p>

          <p>
            Вместо централизованного «вертикального» подхода используется горизонтальная сеть —
            гибкая, живучая и саморастущая. Каждый новый партнёр укрепляет систему, 
            повышает устойчивость и расширяет возможности для всех участников.
          </p>

          <p>
            Это не франшиза и не MLM. Это равноправное объединение компаний, где каждый 
            приносит пользу структуре и получает пользу от неё.
          </p>
        </div>
      </section>

      {/* BLOCK 5 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Как стать партнёром Mobil Truck?</h2>

        <div className="space-y-4 text-zinc-700 leading-relaxed">
          <p>Процесс состоит из трёх шагов:</p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>Выбор направления работы и региона.</li>
            <li>Открытие юридического лица под крылом холдинга.</li>
            <li>Получение процессов, IT-доступов, логистики и первых заказов.</li>
          </ol>

          <p>
            После старта партнёр начинает получать сетевой доход (8% распределённых процентов),
            а также всю прибыль своей компании (92% после распределения по модели).
          </p>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
