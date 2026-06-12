import { Link } from 'react-router-dom';
import { formatCurrency, formatTonnes } from '../utils/format.js';
import './ListingRow.css';

/**
 * Compact table-style row for a batch listing, used in the list view.
 */
export default function ListingRow({ batch }) {
  const { project } = batch;
  return (
    <Link to={`/batch/${batch.id}`} className="listing-row">
      <span className="listing-cell listing-name">{project?.name}</span>
      <span className="listing-cell listing-muted">{project?.country}</span>
      <span className="listing-cell listing-muted">{batch.vintage}</span>
      <span className="listing-cell">{formatTonnes(batch.availableTonnes)}</span>
      <span className="listing-cell listing-price">
        {formatCurrency(batch.pricePerTonne)}
      </span>
    </Link>
  );
}
