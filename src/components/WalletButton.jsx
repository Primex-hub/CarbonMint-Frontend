import { useWallet } from '../hooks/useWallet.js';
import { shortenAddress } from '../utils/format.js';
import LiveRegion from './LiveRegion.jsx';
import './WalletButton.css';

/**
 * Wallet connect/disconnect control for the navbar. Uses the mock wallet
 * service via the app context.
 */
export default function WalletButton() {
  const { wallet, connecting, isConnected, connect, disconnect } = useWallet();

  // Build a polite announcement that reflects the current wallet state.
  let announcement = '';
  if (connecting) {
    announcement = 'Connecting wallet…';
  } else if (isConnected) {
    announcement = `Wallet connected: ${wallet.publicKey}`;
  }
  // Disconnected state is announced via the LiveRegion in the disconnected branch below.

  if (isConnected) {
    return (
      <div className="wallet-button connected">
        <LiveRegion message={announcement} />
        <span className="wallet-dot" aria-hidden="true" />
        <span className="wallet-address" title={wallet.publicKey}>
          {shortenAddress(wallet.publicKey)}
        </span>
        <button
          type="button"
          className="wallet-disconnect"
          onClick={disconnect}
          aria-label="Disconnect wallet"
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
      aria-label="Connect wallet"
    >
      <LiveRegion message={connecting ? 'Connecting wallet…' : ''} />
      {connecting ? 'Connecting...' : 'Connect Wallet'}
    </button>
  );
}
