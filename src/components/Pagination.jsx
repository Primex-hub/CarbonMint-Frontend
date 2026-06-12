import './Pagination.css';

/**
 * Page navigation control. The parent owns the current page so it can drive
 * any paginated list.
 * @param {object} props
 * @param {number} props.page - current 1-based page
 * @param {number} props.pageCount - total number of pages
 * @param {(page: number) => void} props.onChange
 */
export default function Pagination({ page = 1, pageCount = 1, onChange, className = '' }) {
  if (pageCount <= 1) return null;

  const go = (next) => {
    const clamped = Math.max(1, Math.min(pageCount, next));
    if (clamped !== page) onChange?.(clamped);
  };

  return (
    <nav className={`pagination ${className}`.trim()} aria-label="Pagination">
      <button
        type="button"
        className="page-btn"
        onClick={() => go(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        ‹ Prev
      </button>
      <span className="page-status" aria-live="polite">
        Page {page} of {pageCount}
      </span>
      <button
        type="button"
        className="page-btn"
        onClick={() => go(page + 1)}
        disabled={page >= pageCount}
        aria-label="Next page"
      >
        Next ›
      </button>
    </nav>
  );
}
