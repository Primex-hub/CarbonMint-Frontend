import './ProgressBar.css';

/**
 * A horizontal progress indicator clamped to the 0-100 range.
 * @param {object} props
 * @param {number} props.value - completion percentage (0-100)
 * @param {string} [props.label] - accessible description of the progress
 */
export default function ProgressBar({ value = 0, label, className = '' }) {
  const pct = Math.max(0, Math.min(100, Number(value) || 0));
  return (
    <div
      className={`progress ${className}`.trim()}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div className="progress-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}
