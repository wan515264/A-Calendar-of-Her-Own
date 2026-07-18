import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TheoryCard } from '../data/theoryCards';
import BilingualParagraphs from './BilingualParagraphs';
import FavoriteButton from './FavoriteButton';
import Tag from './Tag';
import TheoryFrameworkMap from './TheoryFrameworkMap';

const cardTypeLabels: Record<NonNullable<TheoryCard['cardType']>, { en: string; zh: string }> = {
  thinker: { en: 'Thinker', zh: '思想家' },
  writer: { en: 'Writer', zh: '女作家' },
  artist: { en: 'Artist', zh: '艺术家' },
  photographer: { en: 'Photographer', zh: '摄影师' },
  concept: { en: 'Concept', zh: '概念' },
  text: { en: 'Text', zh: '文本' },
  quote: { en: 'Quote', zh: '引文' },
  debate: { en: 'Debate', zh: '争鸣' },
  criticism: { en: 'Criticism', zh: '文学批评' },
  theory: { en: 'Theory', zh: '理论' },
  performance: { en: 'Performance', zh: '行为艺术' },
  installation: { en: 'Installation', zh: '装置艺术' },
  sculpture: { en: 'Sculpture', zh: '雕塑' },
  novel: { en: 'Novel', zh: '小说' },
  reflection: { en: 'Reflection', zh: '今日反思' },
  'classic-text': { en: 'Text', zh: '文本' },
  'quote-reading': { en: 'Quote', zh: '引文' },
  keyword: { en: 'Keyword', zh: '关键词' },
  'theory-debate': { en: 'Debate', zh: '理论比较' },
  'reflection-question': { en: 'Reflection', zh: '今日反思' }
};

type CardDetailContentProps = {
  card: TheoryCard;
  showActions?: boolean;
};

function getTypeBadge(card: TheoryCard) {
  const typeLabel = card.cardType ? cardTypeLabels[card.cardType] : { en: 'Theory Card', zh: '理论卡片' };
  return `${typeLabel.en}｜${typeLabel.zh}`;
}

function getImageInfo(card: TheoryCard) {
  const image = card.person?.detailImage ?? card.person?.image;
  const credit = card.person?.detailImage ? card.person?.detailImageCredit : card.person?.imageCredit;
  return { image, credit };
}

function getUsableImageSrc(image?: string) {
  if (!image) return undefined;
  return image.startsWith('http') || image.startsWith('/') ? image : undefined;
}

function isVisualPerson(card: TheoryCard) {
  return card.person?.category === 'artist' || card.person?.category === 'photographer';
}

function getThematicTitle(card: TheoryCard) {
  const title = card.cardTitle ?? card.concept;
  const titleZh = card.cardTitleZh ?? card.conceptZh;

  if (card.focusTitle || card.focusTitleZh) {
    return { en: card.focusTitle ?? title, zh: card.focusTitleZh ?? titleZh };
  }

  if (!card.person) {
    return { en: title, zh: titleZh };
  }

  if (card.person.category === 'photographer') {
    return { en: 'Photography as Self-Invention', zh: '摄影作为自我创造' };
  }

  if (card.person.category === 'artist') {
    return { en: 'Art as Embodied Critique', zh: '艺术作为身体化批评' };
  }

  if (card.person.category === 'writer') {
    return { en: 'Writing as Feminist Method', zh: '写作作为女性主义方法' };
  }

  return { en: 'Feminist Thought in Context', zh: '处境中的女性主义思想' };
}

