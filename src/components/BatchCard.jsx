import { Link } from 'react-router-dom';
import {
  availabilityPercent,
  formatCurrency,
  formatTonnes,
} from '../utils/format.js';
import './BatchCard.css';

/**
 * Card summarizing a credit batch in the marketplace grid.
 * @param {object} props
 * @param {object} props.batch - batch with embedded project metadata
 */
export default function BatchCard({ batch }) {
  const { project } = batch;
  const pct = availabilityPercent(batch.availableTonnes, batch.totalTonnes);
  return (
    <Link to={`/batch/${batch.id}`} className="batch-card">
      <div className="batch-card-head">
        <span className="batch-card-type">{project?.type}</span>
        <span className="batch-card-vintage">Vintage {batch.vintage}</span>
      </div>
      <h3 className="batch-card-name">{project?.name}</h3>
      <p className="batch-card-country">{project?.country}</p>
      <div className="batch-card-stats">
        <div>
          <span className="batch-card-label">Price</span>
          <strong>{formatCurrency(batch.pricePerTonne)}</strong>
        </div>
        <div>
          <span className="batch-card-label">Available</span>
          <strong>{formatTonnes(batch.availableTonnes)}</strong>
        </div>
      </div>
      <div className="batch-card-bar" aria-hidden="true">
        <span className="batch-card-bar-fill" style={{ width: `${pct}%` }} />
      </div>
    </Link>
  );
}
