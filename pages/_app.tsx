import { ThirdwebProvider } from '@thirdweb-dev/react';
import { WalletModalProvider as SolanaWalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { ThirdwebProvider as SolanaThirdwebProvider } from '@thirdweb-dev/react/solana';
import { Network } from '@thirdweb-dev/sdk/solana';

const network: Network = 'devnet';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SolanaThirdwebProvider
      network={network}
      authConfig={{
        domain: 'example.com',
        authUrl: '/api/auth',
        loginRedirect: '/',
      }}>
      <SolanaWalletModalProvider>
        <ThirdwebProvider
          desiredChainId={1}
          authConfig={{
            // Set this to your domain to prevent signature malleability attacks.
            domain: 'example.com',
            authUrl: '/api/auth',
          }}>
          <Component {...pageProps} />
        </ThirdwebProvider>
      </SolanaWalletModalProvider>
    </SolanaThirdwebProvider>
  );
}
