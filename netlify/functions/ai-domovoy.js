// netlify/functions/ai-domovoy.js

exports.handler = async (event) => {
  // Разрешаем только POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  // Ключ OpenAI берём из переменной окружения
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        error: "OPENAI_API_KEY is not set on the server",
      }),
    };
  }

  // Разбираем тело запроса от фронтенда
  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch (e) {
    return {
      statusCode: 200,
      body: JSON.stringify({ error: "Invalid JSON in request body" }),
    };
  }

  const rawMessages = Array.isArray(body.messages) ? body.messages : [];
  const language = String(body.language || "ru").slice(0, 5);
  const page = String(body.page || "/").slice(0, 200);

  // Очищаем и нормализуем историю
  const userMessages = rawMessages
    .filter(
      (m) =>
        m &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: m.content.slice(0, 2000),
    }));

  // ————— КОНТЕКСТ ПРОЕКТА MOBIL TRUCK —————

  const projectContext = [
    "Mobil Truck — это проект современного транспортного холдинга в Европе.",
    "Главная идея: не одна огромная фирма, а сеть независимых компаний под единым брендом.",
    "",
    "Структура:",
    "• Головная компания Mobil Truck Holding — ведёт ключевых клиентов, управляет фондами, брендом и правилами.",
    "• Партнёрские компании (обычно UG / GmbH в Германии) — принадлежат предпринимателям-партнёрам и работают под брендом Mobil Truck.",
    "• Каждая партнёрская компания может создавать свои дочерние компании, формируя собственную ветку холдинга.",
    "",
    "Роли:",
    "• Водитель — работает в одной из компаний сети, получает фиксированную оговорённую оплату и бонусы.",
    "• Партнёр — предприниматель, владелец доли в компании под брендом Mobil Truck.",
    "• Основатель ветки — партнёр, у которого под ним есть сеть дочерних компаний.",
    "",
    "Финансовая модель (упрощённо):",
    "• Каждая компания зарабатывает свою прибыль.",
    "• Не более 8% оборота или прибыли (в зависимости от модели договора) идёт в сеть как «сетевой процент».",
    "• Остальное (около 92%) остаётся в самой компании и распределяется между партнёрами, водителями и внутренними фондами.",
    "• Сетевой процент делится по уровням вверх по ветке: часть получает текущая компания, часть — основатель и компании выше, часть — фонды холдинга (развитие, IT, резерв, безопасность).",
    "",
    "Задача модели — совместить:",
    "• личную инициативу предпринимателя;",
    "• честные и понятные правила для водителей;",
    "• прозрачные отчисления в сеть и фонды;",
    "• соответствие немецкому и европейскому праву."
  ].join(" ");

  // ————— СИСТЕМНЫЙ ПРОМПТ ДЛЯ ИИ —————

  const systemPrompt = [
    "Ты — цифровой помощник (домовой) проекта Mobil Truck.",
    "Твоя задача — помогать посетителям понять, как устроен холдинг, чем он отличается от обычной транспортной фирмы,",
    "и подсказывать, куда на сайте смотреть дальше.",
    "",
    projectContext,
    "",
    "Страницы сайта (логика):",
    "• '/' — главная страница с общим описанием Mobil Truck.",
    "• '/structure' — структура холдинга: уровни компаний, роли (водитель, партнёр, основатель ветки).",
    "• '/holding-model' — финансовая модель: фиксированный сетевой процент (около 8%), фонды, путь роста от водителя до партнёра.",
    "• '/partners' — условия и преимущества партнёров: что получает предприниматель, открывающий фирму под брендом Mobil Truck.",
    "• В будущем могут быть: '/forum', отдельный чат и другие разделы — если их ещё нет, честно говори, что они в разработке.",
    "",
    "Как отвечать:",
    "• Отвечай коротко, по делу, дружелюбно, как старший товарищ.",
    "• Если вопрос простой — дай простой и ясный ответ в 2–4 предложения.",
    "• Если вопрос сложный (про структуру, проценты, путь роста) — можно использовать списки, но не перегружай текст.",
    "• По возможности давай ссылку на подходящий раздел сайта: '/', '/structure', '/holding-model', '/partners'.",
    "",
    "Ограничения и честность:",
    "• Не придумывай точные цифры доходов и гарантий — говори, что это зависит от оборота, затрат и договора.",
    "• Не давай юридически обязательных обещаний — ты не юрист, а помощник-объяснитель.",
    "• Если пользователя интересуют темы вне Mobil Truck (политика, здоровье, медицина и т.п.) —",
    "  мягко скажи, что ты ассистент Mobil Truck и лучше задать такие вопросы обычному ChatGPT или профильным специалистам.",
    "• Если на сайте чего-то ещё нет (например, форума или личного кабинета) — честно говори, что это в планах или разработке,",
    "  и описывай только общую идею, не выдумывая конкретных сроков и функций.",
    "",
    "Текущая страница сайта (по данным клиента): '" + page + "'.",
    "Язык интерфейса (из клиента): '" + language + "'.",
    "Отвечай по возможности на том языке, на котором было последнее сообщение пользователя.",
    "Если язык непонятен — используй язык '" + language + "'.",
    "Будь спокойным, тёплым, рациональным и при случае чуть ироничным, но всегда по делу."
  ].join(" ");

  const messages = [
    { role: "system", content: systemPrompt },
    ...userMessages,
  ];

  // ————— ВЫЗОВ OPENAI —————

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
        temperature: 0.4,
        max_tokens: 600,
      }),
    });

    const text = await response.text();

    if (!response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          error: `OpenAI error: ${text}`,
        }),
      };
    }

    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          error: `Failed to parse OpenAI response as JSON: ${text}`,
        }),
      };
    }

    const reply =
      data &&
      data.choices &&
      data.choices[0] &&
      data.choices[0].message &&
      data.choices[0].message.content
        ? data.choices[0].message.content
        : "";

    if (!reply || !String(reply).trim()) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          error: "Empty reply from OpenAI",
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ reply: String(reply).trim() }),
    };
  } catch (err) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        error: `Function runtime error: ${String(err)}`,
      }),
    };
  }
};
