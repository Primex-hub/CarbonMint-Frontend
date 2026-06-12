import './Tag.css';

/**
 * A small inline label for categorising items such as project type or registry.
 * @param {object} props
 * @param {'default'|'success'|'warning'|'danger'} [props.variant]
 */
export default function Tag({ variant = 'default', children, className = '' }) {
  return (
    <span className={`tag tag-${variant} ${className}`.trim()}>{children}</span>
  );
}
