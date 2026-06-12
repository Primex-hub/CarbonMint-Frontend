import { useEffect, useRef } from 'react';

/**
 * Run a handler whenever a specific key is pressed at the document level.
 * Useful for keyboard shortcuts such as closing a modal on Escape.
 * @param {string} targetKey - the KeyboardEvent.key to listen for
 * @param {(event: KeyboardEvent) => void} handler - called on a match
 */
export function useKeyPress(targetKey, handler) {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === targetKey) savedHandler.current(event);
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [targetKey]);
}
