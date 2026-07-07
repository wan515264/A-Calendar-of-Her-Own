type PageHeaderProps = {
  title: string;
  eyebrow?: string;
  description?: string;
};

export default function PageHeader({ title, eyebrow, description }: PageHeaderProps) {
  return (
    <header className="page-header">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </header>
  );
}
