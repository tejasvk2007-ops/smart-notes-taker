"use client";
import Link from "next/link";
import Badge from "./Badge";
import { useNotes } from "../context/NotesContext";

export default function NoteCard({ note }) {
  const { toggleFavourite } = useNotes();
  return (
    <div className="card">
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
        <Badge>{note.subject}</Badge>
        <Badge tone={note.status === "Ready" ? "ready" : "processing"}>{note.status}</Badge>
      </div>
      <h3 style={{ marginTop: 12 }}><Link href={`/notes/${note.id}`}>{note.title}</Link></h3>
      <p className="small">{note.lecturer} • {note.date} • {note.duration}</p>
      <p>{note.summary.slice(0, 140)}…</p>
      <p className="small">⭐ {note.keyPoints.length} key points</p>
      <div style={{ display: "flex", gap: 8 }}>
        <Link className="btn" href={`/notes/${note.id}`}>Open note</Link>
        <button className="btn btn-ghost" onClick={() => toggleFavourite(note.id)}>
          {note.favourite ? "★ Favourited" : "☆ Favourite"}
        </button>
      </div>
    </div>
  );
}