function uniqueParagraphs(values: Array<string | undefined>) {
  const seen = new Set<string>();
  return values
    .map((value) => value?.trim())
    .filter((value): value is string => Boolean(value))
    .filter((value) => {
      const key = value.replace(/\s+/g, ' ').toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function renderDetailImage(card: TheoryCard) {
  const { image, credit } = { image: card.image ?? getImageInfo(card).image, credit: card.imageCredit ?? getImageInfo(card).credit };
  const imageSrc = getUsableImageSrc(image);

  if (!isVisualPerson(card) || !imageSrc) return null;

  return (
    <figure className="image-preview image-preview--detail">
      <img src={imageSrc} alt={card.person?.name ?? card.cardTitle ?? 'Daily card detail'} />
      {credit && <figcaption>{credit}</figcaption>}
    </figure>
  );
}

function formatDetailTitle(card: TheoryCard, title: string) {
  const titleZh = card.cardTitleZh;
  if (!titleZh || titleZh === title) return title;

  if (card.titleSeparator) {
    return `${title}${card.titleSeparator}${titleZh}`;
  }

  if (['thinker', 'writer', 'artist', 'photographer'].includes(card.cardType ?? '')) {
    return `${title} ${titleZh}`;
  }

  return `${title}：${titleZh}`;
}

export default function CardDetailContent({ card, showActions = false }: CardDetailContentProps) {
  const title = card.cardTitle ?? card.concept;
  const detailTitle = formatDetailTitle(card, card.person?.name ?? title);
  const detailFocus = getThematicTitle(card);
  const shouldShowFocusEn = Boolean(detailFocus.en && detailFocus.en !== title && detailFocus.en !== detailTitle);
  const location = [card.person?.city, card.person?.country].filter(Boolean).join(', ');
  const cardType = card.cardType ?? 'card';
  const creatorLabel = [card.creator, card.creatorZh].filter(Boolean).join('｜');
  const metadata = card.person
    ? [card.role ?? card.person.category, card.location ?? (location || card.person.locationName)].filter(Boolean).join(' · ')
    : [card.role ?? cardType, creatorLabel || undefined, card.location, card.years].filter(Boolean).join(' · ');
  const hasManualIntro = Boolean(card.introEn || card.introZh);
  const fallbackIntroEn = uniqueParagraphs([card.person?.shortBioEn, card.person?.summaryEn]).join('\n\n');
  const fallbackIntroZh = uniqueParagraphs([card.person?.shortBioZh, card.person?.summaryZh]).join('\n\n');
  const hasIntro = hasManualIntro || Boolean(fallbackIntroEn || fallbackIntroZh);
  const works = Array.from(new Set(card.relatedWorks.length > 0 ? card.relatedWorks : card.person?.keyWorks ?? []));
  const theoryFramework = card.theoryFramework ?? card.person?.theoryFramework;

  return (
    <article className="theory-card theory-card--detail">
      <header className="detail-article__header">
        <p className="eyebrow">
          <span className="card-type-badge">{getTypeBadge(card)}</span>
        </p>
        <div className="detail-article__title-row">
          <div>
            <h2>{detailTitle}</h2>
            {shouldShowFocusEn && <p className="name-zh">{detailFocus.en}</p>}
            <p className="detail-subtitle-zh">{detailFocus.zh}</p>
            {metadata && <p className="years">{metadata}</p>}
          </div>
          <FavoriteButton cardId={card.id} compact />
        </div>
      </header>

      {renderDetailImage(card)}

      {hasIntro && (
        <section className="article-section">
          <h3>Introduction</h3>
          <span>简介</span>
          <BilingualParagraphs
            en={hasManualIntro ? card.introEn : fallbackIntroEn}
            zh={hasManualIntro ? card.introZh : fallbackIntroZh}
          />
        </section>
      )}

      {theoryFramework && (
        <TheoryFrameworkMap text={theoryFramework} />
      )}

      {card.researchLens && (
        <section className="article-section research-lens">
          <h3>Research Lens</h3>
          <span>研究视角</span>
          <div className="research-lens__header">
            <h4>{card.researchLens.title}</h4>
            {card.researchLens.titleZh && <p>{card.researchLens.titleZh}</p>}
          </div>
          {card.researchLens.citation && <p className="research-lens__citation">{card.researchLens.citation}</p>}
          <BilingualParagraphs en={card.researchLens.summaryEn} zh={card.researchLens.summaryZh} />
        </section>
      )}

      {(card.quote || card.quoteReadingEn || card.quoteReadingZh) && (
        <section className="article-section">
          <h3>Quote Reading</h3>
          <span>引文精读</span>
          {card.quote && (
            <blockquote>
              <p>{card.quote}</p>
              {card.quoteSource && <cite>{card.quoteSource}</cite>}
            </blockquote>
          )}
          <BilingualParagraphs en={card.quoteReadingEn} zh={card.quoteReadingZh} />
        </section>
      )}

      {works.length > 0 && (
        <section className="article-section">
          <h3>Related Works</h3>
          <span>相关作品</span>
          <ul className="soft-list">
            {works.map((work) => (
              <li key={work}>{work}</li>
            ))}
          </ul>
        </section>
      )}

      {card.tags.length > 0 && (
        <section className="article-section">
          <h3>Tags</h3>
          <span>标签</span>
          <div className="tag-row">
            {card.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </section>
      )}

      {showActions && (
        <div className="button-row">
          <FavoriteButton cardId={card.id} />
          <Link className="button button--primary" to={`/cards/${card.id}`}>
            了解更多 <ArrowRight size={17} />
          </Link>
        </div>
      )}
    </article>
  );
}
