import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';

/**
 * Access wallet state and connect/disconnect actions.
 * @returns {{
 *   wallet: object|null,
 *   connecting: boolean,
 *   isConnected: boolean,
 *   connect: Function,
 *   disconnect: Function,
 * }}
 */
export function useWallet() {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useWallet must be used within an AppProvider');
  }
  const { wallet, connecting, connect, disconnect } = ctx;
  return {
    wallet,
    connecting,
    isConnected: Boolean(wallet),
    connect,
    disconnect,
  };
}
