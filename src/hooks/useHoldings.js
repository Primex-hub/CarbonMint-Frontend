import { useContext, useMemo } from 'react';
import { AppContext } from '../context/AppContext.jsx';

/**
 * Access the user's credit holdings, retirement certificates and the
 * actions that mutate them. Also exposes a few derived totals.
 */
export function useHoldings() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useHoldings must be used within an AppProvider');
  }
  const { holdings, certificates, addHolding, retireHolding } = ctx;

  const totals = useMemo(() => {
    const owned = holdings.reduce((sum, h) => sum + h.tonnes, 0);
    const retired = certificates.reduce((sum, c) => sum + c.tonnes, 0);
    return { owned, retired };
  }, [holdings, certificates]);

  return { holdings, certificates, totals, addHolding, retireHolding };
}
