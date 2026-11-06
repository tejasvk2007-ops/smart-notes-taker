
export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        group relative overflow-hidden
        rounded-2xl
        border border-border/70
        bg-white
        p-6
        shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:border-primary/20
        hover:shadow-xl hover:shadow-primary/10
        ${className}
      `}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );gi
}
