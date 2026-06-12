import { useEffect, useRef } from 'react';

/**
 * Track the value a prop or state had on the previous render. Returns
 * `undefined` on the first render since there is no prior value yet.
 * @template T
 * @param {T} value - the current value to remember
 * @returns {T | undefined} the value from the previous render
 */
export function usePrevious(value) {
  const ref = useRef(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
