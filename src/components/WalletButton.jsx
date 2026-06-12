import { useWallet } from '../hooks/useWallet.js';
import { shortenAddress } from '../utils/format.js';
import './WalletButton.css';

/**
 * Wallet connect/disconnect control for the navbar. Uses the mock wallet
 * service via the app context.
 */
export default function WalletButton() {
  const { wallet, connecting, isConnected, connect, disconnect } = useWallet();

  if (isConnected) {
    return (
      <div className="wallet-button connected">
        <span className="wallet-dot" aria-hidden="true" />
        <span className="wallet-address" title={wallet.publicKey}>
          {shortenAddress(wallet.publicKey)}
        </span>
        <button
          type="button"
          className="wallet-disconnect"
          onClick={disconnect}
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      className="wallet-button"
      onClick={connect}
      disabled={connecting}
    >
      {connecting ? 'Connecting...' : 'Connect Wallet'}
    </button>
  );
}
