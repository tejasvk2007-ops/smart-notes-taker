import Link from "next/link";

// Inline SVG icons — no new dependency, no new colours.
// Blue icons use var(--primary) #2563EB, purple uses var(--secondary) #7C3AED.
function IconUpload() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 16V4" /><path d="m6 10 6-6 6 6" /><path d="M4 20h16" /></svg>
  );
}
function IconSummary() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h10" /></svg>
  );
}
function IconKeyPoints() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6-5.4-3-5.4 3 1.1-6L3.2 9.4l6.1-.8L12 3z" /></svg>
  );
}
function IconSearch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
  );
}

export default function Home() {
  return (
    <main className="max-w-[1100px] mx-auto px-4 py-6">
      <section className="text-center px-6 py-16 rounded-2xl mb-8 bg-gradient-to-br from-primary/10 to-secondary/10">
        <h1 className="text-4xl md:text-[40px] font-bold leading-tight mb-3">Stop missing the next point.<br />Get short, organised lecture notes.</h1>
        <p className="mb-3">Smart Note Taker turns lectures into short summaries with the key points highlighted — so you revise, not rewrite.</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link className="btn" href="/register">Get started free</Link>
          <Link className="btn btn-secondary" href="/dashboard">See my notes</Link>
        </div>
        {/* Hero preview — static mock of a real note, so the hero is not text-only */}
        <div className="hero-preview">
          <div className="flex justify-between items-center gap-2">
            <span className="badge">Data Structures</span>
            <span className="badge badge-ready">Ready</span>
          </div>
          <h3 className="mt-3 text-left">Linked List — Lecture 4</h3>
          <p className="text-left mb-2">A linked list stores elements in nodes, each pointing to the next — unlike an array, it grows without a fixed size.</p>
          <p className="small text-left mb-0">5 key points • Search “linked list” to find it in seconds</p>
        </div>
        <p className="text-sm text-muted mt-4">Built for college students • Inspired by AI note-taking tools on Product Hunt</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2.5">The problem</h2>
        <p>Taking notes during lectures is difficult. While writing down what the teacher explains, students miss the next point — then spend extra time completing their notes before exams.</p>
      </section>

      <div className="grid gap-4 my-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card"><span className="feature-icon"><IconUpload /></span><h3>Upload a lecture</h3><p>Add a lecture recording or transcript in under a minute.</p></div>
        <div className="card"><span className="feature-icon feature-icon-purple"><IconSummary /></span><h3>Short summary</h3><p>Get a short, organised summary — not another lengthy document.</p></div>
        <div className="card"><span className="feature-icon"><IconKeyPoints /></span><h3>Key points</h3><p>Important points are highlighted for quick revision before exams.</p></div>
        <div className="card"><span className="feature-icon feature-icon-purple"><IconSearch /></span><h3>Search everything</h3><p>Find any note by subject, topic, or keyword in seconds.</p></div>
      </div>

      <section className="card">
        <h2>How it works</h2>
        <p><b>1.</b> Upload a lecture &nbsp;→&nbsp; <b>2.</b> We prepare a summary + key points &nbsp;→&nbsp; <b>3.</b> You revise from your dashboard.</p>
        <p className="small">Upload a lecture, paste a transcript, and get a short summary with key points.</p>
        <Link className="btn" href="/upload">Try uploading a lecture</Link>
      </section>
    </main>
  );
}
