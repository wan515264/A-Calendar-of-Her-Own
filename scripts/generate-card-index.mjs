import fs from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const sourcePath = path.join(root, 'src/data/dailyCards.ts');
const outputPath = path.join(root, 'src/data/dailyCardIndex.generated.ts');
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

const previews = dailyCards.map((card) => Object.fromEntries(
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
console.log(`Generated ${previews.length} card previews.`);
