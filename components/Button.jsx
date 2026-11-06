
export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  disabled = false,
}) {
  const base = `
    inline-flex items-center justify-center gap-2
    rounded-btn px-6 py-3
    text-sm font-semibold
    transition-all duration-200 ease-out
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-primary
    focus-visible:ring-offset-2
    active:scale-[0.97]
    disabled:pointer-events-none
    disabled:cursor-not-allowed
    disabled:opacity-50
  `;

  const styles = {
    primary: `
      bg-primary text-white
      shadow-md shadow-primary/20
      hover:-translate-y-0.5
      hover:shadow-lg hover:shadow-primary/30
      active:shadow-sm
    `,

    secondary: `
      border border-primary/30
      bg-white text-primary
      hover:-translate-y-0.5
      hover:border-primary
      hover:bg-primary/5
      hover:shadow-md
    `,

    danger: `
      bg-error text-white
      shadow-sm
      hover:-translate-y-0.5
      hover:brightness-110
      hover:shadow-md
    `,

    ghost: `
      border border-border
      bg-transparent text-text
      hover:border-primary/30
      hover:bg-primary/5
      hover:text-primary
    `,
  };

  return (
    <button
      className={`${base} ${styles[variant] || styles.primary}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
