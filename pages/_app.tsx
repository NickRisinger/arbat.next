import { ReactNode } from 'react';

import '~/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return getLayout(<Component {...pageProps} />);
}
