import { Link } from 'react-router-dom';
import { useHoldings } from '../hooks/useHoldings.js';
import { useWallet } from '../hooks/useWallet.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { formatTonnes } from '../utils/format.js';
import CertificateCard from '../components/CertificateCard.jsx';
import EmptyState from '../components/EmptyState.jsx';
import Button from '../components/Button.jsx';
import './Retirements.css';

/**
 * Lists all retirement certificates issued to the connected user.
 */
export default function Retirements() {
  useDocumentTitle('Retirements');
  const { isConnected, connect } = useWallet();
  const { certificates, totals } = useHoldings();

  if (!isConnected) {
    return (
      <EmptyState
        title="Connect your wallet"
        message="Connect a wallet to view your retirement certificates."
        action={<Button onClick={connect}>Connect Wallet</Button>}
      />
    );
  }

  return (
    <div className="retirements">
      <div className="page-header">
        <h1>Retirements</h1>
        <p>
          Proof-of-offset certificates for credits you have permanently retired.
          Total retired: {formatTonnes(totals.retired)}.
        </p>
      </div>

      {certificates.length === 0 ? (
        <EmptyState
          title="No retirements yet"
          message="Retire credits from My Credits to generate an offset certificate."
          action={
            <Link to="/my-credits">
              <Button>Go to My Credits</Button>
            </Link>
          }
        />
      ) : (
        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      )}
    </div>
  );
}
