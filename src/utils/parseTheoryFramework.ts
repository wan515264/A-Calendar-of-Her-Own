export type TheoryFrameworkStep = {
  key: 'focus' | 'inherit' | 'critique' | 'transform' | 'propose';
  labelEn: string;
  labelZh: string;
  icon: string;
  zh: string;
  en: string;
};

const stepMeta: Record<TheoryFrameworkStep['key'], Pick<TheoryFrameworkStep, 'labelEn' | 'labelZh' | 'icon'>> = {
  focus: { labelEn: 'Focus', labelZh: '核心关注', icon: '✦' },
  inherit: { labelEn: 'Inherit', labelZh: '继承', icon: '☾' },
  critique: { labelEn: 'Critique', labelZh: '批判', icon: '⚡' },
  transform: { labelEn: 'Transform', labelZh: '转化', icon: '✧' },
  propose: { labelEn: 'Propose', labelZh: '提出', icon: '❖' }
};

function splitBilingualText(value: string) {
  const [beforeSlash, ...afterSlash] = value.split('/');
  return {
    zh: beforeSlash.trim(),
    en: afterSlash.join('/').trim()
  };
}

export function parseTheoryFramework(text: string): TheoryFrameworkStep[] {
  return text
    .split('\n')
    .map((line) => line.trim())
    .map((line) => {
      const match = /^(focus|inherit|critique|transform|propose):\s*(.+)$/i.exec(line);
      if (!match) return undefined;

      const key = match[1].toLowerCase() as TheoryFrameworkStep['key'];
      const content = splitBilingualText(match[2]);

      return {
        key,
        ...stepMeta[key],
        zh: content.zh,
        en: content.en
      };
    })
    .filter((step): step is TheoryFrameworkStep => Boolean(step));
}
