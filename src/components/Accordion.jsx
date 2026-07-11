import { useId, useState } from 'react';
import './Accordion.css';

/**
 * A single collapsible disclosure section. Manages its own open state unless a
 * controlled `open`/`onToggle` pair is supplied.
 * @param {object} props
 * @param {string} props.title - the always-visible header label
 * @param {boolean} [props.defaultOpen] - initial expanded state when uncontrolled
 */
export default function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(Boolean(defaultOpen));
  const panelId = useId();

  return (
    <div className={`accordion ${open ? 'is-open' : ''}`.trim()}>
      <button
        type="button"
        className="accordion-header"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="accordion-title">{title}</span>
        <span className="accordion-chevron" aria-hidden="true">
          ⌄
        </span>
      </button>
      {open && (
        <div className="accordion-panel" id={panelId} role="region">
          {children}
        </div>
      )}
    </div>
  );
}
