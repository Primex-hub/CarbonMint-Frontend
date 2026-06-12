import { useEffect, useRef } from 'react';

/**
 * Run a callback on a fixed interval. Passing a `null` delay pauses the timer
 * without tearing down the component, and the latest callback is always used.
 * @param {() => void} callback - function to run each tick
 * @param {number | null} delay - interval in milliseconds, or null to pause
 */
export function useInterval(callback, delay) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null || delay === undefined) return undefined;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}
