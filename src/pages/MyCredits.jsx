import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWallet } from '../hooks/useWallet.js';
import { useHoldings } from '../hooks/useHoldings.js';
import { retireCredits } from '../services/retirement.js';
import { formatCurrency, formatTonnes } from '../utils/format.js';
import Button from '../components/Button.jsx';
import RetireModal from '../components/RetireModal.jsx';
import EmptyState from '../components/EmptyState.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';
import './MyCredits.css';

/**
 * Shows the connected wallet's credit holdings and lets the user retire
 * (burn) credits to receive a certificate.
 */
export default function MyCredits() {
  const { wallet, isConnected, connect } = useWallet();
  const { holdings, totals, retireHolding } = useHoldings();

  const [active, setActive] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  async function handleConfirm(tonnes, beneficiary) {
    setSubmitting(true);
    setError(null);
    try {
      const certificate = await retireCredits({
        holding: active,
        tonnes,
        owner: wallet?.publicKey,
        beneficiary,
      });
      retireHolding(active.batchId, tonnes, certificate);
      setActive(null);
    } catch (err) {
      setError(err.message || 'Retirement failed.');
    } finally {
      setSubmitting(false);
    }
  }

  if (!isConnected) {
    return (
      <EmptyState
        title="Connect your wallet"
        message="Connect a wallet to view your carbon-credit holdings."
        action={<Button onClick={connect}>Connect Wallet</Button>}
      />
    );
  }

  return (
    <div className="my-credits">
      <div className="page-header">
        <h1>My Credits</h1>
        <p>Credits held by {wallet.publicKey.slice(0, 6)}...</p>
      </div>

      <div className="holdings-summary">
        <div className="summary-card">
          <span>Held</span>
          <strong>{formatTonnes(totals.owned)}</strong>
        </div>
        <div className="summary-card">
          <span>Retired</span>
          <strong>{formatTonnes(totals.retired)}</strong>
        </div>
      </div>

      {error && <ErrorMessage message={error} />}

      {holdings.length === 0 ? (
        <EmptyState
          title="No credits yet"
          message="Buy verified carbon credits from the marketplace to get started."
          action={
            <Link to="/marketplace">
              <Button>Browse Marketplace</Button>
            </Link>
          }
        />
      ) : (
        <div className="holdings-list">
          {holdings.map((holding) => (
            <div className="holding-row" key={holding.batchId}>
              <div className="holding-info">
                <strong>{holding.projectName}</strong>
                <span className="holding-sub">
                  Vintage {holding.vintage} · {formatCurrency(holding.pricePerTonne)}{' '}
                  / tonne
                </span>
              </div>
              <div className="holding-amount">{formatTonnes(holding.tonnes)}</div>
              <Button variant="danger" onClick={() => setActive(holding)}>
                Retire
              </Button>
            </div>
          ))}
        </div>
      )}

      {active && (
        <RetireModal
          holding={active}
          submitting={submitting}
          onConfirm={handleConfirm}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  );
}
