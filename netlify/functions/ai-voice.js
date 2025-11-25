// netlify/functions/ai-voice.js

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

  const text = typeof body.text === "string" ? body.text : "";
  const language =
    typeof body.language === "string"
      ? body.language.slice(0, 2).toLowerCase()
      : "en";

  if (!text.trim()) {
    return {
      statusCode: 200,
      body: JSON.stringify({ error: "Empty text for TTS" }),
    };
  }

  // Пока используем один универсальный голос
  let voice = "alloy";
  switch (language) {
    case "ru":
    case "de":
    case "es":
    case "en":
    default:
      voice = "alloy";
      break;
  }

  try {
    const response = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini-tts",
        voice,
        input: text,
        format: "mp3",
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return {
        statusCode: 200,
        body: JSON.stringify({ error: `OpenAI TTS error: ${errText}` }),
      };
    }

    const arrayBuffer = await response.arrayBuffer();
    const base64Audio = Buffer.from(arrayBuffer).toString("base64");

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ audio: base64Audio }),
    };
  } catch (err) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        error: `TTS runtime error: ${String(err)}`,
      }),
    };
  }
};
