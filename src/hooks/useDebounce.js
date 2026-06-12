import { useEffect, useState } from 'react';

/**
 * Debounce a rapidly changing value, returning the latest value only after it
 * has stopped changing for `delay` milliseconds. Useful for search inputs.
 * @template T
 * @param {T} value - the value to debounce
 * @param {number} [delay] - quiet period in milliseconds
 * @returns {T} the debounced value
 */
export function useDebounce(value, delay = 250) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}
