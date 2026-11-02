"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/dashboard", label: "📊 Dashboard" },
  { href: "/upload", label: "⬆️ Upload Lecture" },
  { href: "/profile", label: "👤 Profile" },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      {links.map((l) => (
        <Link key={l.href} href={l.href} className={pathname === l.href ? "active" : ""}>{l.label}</Link>
      ))}
      <p className="small" style={{ padding: "12px" }}>Tip: use search on the Dashboard to find a note fast before an exam.</p>
    </aside>
  );
}
