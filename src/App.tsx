import classnames from "classnames";
import { IRow, ISection, ISymbol, sections, Spacing } from "./config";
import "./App.css";
import { useCopyHref } from "./useCopy";

function Symbol({ symbol }: { symbol: ISymbol }) {
  const { isCopied, onCopy } = useCopyHref(symbol);

  if (symbol === Spacing.S || symbol === Spacing.L) {
    return (
      <span
        className={classnames("sybmol", "sybmol_space", {
          sybmol_space_s: symbol === Spacing.S,
          sybmol_space_l: symbol === Spacing.L,
        })}
      ></span>
    );
  }

  return (
    <button
      onClick={onCopy}
      disabled={isCopied}
      className={classnames("sybmol", {
        sybmol_copied: isCopied,
      })}
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
      disabled={isCopied}
      className={classnames("example", {
        example_copied: isCopied,
      })}
    >
      {example}
    </button>
  );
}

function Row({ locale, items }: IRow) {
  return (
    <div className="row">
      <h3 className="row__title">{locale}</h3>
      <div className="row__content">
        <ul className="row__list">
          {items.map((item) => (
            <li key={item.example} className="row__item">
              <ul className="row__symbols">
                {item.symbols.map((symbol) => (
                  <li key={symbol} className="row__symbol">
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

function Section({ title, rows }: ISection) {
  return (
    <section className="section">
      <h2 className="section__title">{title}</h2>
      <div className="section__content">
        <ul className="section__list">
          {rows.map((row) => (
            <li key={row.locale} className="section__item">
              <Row {...row} />
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
