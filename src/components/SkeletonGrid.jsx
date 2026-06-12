import './SkeletonGrid.css';

/**
 * Placeholder grid of shimmering cards shown while batches load, matching the
 * marketplace grid layout to avoid layout shift.
 * @param {object} props
 * @param {number} [props.count] - number of skeleton cards to render
 */
export default function SkeletonGrid({ count = 6 }) {
  return (
    <div
      className="skeleton-grid"
      role="status"
      aria-busy="true"
      aria-label="Loading batches"
    >
      {Array.from({ length: count }).map((_, i) => (
        <div className="skeleton-card" key={i} aria-hidden="true">
          <span className="skeleton-line skeleton-line-sm" />
          <span className="skeleton-line skeleton-line-lg" />
          <span className="skeleton-line skeleton-line-md" />
          <span className="skeleton-line skeleton-bar" />
        </div>
      ))}
    </div>
  );
}
