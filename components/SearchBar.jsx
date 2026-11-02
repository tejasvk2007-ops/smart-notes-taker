"use client";
export default function SearchBar({ value, onChange, placeholder = "Search notes, subjects, topics…" }) {
  return <input className="input search" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />;
}
