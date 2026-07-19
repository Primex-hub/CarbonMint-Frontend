import './ErrorMessage.css';
import Button from './Button.jsx';

/**
 * Displays an error message with an optional retry action.
 */
export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message" role="alert" aria-live="assertive" aria-atomic="true">
      <span className="error-icon" aria-hidden="true">
        !
      </span>
      <p className="error-text">{message || 'Something went wrong.'}</p>
      {onRetry && (
        <Button variant="secondary" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}
