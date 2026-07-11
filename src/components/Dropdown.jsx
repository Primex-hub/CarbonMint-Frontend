import { useRef, useState } from 'react';
import { useOnClickOutside } from '../hooks/useOnClickOutside.js';
import './Dropdown.css';

/**
 * A button that toggles a floating menu of selectable options. Closes on an
 * outside click or when an item is chosen.
 * @param {object} props
 * @param {string} props.label - text shown on the trigger button
 * @param {{ value: string, label: string }[]} props.items - menu options
 * @param {(value: string) => void} props.onSelect - called with the chosen value
 */
export default function Dropdown({ label, items = [], onSelect }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  function choose(value) {
    onSelect?.(value);
    setOpen(false);
  }

  return (
    <div className="dropdown" ref={ref}>
      <button
        type="button"
        className="dropdown-trigger"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <span className="dropdown-caret" aria-hidden="true">
          ▾
        </span>
      </button>
      {open && (
        <ul className="dropdown-menu" role="menu">
          {items.map((item) => (
            <li key={item.value} role="none">
              <button
                type="button"
                role="menuitem"
                className="dropdown-item"
                onClick={() => choose(item.value)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
