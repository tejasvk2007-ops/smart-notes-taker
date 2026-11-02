export default function Button({ children, variant = "primary", onClick, type = "button", disabled }) {
  const cls = variant === "secondary" ? "btn btn-secondary" : variant === "danger" ? "btn btn-danger" : variant === "ghost" ? "btn btn-ghost" : "btn";
  return <button className={cls} onClick={onClick} type={type} disabled={disabled}>{children}</button>;
}
