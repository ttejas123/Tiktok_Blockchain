import './App.css';
import React, {useMemo} from 'react';
import {ConnectionProvider, WalletProvider, useWallet, useConnection } from "@solana/wallet-adapter-react"

import { SOLANA_HOST, NETWORK } from './utils/const';
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolletExtensionWallet,  
} from "@solana/wallet-adapter-wallets"

import { WalletModalProvider} from "@solana/wallet-adapter-react-ui"
import Layout from './allrouts.js'
require('@solana/wallet-adapter-react-ui/styles.css');
function App() {
  const endpoint = useMemo(() => SOLANA_HOST, [NETWORK]);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolletExtensionWallet({ NETWORK }),
    ],
    [NETWORK]
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <Layout />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  );
}

export default App;