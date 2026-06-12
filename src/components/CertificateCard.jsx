import { formatDate, formatTonnes, shortenAddress } from '../utils/format.js';
import './CertificateCard.css';

/**
 * Displays a single retirement certificate as a printable-looking card.
 * @param {object} props
 * @param {object} props.certificate
 */
export default function CertificateCard({ certificate }) {
  return (
    <article className="certificate">
      <div className="certificate-ribbon">Retirement Certificate</div>
      <div className="certificate-body">
        <h3 className="certificate-tonnes">{formatTonnes(certificate.tonnes)}</h3>
        <p className="certificate-project">{certificate.projectName}</p>

        <dl className="certificate-meta">
          <div>
            <dt>Certificate ID</dt>
            <dd className="mono">{certificate.id}</dd>
          </div>
          <div>
            <dt>Vintage</dt>
            <dd>{certificate.vintage}</dd>
          </div>
          <div>
            <dt>Serial</dt>
            <dd className="mono">{certificate.serial}</dd>
          </div>
          <div>
            <dt>Retired</dt>
            <dd>{formatDate(certificate.retiredAt)}</dd>
          </div>
          <div>
            <dt>Beneficiary</dt>
            <dd>{certificate.beneficiary || shortenAddress(certificate.owner)}</dd>
          </div>
          <div>
            <dt>Burn tx</dt>
            <dd className="mono certificate-tx">{certificate.burnTxHash}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
