import { useMemo, useState } from 'react';
import Button from './Button.jsx';
import { formatCurrency, formatTonnes } from '../utils/format.js';
import { validateBuyQuantity } from '../utils/validate.js';
import { useWallet } from '../hooks/useWallet.js';
import './BuyForm.css';

/**
 * Purchase form for a batch. Validates the requested quantity against the
 * available supply and shows a live total cost.
 * @param {object} props
 * @param {object} props.batch
 * @param {(quantity: number) => Promise<void>} props.onBuy
 * @param {boolean} props.submitting
 */
export default function BuyForm({ batch, onBuy, submitting }) {
  const { isConnected, connect } = useWallet();
  const [quantity, setQuantity] = useState('');
  const [touched, setTouched] = useState(false);
  const soldOut = batch.availableTonnes <= 0;

  const validation = useMemo(
    () => validateBuyQuantity(quantity, batch.availableTonnes),
    [quantity, batch.availableTonnes]
  );

  const total = useMemo(() => {
    const q = Number(quantity);
    if (Number.isNaN(q) || q <= 0) return 0;
    return q * batch.pricePerTonne;
  }, [quantity, batch.pricePerTonne]);

  function handleSubmit(event) {
    event.preventDefault();
    setTouched(true);
    if (!validation.valid) return;
    onBuy(Number(quantity));
  }

  if (soldOut) {
    return (
      <div className="buy-form">
        <h2 className="buy-form-title">Buy credits</h2>
        <p className="buy-form-soldout">
          This batch is fully sold. Browse the marketplace for other available
          credits.
        </p>
      </div>
    );
  }

  return (
    <form className="buy-form" onSubmit={handleSubmit}>
      <h2 className="buy-form-title">Buy credits</h2>
      <label className="buy-form-field">
        <span>Quantity (tonnes)</span>
        <input
          type="number"
          min="1"
          step="1"
          value={quantity}
          placeholder="0"
          onChange={(e) => setQuantity(e.target.value)}
          onBlur={() => setTouched(true)}
        />
      </label>

      {touched && !validation.valid && (
        <p className="buy-form-error">{validation.error}</p>
      )}

      <div className="buy-form-summary">
        <span>Total</span>
        <strong>{formatCurrency(total)}</strong>
      </div>
      <p className="buy-form-available">
        {formatTonnes(batch.availableTonnes)} available at{' '}
        {formatCurrency(batch.pricePerTonne)} / tonne
      </p>

      {isConnected ? (
        <Button type="submit" disabled={submitting || (touched && !validation.valid)}>
          {submitting ? 'Processing...' : 'Buy now'}
        </Button>
      ) : (
        <Button type="button" variant="secondary" onClick={connect}>
          Connect wallet to buy
        </Button>
      )}
    </form>
  );
}
