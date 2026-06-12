import { useState } from 'react';
import { useMarket } from '../hooks/useMarket.js';
import BatchCard from '../components/BatchCard.jsx';
import ListingRow from '../components/ListingRow.jsx';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';
import EmptyState from '../components/EmptyState.jsx';
import './Marketplace.css';

/**
 * Marketplace page listing all available carbon-credit batches. Supports a
 * grid and list view toggle.
 */
export default function Marketplace() {
  const { batches, loading, error, reload } = useMarket();
  const [view, setView] = useState('grid');

  return (
    <div className="marketplace">
      <div className="marketplace-head">
        <div className="page-header">
          <h1>Marketplace</h1>
          <p>Verified carbon-credit batches available to purchase.</p>
        </div>
        <div className="view-toggle">
          <button
            type="button"
            className={view === 'grid' ? 'active' : ''}
            onClick={() => setView('grid')}
          >
            Grid
          </button>
          <button
            type="button"
            className={view === 'list' ? 'active' : ''}
            onClick={() => setView('list')}
          >
            List
          </button>
        </div>
      </div>

      {loading && <Loader label="Loading batches..." />}
      {!loading && error && <ErrorMessage message={error} onRetry={reload} />}
      {!loading && !error && batches.length === 0 && (
        <EmptyState
          title="No batches listed"
          message="Check back soon as new verified projects mint their credits."
        />
      )}

      {!loading && !error && batches.length > 0 && view === 'grid' && (
        <div className="marketplace-grid">
          {batches.map((batch) => (
            <BatchCard key={batch.id} batch={batch} />
          ))}
        </div>
      )}

      {!loading && !error && batches.length > 0 && view === 'list' && (
        <div className="marketplace-list">
          <div className="listing-header">
            <span>Project</span>
            <span>Country</span>
            <span>Vintage</span>
            <span>Available</span>
            <span className="listing-header-price">Price</span>
          </div>
          {batches.map((batch) => (
            <ListingRow key={batch.id} batch={batch} />
          ))}
        </div>
      )}
    </div>
  );
}
