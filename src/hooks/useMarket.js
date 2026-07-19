import { useCallback, useEffect, useState } from 'react';
import { fetchBatches } from '../services/api.js';

/**
 * Load the list of marketplace batches with loading and error state.
 * @returns {{
 *   batches: Array,
 *   loading: boolean,
 *   error: string|null,
 *   lastUpdated: Date|null,
 *   reload: Function,
 * }}
 */
export function useMarket() {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchBatches();
      setBatches(data);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err.message || 'Failed to load marketplace.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { batches, loading, error, lastUpdated, reload: load };
}
