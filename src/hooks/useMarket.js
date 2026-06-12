import { useCallback, useEffect, useState } from 'react';
import { fetchBatches } from '../services/api.js';

/**
 * Load the list of marketplace batches with loading and error state.
 * @returns {{
 *   batches: Array,
 *   loading: boolean,
 *   error: string|null,
 *   reload: Function,
 * }}
 */
export function useMarket() {
  const [batches, setBatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchBatches();
      setBatches(data);
    } catch (err) {
      setError(err.message || 'Failed to load marketplace.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { batches, loading, error, reload: load };
}
