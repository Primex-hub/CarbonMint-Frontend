import { useEffect, useMemo, useState } from 'react';
import Button from './Button.jsx';
import { formatTonnes } from '../utils/format.js';
import { validateRetireQuantity } from '../utils/validate.js';
import './RetireModal.css';

/**
 * Modal dialog for retiring credits from a single holding. On confirm it
 * calls onConfirm(tonnes, beneficiary) and lets the parent issue the
 * certificate.
 * @param {object} props
 * @param {object} props.holding
 * @param {boolean} props.submitting
 * @param {(tonnes: number, beneficiary: string) => void} props.onConfirm
 * @param {() => void} props.onClose
 */
export default function RetireModal({ holding, submitting, onConfirm, onClose }) {
  const [tonnes, setTonnes] = useState('');
  const [beneficiary, setBeneficiary] = useState('');
  const [touched, setTouched] = useState(false);

  const validation = useMemo(
    () => validateRetireQuantity(tonnes, holding.tonnes),
    [tonnes, holding.tonnes]
  );

  // Close on Escape and lock background scroll while the modal is open.
  useEffect(() => {
    function onKey(event) {
      if (event.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  function handleConfirm() {
    setTouched(true);
    if (!validation.valid) return;
    onConfirm(Number(tonnes), beneficiary.trim());
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-head">
          <h3>Retire credits</h3>
          <button type="button" className="modal-close" onClick={onClose}>
            ×
          </button>
        </header>

        <p className="modal-sub">
          {holding.projectName} · Vintage {holding.vintage}
        </p>
        <p className="modal-balance">
          You hold {formatTonnes(holding.tonnes)} in this batch.
        </p>

        <label className="modal-field">
          <span>Tonnes to retire</span>
          <input
            type="number"
            min="1"
            step="1"
            value={tonnes}
            placeholder="0"
            onChange={(e) => setTonnes(e.target.value)}
            onBlur={() => setTouched(true)}
          />
        </label>

        <label className="modal-field">
          <span>Beneficiary (optional)</span>
          <input
            type="text"
            value={beneficiary}
            placeholder="On behalf of..."
            onChange={(e) => setBeneficiary(e.target.value)}
          />
        </label>

        {touched && !validation.valid && (
          <p className="modal-error">{validation.error}</p>
        )}

        <div className="modal-actions">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleConfirm}
            disabled={submitting || (touched && !validation.valid)}
          >
            {submitting ? 'Retiring...' : 'Confirm retire'}
          </Button>
        </div>
      </div>
    </div>
  );
}
