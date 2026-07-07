import { parseTheoryFramework } from '../utils/parseTheoryFramework';
import BilingualParagraphs from './BilingualParagraphs';

type TheoryFrameworkMapProps = {
  text: string;
};

export default function TheoryFrameworkMap({ text }: TheoryFrameworkMapProps) {
  const steps = parseTheoryFramework(text);
  const fallbackBlocks = text.split('\n').map((block) => block.trim()).filter(Boolean);

  return (
    <section className="article-section theory-framework-map">
      <header className="framework-map__header">
        <h3>Theory Framework</h3>
        <span>理论框架</span>
        <p>A structured map of this figure’s theoretical position.</p>
        <p>这是一张关于该人物理论位置的结构图。</p>
      </header>

      {steps.length > 0 ? (
        <div className="framework-flow">
          {steps.map((step, index) => (
            <div className="framework-flow__item" key={step.key}>
              <article className="framework-step">
                <div className="framework-step__topline">
                  <b aria-hidden="true">{step.icon}</b>
                  <span className="framework-step-label">
                    {step.labelEn}｜{step.labelZh}
                  </span>
                </div>
                <BilingualParagraphs en={step.en} zh={step.zh} />
              </article>
              {index < steps.length - 1 && <div className="framework-connector" aria-hidden="true">↓</div>}
            </div>
          ))}
        </div>
      ) : (
        <div className="framework-note">
          {fallbackBlocks.map((block) => (
            <p key={block}>{block}</p>
          ))}
        </div>
      )}
    </section>
  );
}
