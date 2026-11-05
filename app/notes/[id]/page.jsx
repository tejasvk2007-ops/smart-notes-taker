"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Sidebar from "../../../components/Sidebar";
import Badge from "../../../components/Badge";
import Modal from "../../../components/Modal";
import EmptyState from "../../../components/EmptyState";
import { useNotes } from "../../../context/NotesContext";

export default function NoteDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { notes, deleteNote, toggleFavourite } = useNotes();
  const [showDelete, setShowDelete] = useState(false);
  const note = notes.find((n) => n.id === id);

  if (!note) {
    return (
      <div className="app-layout"><Sidebar /><main className="main">
        <EmptyState title="Note not found" message="This note may have been deleted. Go back to the dashboard to see your notes." />
        <p><Link href="/dashboard">← Back to dashboard</Link></p>
      </main></div>
    );
  }

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main">
        <p><Link href="/dashboard">← Back to dashboard</Link></p>
        <Badge>{note.subject}</Badge>
        <Badge tone={note.status === "Ready" ? "ready" : "processing"}>{note.status}</Badge>
        {note.tags.map((t) => <Badge key={t}>#{t}</Badge>)}
        <h1 style={{ marginTop: 12 }}>{note.title}</h1>
        <p className="small">{note.lecturer} • {note.date} • {note.duration}</p>

        <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
          <button className="btn btn-secondary" onClick={() => toggleFavourite(note.id)}>
            {note.favourite ? "Favourited" : "Mark as favourite"}
          </button>
          <button className="btn btn-danger" onClick={() => setShowDelete(true)}>Delete note</button>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2>Summary</h2>
          <p>{note.summary}</p>
        </div>

        <div className="card" style={{ marginBottom: 16 }}>
          <h2>Key points</h2>
          {note.keyPoints.map((kp, i) => <div key={i} className="keypoint">{kp}</div>)}
        </div>

        <div className="card">
          <h2>Transcript excerpt</h2>
          <p>{note.transcript}</p>
        </div>

        {showDelete && (
          <Modal title="Delete this note?" onClose={() => setShowDelete(false)} onConfirm={() => { deleteNote(note.id); router.push("/dashboard"); }} confirmLabel="Delete">
            <p>“{note.title}” will be permanently deleted.</p>
          </Modal>
        )}
      </main>
    </div>
  );
}
