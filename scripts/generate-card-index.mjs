import fs from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const sourcePath = path.join(root, 'src/data/dailyCards.ts');
const outputPath = path.join(root, 'src/data/dailyCardIndex.generated.ts');
const indexPath = path.join(root, 'index.html');
const source = await fs.readFile(sourcePath, 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ES2022,
    target: ts.ScriptTarget.ES2022
  }
}).outputText;
const moduleUrl = `data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`;
const { dailyCards } = await import(moduleUrl);

const previewKeys = [
  'id',
  'date',
  'type',
  'personId',
  'title',
  'titleZh',
  'years',
  'role',
  'author',
  'creator',
  'creatorZh',
  'focusTitle',
  'focusTitleZh',
  'summaryEn',
  'summaryZh',
  'highlightEn',
  'highlightZh',
  'sourceNote',
  'tags',
  'image',
  'imageCredit',
  'status'
];

const today = new Date().toISOString().slice(0, 10);
const homepageCards = dailyCards
  .filter((card) => card.status === 'published' && card.date <= today)
  .sort((a, b) => a.date.localeCompare(b.date))
  .slice(-3);

const previews = homepageCards.map((card) => Object.fromEntries(
  previewKeys
    .filter((key) => card[key] !== undefined)
    .map((key) => [key, card[key]])
));

const output = `// This file is generated from dailyCards.ts. Do not edit it by hand.\n` +
  `import type { DailyCard } from './dailyCards';\n\n` +
  `export type DailyCardPreview = Pick<DailyCard,\n` +
  `  | 'id' | 'date' | 'type' | 'personId' | 'title' | 'titleZh' | 'years' | 'role'\n` +
  `  | 'author' | 'creator' | 'creatorZh' | 'focusTitle' | 'focusTitleZh'\n` +
  `  | 'summaryEn' | 'summaryZh' | 'highlightEn' | 'highlightZh' | 'sourceNote'\n` +
  `  | 'tags' | 'image' | 'imageCredit' | 'status'\n` +
  `>;\n\n` +
  `export const dailyCardIndex: DailyCardPreview[] = ${JSON.stringify(previews, null, 2)};\n`;

await fs.writeFile(outputPath, output);

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

const typeLabels = {
  thinker: 'Thinker｜思想家', writer: 'Writer｜作家', artist: 'Artist｜艺术家',
  photographer: 'Photographer｜摄影师', concept: 'Concept｜概念', text: 'Text｜文本',
  quote: 'Quote｜引文', debate: 'Debate｜争鸣', criticism: 'Criticism｜批评',
  theory: 'Theory｜理论', performance: 'Performance｜行为艺术', installation: 'Installation｜装置艺术',
  sculpture: 'Sculpture｜雕塑', novel: 'Novel｜小说', book: 'Book｜著作', essay: 'Essay｜论文', film: 'Film｜电影'
};

const latest = homepageCards.at(-1);
if (latest) {
  const date = new Date(`${latest.date}T00:00:00Z`);
  const month = new Intl.DateTimeFormat('en-US', { month: 'long', timeZone: 'UTC' }).format(date).toUpperCase();
  const day = new Intl.DateTimeFormat('en-US', { day: '2-digit', timeZone: 'UTC' }).format(date);
  const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long', timeZone: 'UTC' }).format(date);
  const year = new Intl.DateTimeFormat('en-US', { year: 'numeric', timeZone: 'UTC' }).format(date);
  const summaryEn = latest.summaryEn?.split(/\n\s*\n/)[0] ?? '';
  const summaryZh = latest.summaryZh?.split(/\n\s*\n/)[0] ?? '';
  const tags = (latest.tags ?? []).slice(0, 3);
  const fallback = `
      <!-- HOMEPAGE_FALLBACK_START -->
      <div class="app-shell homepage-fallback">
        <main class="app-main">
          <div class="home-page">
            <header class="home-hero">
              <p class="home-hero__spark">A Calendar of Her Own ✦ 她自己的日历</p>
              <p>读女性如何理解世界。</p>
            </header>
            <section class="date-header">
              <div class="date-header__binding" aria-hidden="true"><span></span><span></span></div>
              <p class="date-header__month">${month}</p>
              <strong class="date-header__day">${day}</strong>
              <div class="date-header__meta"><span>${weekday}</span><span>${year}</span></div>
              <div class="date-header__divider" aria-hidden="true"><span></span><b>✦</b><span></span></div>
            </section>
            <div class="calendar-card-divider" aria-hidden="true"><span></span><b>✦</b><span></span></div>
            <article class="theory-card theory-card--today">
              <p class="eyebrow"><span class="card-type-badge">${escapeHtml(typeLabels[latest.type] ?? latest.type)}</span></p>
              <header class="theory-card__header"><div>
                <h2>${escapeHtml(latest.title)}</h2>
                <p class="name-zh">${escapeHtml(latest.focusTitle ?? '')}</p>
                <p class="years">${escapeHtml(latest.focusTitleZh ?? latest.titleZh ?? '')}</p>
              </div></header>
              <section class="text-block text-block--today">
                <p>${escapeHtml(summaryEn)}</p>
                <p>${escapeHtml(summaryZh)}</p>
              </section>
              <div class="tag-row">${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}</div>
              <div class="button-row"><a class="button button--primary" href="/A-Calendar-of-Her-Own/cards/${encodeURIComponent(latest.id)}">View details｜查看详细介绍</a></div>
            </article>
          </div>
        </main>
      </div>
      <!-- HOMEPAGE_FALLBACK_END -->`;
  const indexHtml = await fs.readFile(indexPath, 'utf8');
  const updatedIndex = indexHtml.replace(
    /\s*<!-- HOMEPAGE_FALLBACK_START -->[\s\S]*?<!-- HOMEPAGE_FALLBACK_END -->/,
    fallback
  );
  await fs.writeFile(indexPath, updatedIndex);
}

console.log(`Generated ${previews.length} card previews.`);
