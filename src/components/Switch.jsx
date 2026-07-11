import './Switch.css';

/**
 * An accessible on/off toggle rendered as a checkbox with a sliding thumb.
 * @param {object} props
 * @param {boolean} props.checked - current on/off state
 * @param {(next: boolean) => void} props.onChange - called with the new state
 * @param {string} [props.label] - visible label text
 * @param {boolean} [props.disabled]
 */
export default function Switch({ checked, onChange, label, disabled = false }) {
  return (
    <label className={`switch ${disabled ? 'is-disabled' : ''}`.trim()}>
      <input
        type="checkbox"
        className="switch-input"
        role="switch"
        checked={Boolean(checked)}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className="switch-track" aria-hidden="true">
        <span className="switch-thumb" />
      </span>
      {label && <span className="switch-label">{label}</span>}
    </label>
  );
}
