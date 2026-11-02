export default function EmptyState({ title = "No notes found", message = "Try a different search or subject filter — or upload your first lecture." }) {
  return (
    <div className="card empty">
      <div style={{ fontSize: 40 }}>📭</div>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}
