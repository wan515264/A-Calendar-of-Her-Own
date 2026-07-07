type EmptyStateProps = {
  title: string;
  description: string;
};

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <section className="empty-state">
      <div className="empty-state__mark">✦</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}
