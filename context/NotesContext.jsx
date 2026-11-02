"use client";
import { createContext, useContext, useMemo, useState } from "react";
import { dummyNotes } from "../data/notes";

const NotesContext = createContext(null);

export function NotesProvider({ children }) {
  const [notes, setNotes] = useState(dummyNotes);
  const [query, setQuery] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("All");

  const addNote = (note) => {
    const newNote = { ...note, id: String(Date.now()), favourite: false, status: "Ready" };
    setNotes((prev) => [newNote, ...prev]);
    return newNote;
  };

  const deleteNote = (id) => setNotes((prev) => prev.filter((n) => n.id !== id));

  const toggleFavourite = (id) =>
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, favourite: !n.favourite } : n)));

  const filteredNotes = useMemo(() => {
    const q = query.trim().toLowerCase();
    return notes.filter((n) => {
      const matchesQuery =
        !q ||
        n.title.toLowerCase().includes(q) ||
        n.subject.toLowerCase().includes(q) ||
        n.summary.toLowerCase().includes(q) ||
        n.tags.some((t) => t.toLowerCase().includes(q));
      const matchesSubject = subjectFilter === "All" || n.subject === subjectFilter;
      return matchesQuery && matchesSubject;
    });
  }, [notes, query, subjectFilter]);

  const value = {
    notes,
    filteredNotes,
    query,
    setQuery,
    subjectFilter,
    setSubjectFilter,
    addNote,
    deleteNote,
    toggleFavourite,
  };

  return <NotesContext.Provider value={value}>{children}</NotesContext.Provider>;
}

export function useNotes() {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error("useNotes must be used inside NotesProvider");
  return ctx;
}
