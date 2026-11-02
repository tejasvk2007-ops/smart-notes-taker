"use client";
import Sidebar from "../../components/Sidebar";
import Table from "../../components/Table";
import { useAuth } from "../../context/AuthContext";
import { useNotes } from "../../context/NotesContext";

export default function ProfilePage() {
  const { user } = useAuth();
  const { notes } = useNotes();
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main">
        <h1>Profile</h1>
        <div className="card" style={{ marginBottom: 16 }}>
          <h2>{user ? user.name : "Guest student"}</h2>
          <p className="small">{user ? user.email : "Login to see your account — demo auth, no backend."}</p>
          <p>Total notes: <b>{notes.length}</b> • Favourites: <b>{notes.filter((n) => n.favourite).length}</b></p>
        </div>
        <h2>Your notes</h2>
        <Table notes={notes} />
        <div className="card" style={{ marginTop: 16 }}>
          <h3>Settings (placeholder for Milestone 1)</h3>
          <p className="small">Notification preferences, note length (short / detailed), and account settings will be added in a later milestone.</p>
        </div>
      </main>
    </div>
  );
}
