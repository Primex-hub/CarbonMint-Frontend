import { useEffect, useState } from 'react';

/**
 * Track the viewport size, updating on resize. Useful for switching layouts
 * or behaviours at responsive breakpoints from JavaScript.
 * @returns {{ width: number, height: number }} the current viewport size
 */
export function useWindowSize() {
  const [size, setSize] = useState(() => ({
    width: typeof window === 'undefined' ? 0 : window.innerWidth,
    height: typeof window === 'undefined' ? 0 : window.innerHeight,
  }));

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    function onResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return size;
}
