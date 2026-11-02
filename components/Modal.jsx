"use client";
export default function Modal({ title, children, onClose, onConfirm, confirmLabel = "Confirm" }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        {children}
        <div style={{ display: "flex", gap: 10, marginTop: 16, justifyContent: "flex-end" }}>
          <button className="btn btn-ghost" onClick={onClose}>Cancel</button>
          {onConfirm && <button className="btn btn-danger" onClick={onConfirm}>{confirmLabel}</button>}
        </div>
      </div>
    </div>
  );
}
