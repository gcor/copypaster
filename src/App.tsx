import { useMemo } from "react";
import classnames from "classnames";
import { IRow, ISection, ISymbol, sections, Spacing } from "./config";
import { useCopyHref } from "./useCopy";
import "./App.css";

function Symbol({ symbol }: { symbol: ISymbol }) {
  const { isCopied, onCopy } = useCopyHref(symbol);

  const tooltip = useMemo(() => {
    if (symbol === Spacing.S) return "&thinsp;";
    if (symbol === Spacing.L) return undefined;
    return undefined;
  }, [symbol]);

  return (
    <button
      onClick={onCopy}
      className={classnames("sybmol", {
        sybmol_space: symbol === Spacing.S || symbol === Spacing.L,
        sybmol_space_s: symbol === Spacing.S,
        sybmol_space_l: symbol === Spacing.L,
      })}
      data-tooltip={tooltip}
    >
      {symbol}
    </button>
  );
}

function Example({ example }: { example: string }) {
  const { isCopied, onCopy } = useCopyHref(example);

  return (
    <button
      onClick={onCopy}
      className={classnames("example", {
        example_copied: isCopied,
      })}
    >
      {example}
    </button>
  );
}

function Row({ locale, items }: IRow & { locale: string }) {
  return (
    <div className="row">
      <h3 className="row__title">{locale}</h3>
      <div className="row__content">
        <ul className="row__list">
          {items.map((item) => (
            <li key={item.example} className="row__item">
              <ul className="row__symbols">
                {item.symbols.map((symbol, i) => (
                  <li key={i} className="row__symbol">
                    <Symbol symbol={symbol} />
                  </li>
                ))}
              </ul>
              <div className="row__example">
                <Example example={item.example} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Section({ title, locales }: ISection) {
  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>
      <div className="section__content">
        <ul className="section__list">
          {Object.entries(locales).map(([locale, row]) => (
            <li key={locale} className="section__item">
              <Row locale={locale} {...row} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Sections() {
  return (
    <div className="sections">
      {sections.map((section) => (
        <div className="sections__item" key={section.title}>
          <Section {...section} />
        </div>
      ))}
    </div>
  );
}

function App() {
  return <Sections />;
}

export default App;
