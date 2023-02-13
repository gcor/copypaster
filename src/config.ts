export enum Language {
  RU = "ru",
  EN = "en",
}

export enum Locale {
  RU = "ru",
  US = "us",
  GB = "gb",
}

export enum Spacing {
  S = " ",
  L = " ",
}

export type ISymbol = string | Spacing;

export interface IItem {
  symbols: ISymbol[];
  example: string;
}

export type IRow = {
  items: IItem[];
};

export interface ISection {
  title: string;
  locales: {
    [key in Locale]: IRow;
  };
}

export const sections: ISection[] = [
  {
    title: "Кавычки",
    locales: {
      [Locale.RU]: {
        items: [
          { symbols: ["«", "»"], example: "«Слово»" },
          { symbols: ["„", "“"], example: "«Слово“" },
          { symbols: ["«", "„", "“", "»"], example: "ООО «НПЦ „ОК“»" },
        ],
      },
      [Locale.US]: {
        items: [
          { symbols: ["“", "”"], example: "“Word”" },
          { symbols: ["‘", "’"], example: "‘Word’" },
          { symbols: ["“", "‘", "’", "”"], example: "LTC “RPC ‘Norm’”" },
        ],
      },
      [Locale.GB]: {
        items: [
          { symbols: ["‘", "’"], example: "‘Word’" },
          { symbols: ["“", "”"], example: "“Word”" },
          { symbols: ["‘", "“", "”", "’"], example: "LTC ‘RPC “Norm“’" },
        ],
      },
    },
  },
  {
    title: "Валюта",
    locales: {
      [Locale.RU]: {
        items: [{ symbols: ["X", Spacing.L, "₽"], example: "100 ₽" }],
      },
      [Locale.US]: {
        items: [{ symbols: ["$", "X"], example: "$100" }],
      },
      [Locale.GB]: {
        items: [{ symbols: ["£", "X"], example: "£100" }],
      },
    },
  },
  {
    title: "Знак номера",
    locales: {
      [Locale.RU]: {
        items: [
          { symbols: ["№", Spacing.L, "X"], example: "№ 007" },
          { symbols: ["№", Spacing.S, "X"], example: "№ 007" },
        ],
      },
      [Locale.US]: {
        items: [{ symbols: ["#", "X"], example: "#007" }],
      },
      [Locale.GB]: {
        items: [
          { symbols: ["No.", Spacing.L, "X"], example: "No. 007" },
          { symbols: ["#", "X"], example: "#007" },
        ],
      },
    },
  },
  {
    title: "Многоточие",
    locales: {
      [Locale.RU]: {
        items: [{ symbols: ["…"], example: "Подожди-ка…" }],
      },
      [Locale.US]: {
        items: [
          {
            symbols: [".", Spacing.L, ".", Spacing.L, "."],
            example: "Wait a sec. . .",
          },
        ],
      },
      [Locale.GB]: {
        items: [{ symbols: ["…"], example: "Wait a min…" }],
      },
    },
  },
  {
    title: "Время",
    locales: {
      [Locale.RU]: {
        items: [{ symbols: ["hh", ":", "mm"], example: "21:00  21:00" }],
      },
      [Locale.US]: {
        items: [
          {
            symbols: ["hh", ".", "mm", Spacing.L, "A.", Spacing.S, "M."],
            example: "0.06 AM",
          },
          {
            symbols: ["hh", ".", "mm", Spacing.L, "A.", Spacing.S, "M."],
            example: "0.06 A. M.",
          },
        ],
      },
      [Locale.GB]: {
        items: [
          {
            symbols: ["hh", ".", "mm", Spacing.L, "am"],
            example: "09.06 am",
          },
        ],
      },
    },
  },
  {
    title: "Интервал",
    locales: {
      [Locale.RU]: {
        items: [
          { symbols: ["X", "—", "X"], example: "100—200" },
          { symbols: ["X", "–", "X"], example: "9:00–18:00" },
          { symbols: ["X", "…", "X"], example: "+7…+15" },
          {
            symbols: [
              "X",
              Spacing.S,
              "X",
              Spacing.L,
              "—",
              Spacing.L,
              "X",
              Spacing.S,
              "X",
            ],
            example: "9 °F — 15 °F  10 сен — 5 отк",
          },
        ],
      },
      [Locale.US]: {
        items: [{ symbols: ["X", "–", "X"], example: "100–200" }],
      },
      [Locale.GB]: {
        items: [{ symbols: ["X", "–", "X"], example: "100–200" }],
      },
    },
  },
  {
    title: "Дроби",
    locales: {
      [Locale.RU]: {
        items: [{ symbols: [","], example: "3,14" }],
      },
      [Locale.US]: {
        items: [{ symbols: ["."], example: "3.14" }],
      },
      [Locale.GB]: {
        items: [{ symbols: ["."], example: "3.14" }],
      },
    },
  },
  {
    title: "Дата",
    locales: {
      [Locale.RU]: {
        items: [
          {
            symbols: ["дд", Spacing.L, "ммм", Spacing.L, "гггг"],
            example: "25 сен 2022",
          },
          {
            symbols: ["дд", Spacing.L, "месяц", Spacing.L, "гггг"],
            example: "25 сентября 2022",
          },
        ],
      },
      [Locale.US]: {
        items: [
          {
            symbols: ["mmm", Spacing.L, "dd"],
            example: "Sep 6",
          },
          {
            symbols: ["month", Spacing.L, "dd"],
            example: "September 6",
          },
          {
            symbols: [
              "weekday",
              ",",
              Spacing.L,
              "month",
              ",",
              Spacing.L,
              "dd",
              ",",
              Spacing.L,
              "year",
            ],
            example: "Monday, September 6, 2019",
          },
        ],
      },
      [Locale.GB]: {
        items: [
          {
            symbols: ["mmm", Spacing.L, "dd"],
            example: "Sep 6",
          },
          {
            symbols: ["month", Spacing.L, "dd"],
            example: "September 6",
          },
          {
            symbols: [
              "weekday",
              ",",
              Spacing.L,
              "month",
              ",",
              Spacing.L,
              "dd",
              ",",
              Spacing.L,
              "year",
            ],
            example: "Monday, September 6, 2019",
          },
        ],
      },
    },
  },
];
