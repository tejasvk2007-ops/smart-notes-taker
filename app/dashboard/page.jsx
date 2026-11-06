
"use client";

import Link from "next/link";
import Sidebar from "../../components/Sidebar";
import NoteCard from "../../components/NoteCard";
import SearchBar from "../../components/SearchBar";
import EmptyState from "../../components/EmptyState";
import { useNotes } from "../../context/NotesContext";
import { subjects } from "../../data/notes";

export default function DashboardPage() {
  const {
    notes,
    filteredNotes,
    query,
    setQuery,
    subjectFilter,
    setSubjectFilter
  } = useNotes();

  const ready = notes.filter((n) => n.status === "Ready").length;
  const favourites = notes.filter((n) => n.favourite).length;
  const hoursSaved = notes.length * 1.5;

  const clearFilters = () => {
    setQuery("");
    setSubjectFilter("All");
  };

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main">
        <h1>Dashboard</h1>
        <p>Your lectures, turned into short notes you can actually revise from.</p>

        <div className="stat-grid">
          <div className="stat">
            <b>{notes.length}</b>
            <span className="small">Total notes</span>
          </div>

          <div className="stat">
            <b>{ready}</b>
            <span className="small">Ready to revise</span>
          </div>

          <div className="stat">
            <b>{favourites}</b>
            <span className="small">Favourites</span>
          </div>

          <div className="stat">
            <b>~{hoursSaved} hrs</b>
            <span className="small">Rewriting time saved*</span>
          </div>
        </div>

        <p className="small">
          *Estimate: ~1.5 hours of rewriting saved per lecture note.
        </p>

        <div className="toolbar">
          <SearchBar value={query} onChange={setQuery} />

          <select
            className="select"
            style={{ width: "auto" }}
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
          >
            <option value="All">All subjects</option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>

          <Link className="btn" href="/upload">
            + Upload lecture
          </Link>
        </div>

        {filteredNotes.length === 0 ? (
          notes.length === 0 ? (
            <EmptyState
              title="No notes yet"
              message="Upload your first lecture to start creating revision notes."
            />
          ) : (
            <>
              <EmptyState
                title="No matching notes"
                message="We couldn't find any notes matching your search or selected subject. Try another keyword or clear your filters."
              />

              <div style={{ textAlign: "center", marginTop: 12 }}>
                <button
                  className="btn"
                  type="button"
                  onClick={clearFilters}
                >
                  Clear Filters
                </button>
              </div>
            </>
          )
        ) : (
          <div className="grid">
            {filteredNotes.map((n) => (
              <NoteCard key={n.id} note={n} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
