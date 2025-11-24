import React from "react";
import { useLanguage } from "../context/LanguageContext";

type Section = {
  title: string;
  items: string[];
};

type DocumentsCopy = {
  badge: string;
  title: string;
  subtitle: string;
  sections: Section[];
};

const documentsText: Record<string, DocumentsCopy> = {
  ru: {
    badge: "Mobil Truck • документы и модель",
    title: "Документы и модель Mobil Truck",
    subtitle:
      "Это точка входа в документацию холдинга. Здесь собраны ключевые блоки: юридическая основа, модель прибыли и сети, а также тексты, которые уже сейчас описывают, как работает Mobil Truck. По мере развития сюда будут добавляться официальные договоры и регламенты.",
    sections: [
      {
        title: "Юридическая основа",
        items: [
          "Партнёрская модель с долями 51% / 49% между холдингом и местным предпринимателем.",
          "Каждая компания-партнёр — самостоятельное юридическое лицо в составе холдинга.",
          "Головная компания ведёт консолидированную отчётность и отвечает за взаимодействие с банками и крупными заказчиками.",
          "Юридическая конструкция опирается на немецкое корпоративное право (UG / GmbH) и может адаптироваться под страну регистрации компании.",
        ],
      },
      {
        title: "Модель прибыли и сетевого дохода",
        items: [
          "Базовая чистая прибыль компании делится: 92% остаются в компании, 8% идут на сеть.",
          "Сетевые 8% распределяются по уровням: 4% + 2% + 1% + 0,5% + 0,5% (резерв или более высокие уровни).",
          "Сетевой доход — дополнительный, пассивный. Основной доход партнёр получает от работы собственной компании.",
          "Риски не сосредоточены в одной фирме: они распределены по нескольким компаниям холдинга, которые связаны общей моделью и фондами.",
        ],
      },
      {
        title: "Ключевые тексты на сайте",
        items: [
          "«Модель холдинга» — описывает роли головной компании, партнёров, фондов и логистики.",
          "«Модель 8%» — показывает на цифрах, как формируется сетевой доход по ветке.",
          "«Партнёрам» — объясняет условия входа, выгоды и ответственность предпринимателя.",
          "«Водителям» — описывает условия работы и путь роста от водителя до партнёра.",
          "«Структура холдинга» — показывает, как распределяются решения и риски между уровнями.",
        ],
      },
      {
        title: "Будущие документы",
        items: [
          "Типовой партнёрский договор с холдингом Mobil Truck.",
          "Регламент работы фондов: развития, резервного и IT-фонда.",
          "Стандарты эксплуатации и обслуживания транспорта, требования к безопасности.",
          "Регламенты работы с водителями, заказчиками и логистическими партнёрами.",
          "Политика по данным: доступы к IT-системам, защита информации, права и обязанности сторон.",
        ],
      },
    ],
  },

  en: {
    badge: "Mobil Truck • documents and model",
    title: "Documents and model of Mobil Truck",
    subtitle:
      "This page is the entry point to the holding’s documentation. Here you find the core blocks: legal structure, profit and network model, and the key texts that already describe how Mobil Truck works. Over time, official contracts and regulations will be added here as PDFs.",
    sections: [
      {
        title: "Legal foundation",
        items: [
          "Partner model with 51% / 49% shares between the holding and the local entrepreneur.",
          "Each partner company is an independent legal entity within the Mobil Truck network.",
          "The head company manages consolidated reporting and relations with banks and major clients.",
          "The structure is based on German corporate law (UG / GmbH) and can be adapted to the country where the company is registered.",
        ],
      },
      {
        title: "Profit and network income model",
        items: [
          "Net profit of each company is split: 92% stay in the company, 8% go into the network.",
          "The 8% network share is distributed across levels: 4% + 2% + 1% + 0.5% + 0.5% (reserve or higher levels).",
          "Network income is an additional, passive layer. The main income of a partner comes from their own company’s operations.",
          "Risks are not concentrated in a single firm: they are spread across several companies linked by a common model and shared funds.",
        ],
      },
      {
        title: "Key texts on the website",
        items: [
          "“Holding model” — explains the role of the head company, partners, funds and logistics.",
          "“8% model” — shows with numbers how network income is formed along a branch.",
          "“For partners” — describes entry conditions, benefits and responsibilities for entrepreneurs.",
          "“For drivers” — explains working conditions and the path from driver to partner.",
          "“Holding structure” — shows how decisions and risks are distributed between levels.",
        ],
      },
      {
        title: "Upcoming documents",
        items: [
          "Standard partner contract with the Mobil Truck holding.",
          "Regulation for development, reserve and IT funds.",
          "Standards for vehicle operation, maintenance and safety requirements.",
          "Rules for working with drivers, customers and logistics partners.",
          "Data and IT policy: system access, information protection, rights and obligations.",
        ],
      },
    ],
  },

  de: {
    badge: "Mobil Truck • Dokumente und Modell",
    title: "Dokumente und Modell von Mobil Truck",
    subtitle:
      "Diese Seite ist der Einstieg in die Dokumente des Holdings. Hier werden die wichtigsten Bausteine gesammelt: rechtliche Struktur, Gewinn- und Netzwerkmodell sowie zentrale Texte, die den Betrieb von Mobil Truck beschreiben. Später kommen hier offizielle Verträge und Richtlinien als PDF dazu.",
    sections: [
      {
        title: "Rechtliche Grundlage",
        items: [
          "Partnermodell mit 51 % / 49 % Anteilen zwischen Holding und lokalem Unternehmer.",
          "Jede Partnerfirma ist eine eigenständige juristische Person im Mobil-Truck-Netzwerk.",
          "Die Muttergesellschaft erstellt konsolidierte Abschlüsse und pflegt Beziehungen zu Banken und Großkunden.",
          "Die Struktur orientiert sich am deutschen Gesellschaftsrecht (UG / GmbH) und kann an das Land der Firmengründung angepasst werden.",
        ],
      },
      {
        title: "Gewinn- und Netzwerkmodell",
        items: [
          "Der Nettogewinn jeder Firma wird aufgeteilt: 92 % verbleiben im Unternehmen, 8 % fließen ins Netzwerk.",
          "Die 8 % Netzwerkanteil werden auf Ebenen verteilt: 4 % + 2 % + 1 % + 0,5 % + 0,5 % (Reserve oder höhere Ebenen).",
          "Das Nettoeinkommen ist eine zusätzliche, passive Schicht. Der Hauptverdienst des Partners stammt aus seiner eigenen Firma.",
          "Risiken konzentrieren sich nicht auf eine einzelne Firma, sondern werden durch mehrere verbundene Gesellschaften und gemeinsame Fonds getragen.",
        ],
      },
      {
        title: "Wichtige Texte auf der Website",
        items: [
          "„Holding-Modell“ – erklärt die Rolle der Muttergesellschaft, der Partner, der Fonds und der Logistik.",
          "„8%-Modell“ – zeigt mit Zahlen, wie das Nettoeinkommen entlang eines Zweiges entsteht.",
          "„Für Partner“ – beschreibt Voraussetzungen, Vorteile und Verantwortung von Unternehmern.",
          "„Für Fahrer“ – erklärt Arbeitsbedingungen und den Weg vom Fahrer zum Partner.",
          "„Struktur des Holdings“ – zeigt, wie Entscheidungen und Risiken zwischen Ebenen verteilt sind.",
        ],
      },
      {
        title: "Zukünftige Dokumente",
        items: [
          "Standard-Partnervertrag mit dem Mobil-Truck-Holding.",
          "Richtlinien für Entwicklungs-, Reserve- und IT-Fonds.",
          "Standards für Betrieb, Wartung und Sicherheit der Fahrzeuge.",
          "Regeln für die Zusammenarbeit mit Fahrern, Kunden und Logistikpartnern.",
          "Daten- und IT-Policy: Zugänge, Informationsschutz, Rechte und Pflichten.",
        ],
      },
    ],
  },

  es: {
    badge: "Mobil Truck • documentos y modelo",
    title: "Documentos y modelo de Mobil Truck",
    subtitle:
      "Esta página es la entrada a la documentación del holding. Aquí se reúnen los bloques principales: estructura legal, modelo de beneficios y de red, y los textos clave que ya explican cómo funciona Mobil Truck. Con el tiempo se añadirán aquí contratos y reglamentos oficiales en PDF.",
    sections: [
      {
        title: "Base legal",
        items: [
          "Modelo de socios con 51 % / 49 % entre el holding y el empresario local.",
          "Cada empresa socia es una entidad jurídica independiente dentro de la red Mobil Truck.",
          "La empresa matriz gestiona la contabilidad consolidada y las relaciones con bancos y grandes clientes.",
          "La estructura se apoya en el derecho societario alemán (UG / GmbH) y puede adaptarse al país de registro de cada empresa.",
        ],
      },
      {
        title: "Modelo de beneficios y red",
        items: [
          "El beneficio neto de cada empresa se reparte: 92 % permanecen en la empresa, 8 % se destinan a la red.",
          "Ese 8 % se distribuye por niveles: 4 % + 2 % + 1 % + 0,5 % + 0,5 % (reserva o niveles superiores).",
          "El ingreso de red es una capa adicional y pasiva. El ingreso principal del socio procede de la actividad de su propia empresa.",
          "Los riesgos no se concentran en una única empresa: se reparten entre varias compañías unidas por un mismo modelo y por fondos comunes.",
        ],
      },
      {
        title: "Textos clave en la web",
        items: [
          "«Modelo del holding» — explica el papel de la matriz, los socios, los fondos y la logística.",
          "«Modelo del 8 %» — muestra, con números, cómo se forma el ingreso de red en una rama.",
          "«Para socios» — describe las condiciones de entrada, ventajas y responsabilidades del empresario.",
          "«Para conductores» — explica las condiciones de trabajo y el camino del conductor al socio.",
          "«Estructura del holding» — muestra cómo se reparten las decisiones y los riesgos entre los niveles.",
        ],
      },
      {
        title: "Documentos futuros",
        items: [
          "Contrato tipo de socio con el holding Mobil Truck.",
          "Reglamento de los fondos de desarrollo, reserva e IT.",
          "Estándares de uso, mantenimiento y seguridad de los vehículos.",
          "Reglas de trabajo con conductores, clientes y socios logísticos.",
          "Política de datos y IT: accesos, protección de la información, derechos y obligaciones.",
        ],
      },
    ],
  },
};

const DocumentsPage: React.FC = () => {
  const { language } = useLanguage();
  const t = documentsText[language] || documentsText["ru"];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-10 px-4 space-y-10">
        {/* Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-1 text-[11px] font-medium text-zinc-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t.badge}
          </div>

          <div className="space-y-2 max-w-3xl">
            <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900">
              {t.title}
            </h1>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </header>

        {/* Sections */}
        <section className="grid gap-6 lg:grid-cols-2">
          {t.sections.map((sec, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-zinc-200 bg-white/90 p-6 shadow-sm space-y-3"
            >
              <h2 className="text-lg font-semibold text-zinc-900">
                {sec.title}
              </h2>
              <ul className="text-sm text-zinc-700 list-disc list-inside space-y-1">
                {sec.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default DocumentsPage;
