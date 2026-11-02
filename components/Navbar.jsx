"use client";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <header className="navbar">
      <Link href="/" className="logo">📝 Smart Note Taker</Link>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/upload">Upload</Link>
        {user ? (
          <>
            <Link href="/profile">{user.name}</Link>
            <button className="btn btn-ghost" style={{ marginLeft: 12, padding: "6px 12px" }} onClick={logout}>Logout</button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}
