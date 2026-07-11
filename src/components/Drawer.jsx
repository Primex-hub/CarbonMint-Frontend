import { useEffect } from 'react';
import './Drawer.css';

/**
 * A slide-over panel anchored to an edge of the viewport. Renders nothing when
 * closed and dims the page behind it when open.
 * @param {object} props
 * @param {boolean} props.open - whether the drawer is visible
 * @param {() => void} props.onClose - called on backdrop click or Escape
 * @param {'right'|'left'} [props.side] - edge the drawer slides in from
 * @param {string} [props.title] - optional heading shown in the drawer header
 */
export default function Drawer({ open, onClose, side = 'right', title, children }) {
  useEffect(() => {
    if (!open) return undefined;
    function onKey(event) {
      if (event.key === 'Escape') onClose?.();
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside
        className={`drawer drawer-${side}`}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="drawer-header">
          {title && <h2 className="drawer-title">{title}</h2>}
          <button
            type="button"
            className="drawer-close"
            aria-label="Close"
            onClick={onClose}
          >
            ✕
          </button>
        </header>
        <div className="drawer-body">{children}</div>
      </aside>
    </div>
  );
}
