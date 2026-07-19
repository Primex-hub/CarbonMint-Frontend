import './Alert.css';

const ICONS = {
  info: 'ℹ',
  success: '✓',
  warning: '!',
  danger: '✕',
};

/**
 * An inline notice banner for surfacing status, warnings or errors.
 * @param {object} props
 * @param {'info'|'success'|'warning'|'danger'} [props.variant]
 * @param {string} [props.title]
 */
export default function Alert({ variant = 'info', title, children, className = '' }) {
  const isUrgent = variant === 'danger' || variant === 'warning';
  return (
    <div
      className={`alert alert-${variant} ${className}`.trim()}
      role={isUrgent ? 'alert' : 'status'}
      aria-live={isUrgent ? 'assertive' : 'polite'}
      aria-atomic="true"
    >
      <span className="alert-icon" aria-hidden="true">
        {ICONS[variant] || ICONS.info}
      </span>
      <div className="alert-body">
        {title && <p className="alert-title">{title}</p>}
        {children && <div className="alert-message">{children}</div>}
      </div>
    </div>
  );
}
