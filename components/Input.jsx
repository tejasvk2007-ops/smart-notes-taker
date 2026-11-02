export default function Input({ label, ...props }) {
  return (
    <div>
      {label && <label>{label}</label>}
      <input className="input" {...props} />
    </div>
  );
}
