import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import {
  connectWallet,
  disconnectWallet,
  getStoredWallet,
} from '../services/wallet.js';

export const AppContext = createContext(null);

/**
 * Global application state: wallet session, user credit holdings and
 * retirement certificates. Holdings and certificates live in memory and are
 * seeded empty; buying adds holdings, retiring converts them into
 * certificates.
 */
export function AppProvider({ children }) {
  const [wallet, setWallet] = useState(null);
  const [connecting, setConnecting] = useState(false);
  const [holdings, setHoldings] = useState([]);
  const [certificates, setCertificates] = useState([]);

  // Restore a persisted wallet session on first mount.
  useEffect(() => {
    const stored = getStoredWallet();
    if (stored) {
      setWallet(stored);
    }
  }, []);

  const connect = useCallback(async () => {
    setConnecting(true);
    try {
      const session = await connectWallet();
      setWallet(session);
      return session;
    } finally {
      setConnecting(false);
    }
  }, []);

  const disconnect = useCallback(async () => {
    await disconnectWallet();
    setWallet(null);
  }, []);

  const addHolding = useCallback((holding) => {
    setHoldings((prev) => {
      const existing = prev.find((h) => h.batchId === holding.batchId);
      if (existing) {
        return prev.map((h) =>
          h.batchId === holding.batchId
            ? { ...h, tonnes: h.tonnes + holding.tonnes }
            : h
        );
      }
      return [...prev, holding];
    });
  }, []);

  const retireHolding = useCallback((batchId, tonnes, certificate) => {
    setHoldings((prev) =>
      prev
        .map((h) =>
          h.batchId === batchId ? { ...h, tonnes: h.tonnes - tonnes } : h
        )
        .filter((h) => h.tonnes > 0)
    );
    setCertificates((prev) => [certificate, ...prev]);
  }, []);

  const value = useMemo(
    () => ({
      wallet,
      connecting,
      connect,
      disconnect,
      holdings,
      certificates,
      addHolding,
      retireHolding,
    }),
    [
      wallet,
      connecting,
      connect,
      disconnect,
      holdings,
      certificates,
      addHolding,
      retireHolding,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
