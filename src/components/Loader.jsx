import './Loader.css';

/**
 * A simple spinner with an optional label, used for async loading states.
 */
export default function Loader({ label = 'Loading...' }) {
  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="loader-spinner" aria-hidden="true" />
      <span className="loader-label">{label}</span>
    </div>
  );
}
