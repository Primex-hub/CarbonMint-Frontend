import './Footer.css';

/**
 * Site footer with project tagline and a network status note.
 */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-tagline">
          CarbonMint — tokenized carbon credits on Stellar &amp; Soroban.
        </p>
        <p className="footer-note">
          Demo build · mock data · {year} · Network: TESTNET
        </p>
      </div>
    </footer>
  );
}
