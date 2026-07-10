import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TheoryCard as TheoryCardType } from '../data/theoryCards';
import CardDetailContent from './CardDetailContent';
import FavoriteButton from './FavoriteButton';
import Tag from './Tag';

const cardTypeLabels: Record<NonNullable<TheoryCardType['cardType']>, { en: string; zh: string }> = {
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
  reflection: { en: 'Reflection', zh: '今日反思' },
  'classic-text': { en: 'Text', zh: '文本' },
  'quote-reading': { en: 'Quote', zh: '引文' },
  keyword: { en: 'Keyword', zh: '关键词' },
  'theory-debate': { en: 'Debate', zh: '理论比较' },
  'reflection-question': { en: 'Reflection', zh: '今日反思' }
};

type TheoryCardProps = {
  card: TheoryCardType;
  mode?: 'compact' | 'today' | 'detail' | 'full';
  showActions?: boolean;
};

function getImageInfo(card: TheoryCardType) {
  const image = card.person?.detailImage ?? card.person?.image;
  const credit = card.person?.detailImage ? card.person?.detailImageCredit : card.person?.imageCredit;
  return { image, credit };
}

function getUsableImageSrc(image?: string) {
  if (!image) return undefined;
  return image.startsWith('http') || image.startsWith('/') ? image : undefined;
}

function isVisualPerson(card: TheoryCardType) {
  return card.person?.category === 'artist' || card.person?.category === 'photographer';
}

function getThematicTitle(card: TheoryCardType) {
  if (card.focusTitle || card.focusTitleZh) {
    return { en: card.focusTitle ?? card.concept, zh: card.focusTitleZh ?? card.conceptZh };
  }

  if (!card.person) {
    return { en: card.cardTitle ?? card.concept, zh: card.cardTitleZh ?? card.conceptZh };
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

function renderImagePreview(card: TheoryCardType) {
  const { image, credit } = getImageInfo(card);
  const imageSrc = getUsableImageSrc(image);

  return (
    <figure className="image-preview">
      {imageSrc ? <img src={imageSrc} alt={card.person?.name ?? card.cardTitle ?? 'Daily card preview'} /> : <div className="image-preview__placeholder">✦</div>}
      {credit && <figcaption>{credit}</figcaption>}
    </figure>
  );
}

export default function TheoryCard({ card, mode = 'compact', showActions = true }: TheoryCardProps) {
  const normalizedMode = mode === 'full' ? 'detail' : mode;
  const typeLabel = card.cardType ? cardTypeLabels[card.cardType] : { en: 'Theory Card', zh: '理论卡片' };
  const title = card.cardTitle ?? card.concept;
  const titleZh = card.cardTitleZh ?? card.conceptZh;
  const typeBadge = `${typeLabel.en}｜${typeLabel.zh}`;
  const location = [card.person?.city, card.person?.country].filter(Boolean).join(', ');
  const thematicTitle = getThematicTitle(card);
  const todayTags = card.tags.slice(0, 3);

  if (normalizedMode === 'compact') {
    return (
      <Link className="archive-card" to={`/cards/${card.id}`}>
        <div>
          <p className="archive-card__date">
            {card.date} <span>{typeBadge}</span>
          </p>
          <h2>{title}</h2>
          <p className="name-zh">{titleZh}</p>
          <p className="archive-card__concept">{card.concept} · {card.conceptZh}</p>
          <p className="archive-card__byline">
            {card.person ? `${card.person.category} · ${location}` : `With ${card.thinkerName} · ${card.thinkerNameZh}`}
          </p>
          <p>{card.explanationZh}</p>
          <div className="tag-row">
            {card.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </div>
        <FavoriteButton cardId={card.id} compact />
      </Link>
    );
  }

  if (normalizedMode === 'today') {
    return (
      <article className={`theory-card theory-card--today ${isVisualPerson(card) ? 'theory-card--visual' : ''}`}>
        <p className="eyebrow">
          <span className="card-type-badge">{typeBadge}</span>
        </p>
        <header className="theory-card__header">
          <div>
            <h2>{card.person?.name ?? title}</h2>
            <p className="name-zh">{thematicTitle.en}</p>
            <p className="years">{thematicTitle.zh}</p>
          </div>
          <FavoriteButton cardId={card.id} compact />
        </header>

        {isVisualPerson(card) && renderImagePreview(card)}

        <section className="text-block text-block--today">
          <p>{card.person?.shortBioEn ?? card.explanationEn}</p>
          <p>{card.person?.shortBioZh ?? card.explanationZh}</p>
        </section>

        <div className="tag-row">
          {todayTags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="button-row">
          <FavoriteButton cardId={card.id} />
          <Link className="button button--primary" to={`/cards/${card.id}`}>
            View details｜查看详细介绍 <ArrowRight size={17} />
          </Link>
        </div>
      </article>
    );
  }

  return <CardDetailContent card={card} showActions={showActions} />;
}
