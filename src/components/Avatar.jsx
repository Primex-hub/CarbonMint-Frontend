import './Avatar.css';

const PALETTE = ['#1b8f5a', '#2fb978', '#3a86e0', '#e0a13a', '#9b59b6', '#e05656'];

/**
 * Derive a stable palette index from a seed string.
 * @param {string} seed
 * @returns {number}
 */
function hashIndex(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return hash % PALETTE.length;
}

/**
 * A circular initials avatar with a deterministic colour from its seed.
 * @param {object} props
 * @param {string} props.name - source for the initials and colour
 * @param {'sm'|'md'|'lg'} [props.size]
 */
export default function Avatar({ name = '', size = 'md', className = '' }) {
  const initials =
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join('') || '?';
  const background = PALETTE[hashIndex(name || '?')];

  return (
    <span
      className={`avatar avatar-${size} ${className}`.trim()}
      style={{ background }}
      aria-hidden="true"
    >
      {initials}
    </span>
  );
}
