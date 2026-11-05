"use client";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  return (
    <header className="flex justify-between items-center px-6 py-3.5 bg-white border-b border-border sticky top-0 z-10 shadow-sm">
      <Link href="/" className="font-bold text-xl text-text no-underline">📝 Smart Note Taker</Link>
      <nav className="flex items-center gap-4">
        <Link href="/" className="text-text no-underline">Home</Link>
        <Link href="/dashboard" className="text-text no-underline">Dashboard</Link>
        <Link href="/upload" className="text-text no-underline">Upload</Link>
        {user ? (
          <>
            <Link href="/profile" className="text-text no-underline">{user.name}</Link>
            <button className="ml-3 px-3 py-1.5 bg-transparent text-text border border-border rounded-btn cursor-pointer" onClick={logout}>Logout</button>
          </>
        ) : (
          <Link href="/login" className="text-text no-underline">Login</Link>
        )}
      </nav>
    </header>
  );
}
