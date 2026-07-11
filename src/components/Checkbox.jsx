import './Checkbox.css';

/**
 * A styled checkbox with an inline label. Thin wrapper over a native input so
 * it remains keyboard and screen-reader friendly.
 * @param {object} props
 * @param {boolean} props.checked
 * @param {(next: boolean) => void} props.onChange - called with the new state
 * @param {string} props.label - visible label text
 * @param {boolean} [props.disabled]
 */
export default function Checkbox({ checked, onChange, label, disabled = false }) {
  return (
    <label className={`checkbox ${disabled ? 'is-disabled' : ''}`.trim()}>
      <input
        type="checkbox"
        className="checkbox-input"
        checked={Boolean(checked)}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className="checkbox-box" aria-hidden="true">
        <span className="checkbox-tick">✓</span>
      </span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
}
