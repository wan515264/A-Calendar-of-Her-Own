import { DAILY_COMPASS_URL } from '../constants/links';

export default function SisterProjectCard() {
  return (
    <section className="sister-project-card" aria-labelledby="daily-compass-title">
      <div className="sister-project-content">
        <p className="sister-project-label">Sister Project｜姊妹项目</p>
        <h2 id="daily-compass-title">The Daily Compass｜每日罗盘</h2>
        <p className="sister-project-description">
          A bilingual daily briefing for global news, culture, AI, finance, and social change.
        </p>
        <p className="sister-project-description sister-project-description-zh">
          一份用于理解全球资讯、文化、AI、金融与社会变化的双语每日小报。
        </p>
        <p className="sister-project-note">看今天的世界正在发生什么。Read the world as it changes.</p>
        <a
          className="sister-project-button"
          href={DAILY_COMPASS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open The Daily Compass in a new tab"
        >
          Open Daily Compass｜打开每日罗盘
        </a>
      </div>
      <div className="sister-project-symbol" aria-hidden="true">
        ✦
      </div>
    </section>
  );
}
