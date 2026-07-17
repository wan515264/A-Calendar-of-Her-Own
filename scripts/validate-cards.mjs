import { readFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';
import ts from 'typescript';

const root = new URL('../', import.meta.url);
const allowedTypes = new Set(['thinker', 'writer', 'artist', 'photographer', 'concept', 'text', 'quote', 'debate', 'criticism', 'theory', 'performance']);
const allowedStatuses = new Set(['published', 'draft']);
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

async function importTs(path) {
  const source = await readFile(new URL(path, root), 'utf8');
  const js = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ES2020,
      target: ts.ScriptTarget.ES2020
    }
  }).outputText;
  const encoded = Buffer.from(js).toString('base64');
  return import(`data:text/javascript;base64,${encoded}`);
}

function isValidDate(value) {
  if (!datePattern.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

const [{ dailyCards }, { people }] = await Promise.all([
  importTs('src/data/dailyCards.ts'),
  importTs('src/data/people.ts')
]);

const errors = [];
const ids = new Set();
const publishedDates = new Map();
const personIds = new Set(people.map((person) => person.id));

dailyCards.forEach((card, index) => {
  const label = card.id ? `"${card.id}"` : `card at index ${index}`;

  if (!card.id || typeof card.id !== 'string') {
    errors.push(`${label}: id is required.`);
  } else if (ids.has(card.id)) {
    errors.push(`${label}: duplicate id.`);
  } else {
    ids.add(card.id);
  }

  if (!card.date || !isValidDate(card.date)) {
    errors.push(`${label}: date must be valid YYYY-MM-DD.`);
  }

  if (!card.title || typeof card.title !== 'string') {
    errors.push(`${label}: title is required.`);
  }

  if (!allowedTypes.has(card.type)) {
    errors.push(`${label}: type must be one of ${Array.from(allowedTypes).join(', ')}.`);
  }

  if (!Array.isArray(card.tags) || card.tags.length === 0 || card.tags.some((tag) => typeof tag !== 'string' || tag.trim() === '')) {
    errors.push(`${label}: tags must be a non-empty string array.`);
  }

  if (card.status && !allowedStatuses.has(card.status)) {
    errors.push(`${label}: status must be "published" or "draft".`);
  }

  if (card.personId && !personIds.has(card.personId)) {
    errors.push(`${label}: personId "${card.personId}" does not exist in people.ts.`);
  }

  if (card.status === 'published') {
    const existing = publishedDates.get(card.date);
    if (existing) {
      errors.push(`${label}: duplicate published date ${card.date}; already used by "${existing}".`);
    } else {
      publishedDates.set(card.date, card.id);
    }
  }
});

if (errors.length > 0) {
  console.error('Daily card validation failed:\n');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Daily card validation passed. ${dailyCards.length} cards checked, ${publishedDates.size} published.`);
