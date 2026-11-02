export default function Table({ notes }) {
  return (
    <table>
      <thead><tr><th>Title</th><th>Subject</th><th>Date</th><th>Status</th></tr></thead>
      <tbody>
        {notes.map((n) => (
          <tr key={n.id}><td>{n.title}</td><td>{n.subject}</td><td>{n.date}</td><td>{n.status}</td></tr>
        ))}
      </tbody>
    </table>
  );
}
