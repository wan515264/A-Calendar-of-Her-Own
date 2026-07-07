type BilingualParagraphsProps = {
  en?: string;
  zh?: string;
};

export function splitParagraphs(text?: string) {
  if (!text) return [];

  return text
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export default function BilingualParagraphs({ en, zh }: BilingualParagraphsProps) {
  const enParagraphs = splitParagraphs(en);
  const zhParagraphs = splitParagraphs(zh);
  const maxLength = Math.max(enParagraphs.length, zhParagraphs.length);

  if (maxLength === 0) return null;

  return (
    <div className="bilingual-paragraphs">
      {Array.from({ length: maxLength }).map((_, index) => (
        <div className="bilingual-pair" key={`${index}-${enParagraphs[index] ?? zhParagraphs[index]}`}>
          {enParagraphs[index] && <p className="paragraph-en">{enParagraphs[index]}</p>}
          {zhParagraphs[index] && <p className="paragraph-zh">{zhParagraphs[index]}</p>}
        </div>
      ))}
    </div>
  );
}
