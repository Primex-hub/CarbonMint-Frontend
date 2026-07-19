/**
 * LiveRegion — a visually-hidden ARIA live region for screen-reader
 * announcements of asynchronous UI updates.
 *
 * Usage:
 *   <LiveRegion message="Purchase complete! You bought 10 tonnes." />
 *   <LiveRegion politeness="assertive" message={error} />
 *
 * Guidelines (WCAG 4.1.3 / ARIA 1.2):
 * - Use politeness="polite"    (default) for non-critical feedback:
 *     loading complete, success messages, copy confirmation.
 * - Use politeness="assertive" only for urgent interruptions:
 *     blocking errors that require immediate user attention.
 * - Keep message text concise. Pass an empty string / null to silence.
 * - The region is always present in the DOM so assistive technologies
 *   register it before any message is injected.
 *
 * @param {object}  props
 * @param {string}  [props.message]     - text to announce; falsy = silent
 * @param {'polite'|'assertive'} [props.politeness='polite']
 * @param {string}  [props.id]          - optional id for testing / labelling
 */
export default function LiveRegion({ message = '', politeness = 'polite', id }) {
  return (
    <div
      id={id}
      role="status"
      aria-live={politeness}
      aria-atomic="true"
      aria-relevant="additions text"
      // Visually hidden but available to assistive technologies.
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0,0,0,0)',
        whiteSpace: 'nowrap',
        border: 0,
      }}
    >
      {message || ''}
    </div>
  );
}
