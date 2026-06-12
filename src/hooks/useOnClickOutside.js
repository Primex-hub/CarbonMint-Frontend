import { useEffect } from 'react';

/**
 * Invoke a handler when a pointer or touch event occurs outside the given
 * element. Commonly used to dismiss dropdowns, popovers and menus.
 * @param {import('react').RefObject<HTMLElement>} ref - element to watch
 * @param {(event: Event) => void} handler - called on an outside interaction
 */
export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    function listener(event) {
      const el = ref.current;
      if (!el || el.contains(event.target)) return;
      handler(event);
    }
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
