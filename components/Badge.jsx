export default function Badge({ children, tone }) {
  const cls = tone === "ready" ? "badge badge-ready" : tone === "processing" ? "badge badge-processing" : "badge";
  return <span className={cls}>{children}</span>;
}
