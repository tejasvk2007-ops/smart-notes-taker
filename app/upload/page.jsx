"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../components/Sidebar";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNotes } from "../../context/NotesContext";

function makeSummaryAndPoints(title, subject, transcript) {
  const firstSentence = transcript.split(/[.\n]/).filter(Boolean)[0] || `This lecture covers ${title}.`;
  const summary = `${firstSentence.trim()}. This lecture on ${title} (${subject}) has been summarised into short, organised notes so you can revise the important points quickly, instead of rewriting the whole lecture.`;
  const keyPoints = [
    `Main idea: ${firstSentence.trim().slice(0, 120)}.`,
    "Key points from this lecture are highlighted for revision.",
    "Review the summary above before your next class or exam.",
    "Add this note to favourites if it is important for exams.",
  ];
  return { summary, keyPoints };
}

export default function UploadPage() {
  const { addNote } = useNotes();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("Data Structures");
  const [lecturer, setLecturer] = useState("");
  const [duration, setDuration] = useState("45 min");
  const [fileName, setFileName] = useState("");
  const [transcript, setTranscript] = useState("");
  const [processing, setProcessing] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!title) return;
    setProcessing(true);
    // Simulated processing — real AI transcription is out of scope for Milestone 1.
    setTimeout(() => {
      const { summary, keyPoints } = makeSummaryAndPoints(title, subject, transcript || title);
      addNote({
        title,
        subject,
        lecturer: lecturer || "—",
        date: new Date().toISOString().slice(0, 10),
        duration,
        summary,
        keyPoints,
        transcript: transcript || "No transcript pasted — this is a simulated upload for the MVP.",
        tags: [subject.toLowerCase().replace(/\s+/g, "-"), "new"],
      });
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main" style={{ maxWidth: 640 }}>
        <h1>Upload a lecture</h1>
        <p>Upload a recording (simulated in this MVP) or paste the transcript, and we will prepare a short summary and key points.</p>
        {processing ? (
          <div className="card" style={{ textAlign: "center", padding: 48 }}>
            <div className="spinner" />
            <h3>Processing your lecture…</h3>
            <p className="small">Simulating transcription and summarisation. This takes about 1.5 seconds in the demo.</p>
          </div>
        ) : (
          <form className="card" onSubmit={submit}>
            <Input label="Lecture title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Data Structures — Trees" required />
            <label>Subject</label>
            <select className="select" value={subject} onChange={(e) => setSubject(e.target.value)}>
              {["Data Structures", "Operating Systems", "DBMS", "Engineering Maths", "Computer Networks", "Physics", "Other"].map((s) => <option key={s}>{s}</option>)}
            </select>
            <Input label="Lecturer" value={lecturer} onChange={(e) => setLecturer(e.target.value)} placeholder="e.g. Prof. A. Sharma" />
            <Input label="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="45 min" />
            <Input label="Recording file name (optional)" value={fileName} onChange={(e) => setFileName(e.target.value)} placeholder="e.g. lecture-12.mp3" />
            <label>Transcript (paste a few lines — simulated)</label>
            <textarea className="input" rows={5} value={transcript} onChange={(e) => setTranscript(e.target.value)} placeholder="Paste the lecture transcript here…" />
            <div style={{ marginTop: 16 }}><Button type="submit">Generate my notes</Button></div>
          </form>
        )}
      </main>
    </div>
  );
}
