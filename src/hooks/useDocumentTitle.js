import { useEffect } from 'react';

const BASE_TITLE = 'CarbonMint';

/**
 * Set the document title for the current page and restore it on unmount.
 * Passing a falsy title leaves the base brand title in place.
 * @param {string} [title] - page-specific title segment
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    const previous = document.title;
    document.title = title ? `${title} · ${BASE_TITLE}` : BASE_TITLE;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
