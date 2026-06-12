import { useCallback, useState } from 'react';

/**
 * Manage a boolean flag with a stable toggle/set API. Handy for modals,
 * disclosure widgets and other open/closed UI state.
 * @param {boolean} [initial] - the starting value
 * @returns {[boolean, () => void, (next?: boolean) => void]} the value, a
 *   toggle function, and a setter that accepts an explicit boolean
 */
export function useToggle(initial = false) {
  const [value, setValue] = useState(Boolean(initial));

  const toggle = useCallback(() => setValue((v) => !v), []);

  const set = useCallback((next) => {
    setValue((v) => (typeof next === 'boolean' ? next : !v));
  }, []);

  return [value, toggle, set];
}
