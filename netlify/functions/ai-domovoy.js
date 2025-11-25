// netlify/functions/ai-domovoy.js

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        error: "OPENAI_API_KEY is not set on the server",
      }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch (e) {
    return {
      statusCode: 200,
      body: JSON.stringify({ error: "Invalid JSON in request body" }),
    };
  }

  const userMessages = Array.isArray(body.messages) ? body.messages : [];
  const language = body.language || "ru";
  const page = body.page || "/";

  // Базовое описание проекта Mobil Truck, чтобы ИИ всегда держал контекст.
  const projectContext =
    "Mobil Truck — это проект современного транспортного холдинга в Европе. " +
    "Холдинг строится не как одна огромная фирма, а как сеть независимых компаний под единым брендом. " +
    "Основные принципы: честность, прозрачность, понятные правила, поддержка партнёров и водителей, " +
    "законность и соответствие немецкому и европейскому праву. " +
    "Финансовая модель: каждая компания зарабатывает свою прибыль, из которой 8% направляются в сеть " +
    "как 'сетевой процент', а 92% остаются в самой компании. " +
    "Часть сетевого процента распределяется по ветке (основателю компании и уровням выше), " +
    "а доля холдинга идёт в фонды развития, IT и резерв. " +
    "Цель — создать живой, растущий холдинг, в котором предприниматели и водители зарабатывают честно и прозрачно.";

  // Системный промпт под Mobil Truck, с учётом текущей страницы и языка интерфейса.
  const systemPrompt =
    "Ты — цифровой помощник (домовой) проекта Mobil Truck. " +
    "Говори кратко, по-дружески и честно, без заискивания и выдумок. " +
    "Твоя задача — помогать людям понять, как устроен Mobil Truck, куда нажать, что посмотреть, " +
    "и направлять к нужным разделам сайта.\n\n" +
    projectContext +
    "\n\n" +
    "Основные страницы сайта Mobil Truck (маршруты могут отличаться, но логика такая):\n" +
    "— '/' — главная страница с общим описанием идеи и холдинга;\n" +
    "— '/structure' — структура холдинга: уровни, роли (водитель, партнёр, головная компания), связи между компаниями;\n" +
    "— '/holding-model' — модель холдинга: финансовая схема 8%/92%, фонды, путь от водителя до основателя ветки;\n" +
    "— '/partners' — раздел для партнёров: кто такой партнёр Mobil Truck, что он получает и как стать партнёром;\n" +
    "— возможно, позже: '/forum' или отдельный чат — обсуждения и вопросы по проекту.\n\n" +
    "Если вопрос касается структуры — упоминай раздел '/structure'.\n" +
    "Если вопрос про деньги, проценты, фонды, путь роста — ссылайся на '/holding-model'.\n" +
    "Если вопрос про условия для партнёров — ссылайся на '/partners'.\n" +
    "Если нужен общий обзор — укажи на главную страницу ('/').\n\n" +
    "Важно:\n" +
    "— Говори только то, что действительно логично следует из описания проекта и страниц сайта. Не выдумывай несуществующие разделы и функции.\n" +
    "— Если чего-то ещё нет (например, полноценного форума или чата с историей), честно скажи об этом и можешь предложить, как это могло бы работать в будущем.\n" +
    "— Ты не видишь содержимое базы данных, приватные переписки и реальные записи на форуме, если они появятся. Ты можешь только ориентировать по логике и типичным темам.\n" +
    "— Ты не власть и не юрист холдинга, ты помощник-объяснитель.\n\n" +
    "Текущая страница сайта (по данным фронтенда): '" +
    page +
    "'. " +
    "Язык интерфейса (language из клиента): '" +
    language +
    "'.\n" +
    "Отвечай, по возможности, на том языке, на котором был последний вопрос пользователя. " +
    "Если язык неочевиден — используй язык '" +
    language +
    "'. " +
    "Будь спокойным, тёплым, умным и, при случае, чуть ироничным, но всегда по делу.";

  const messages = [
    {
      role: "system",
      content: systemPrompt,
    },
    ...userMessages,
  ];

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
        max_tokens: 500,
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
          error: "Failed to parse OpenAI JSON response",
        }),
      };
    }

    const reply =
      (data.choices &&
        data.choices[0] &&
        data.choices[0].message &&
        data.choices[0].message.content) ||
      "…";

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
