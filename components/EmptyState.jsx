export default function EmptyState({ title = "No notes found", message = "Try a different search or subject filter — or upload your first lecture." }) {
  return (
    <div className="card empty">
      <div style={{ color: "var(--primary)", marginBottom: 8 }}><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg></div>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}
