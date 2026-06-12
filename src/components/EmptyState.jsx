import './EmptyState.css';

/**
 * Placeholder shown when a list or collection has no items.
 */
export default function EmptyState({ title, message, action }) {
  return (
    <div className="empty-state">
      <div className="empty-icon" aria-hidden="true">
        ◇
      </div>
      <h3 className="empty-title">{title || 'Nothing here yet'}</h3>
      {message && <p className="empty-message">{message}</p>}
      {action && <div className="empty-action">{action}</div>}
    </div>
  );
}
