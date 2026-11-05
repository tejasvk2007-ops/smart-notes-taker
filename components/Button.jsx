export default function Button({ children, variant = "primary", onClick, type = "button", disabled }) {
  const base = "inline-block rounded-btn px-5 py-3 text-base font-semibold cursor-pointer transition hover:-translate-y-px shadow-sm";
  const styles = {
    primary: "bg-primary text-white shadow-primary/25 hover:shadow-lg",
    secondary: "bg-white text-primary border border-primary hover:shadow-md",
    danger: "bg-error text-white",
    ghost: "bg-transparent text-text border border-border",
  };
  return <button className={`${base} ${styles[variant] || styles.primary}`} onClick={onClick} type={type} disabled={disabled}>{children}</button>;
}
