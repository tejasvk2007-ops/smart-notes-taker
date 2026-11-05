import Link from "next/link";

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
        <p className="text-sm text-muted mt-4">Built for college students • Inspired by AI note-taking tools on Product Hunt</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2.5">The problem</h2>
        <p>Taking notes during lectures is difficult. While writing down what the teacher explains, students miss the next point — then spend extra time completing their notes before exams.</p>
      </section>

      <div className="grid gap-4 my-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="card"><h3>📤 Upload a lecture</h3><p>Add a lecture recording or transcript in under a minute.</p></div>
        <div className="card"><h3>✨ Short summary</h3><p>Get a short, organised summary — not another lengthy document.</p></div>
        <div className="card"><h3>⭐ Key points</h3><p>Important points are highlighted for quick revision before exams.</p></div>
        <div className="card"><h3>🔍 Search everything</h3><p>Find any note by subject, topic, or keyword in seconds.</p></div>
      </div>

      <section className="card">
        <h2>How it works</h2>
        <p><b>1.</b> Upload a lecture &nbsp;→&nbsp; <b>2.</b> We prepare a summary + key points &nbsp;→&nbsp; <b>3.</b> You revise from your dashboard.</p>
        <p className="small">In this MVP, audio processing is simulated: paste a transcript and the app generates the summary and key points. No backend is used — notes are realistic dummy data stored in React Context.</p>
        <Link className="btn" href="/upload">Try uploading a lecture</Link>
      </section>
    </main>
  );
}
