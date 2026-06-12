import { useState } from 'react';
import './CopyButton.css';

/**
 * Copies a string to the clipboard and briefly confirms the action.
 * @param {object} props
 * @param {string} props.value - the text to copy
 * @param {string} [props.label] - accessible label describing the value
 */
export default function CopyButton({ value, label = 'value', className = '' }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      className={`copy-btn ${className}`.trim()}
      onClick={handleCopy}
      aria-label={copied ? `Copied ${label}` : `Copy ${label}`}
      title={copied ? 'Copied' : 'Copy'}
    >
      {copied ? '✓ Copied' : '⧉ Copy'}
    </button>
  );
}
