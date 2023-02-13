export enum Lang {
  RU = "ru",
  UK = "uk",
}

export enum Spacing {
  S = "s",
  L = "l",
}

export type ISymbol = string | Spacing;

export interface IItem {
  symbols: ISymbol[];
  example: string;
}

export interface IRow {
  locale: Lang;
  items: IItem[];
}

export interface ISection {
  title: string;
  rows: IRow[];
}

export const sections: ISection[] = [
  {
    title: "Кавычки",
    rows: [
      {
        locale: Lang.RU,
        items: [
          {
            symbols: ["«", Spacing.L, "»"],
            example: "«Слово 1»",
          },
          {
            symbols: ["«", "»"],
            example: "«Слово 2»",
          },
          {
            symbols: ["«", "»", "«", "»"],
            example: "«Слово 3»",
          },
        ],
      },
      {
        locale: Lang.UK,
        items: [
          {
            symbols: ["«", "»"],
            example: "«Слово 1»",
          },
          {
            symbols: ["«", "»"],
            example: "«Слово 2»",
          },
          {
            symbols: ["«", "»"],
            example: "«Слово 3»",
          },
        ],
      },
    ],
  },
  {
    title: "Валюта",
    rows: [
      {
        locale: Lang.RU,
        items: [
          {
            symbols: ["«", "»"],
            example: "«Слово 1»",
          },
          {
            symbols: ["«", "»"],
            example: "«Слово 2»",
          },
          {
            symbols: ["«", "»"],
            example: "«Слово 3»",
          },
        ],
      },
      {
        locale: Lang.UK,
        items: [
          {
            symbols: ["«", "»"],
            example: "«Слово 1»",
          },
          {
            symbols: ["«", "»"],
            example: "«Слово 2»",
          },
          {
            symbols: ["«", "»"],
            example: "«Слово 3»",
          },
        ],
      },
    ],
  },
  {
    title: "Валюта 2",
    rows: [
      {
        locale: Lang.UK,
        items: [
          {
            symbols: ["«", "»"],
            example: "«Слово 1»",
          },
          {
            symbols: ["«", "»"],
            example: "«Слово 2»",
          },
          {
            symbols: ["«", "»"],
            example: "«Слово 3»",
          },
        ],
      },
    ],
  },
  {
    title: "Валюта 3",
    rows: [
      {
        locale: Lang.UK,
        items: [
          {
            symbols: ["«", "»"],
            example: "«Слово 1»",
          },
          {
            symbols: ["«", "»"],
            example: "«Слово 2»",
          },
          {
            symbols: ["«", "»"],
            example: "«Слово 3»",
          },
        ],
      },
    ],
  },
  {
    title: "Валюта 4",
    rows: [
      {
        locale: Lang.UK,
        items: [
          {
            symbols: ["«", "»"],
            example: "«Слово 1»",
          },
          {
            symbols: ["«", "»"],
            example: "«Слово 2»",
          },
          {
            symbols: ["«", "»"],
            example: "«Слово 3»",
          },
        ],
      },
    ],
  },
  {
    title: "Валюта 5",
    rows: [
      {
        locale: Lang.UK,
        items: [
          {
            symbols: ["«", "»"],
            example: "«Слово 1»",
          },
          {
            symbols: ["hh", ".", "mm", Spacing.L, "A.", Spacing.S, "M."],
            example: "«Слово 2»",
          },
          {
            symbols: ["«", "»"],
            example: "«Слово 3»",
          },
        ],
      },
    ],
  },
];
