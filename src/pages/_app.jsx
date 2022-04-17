import { QueryClientProvider } from 'react-query'
import { CoinsProvider } from '../contexts/CoinsContext';
import { queryClient } from '../services/queryClient'
import { SessionProvider } from "next-auth/react"

import { GlobalStyles } from "../styles/global";

import '../styles/globals.scss';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';


import Header from '../components/Header';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <LanguageProvider>
      <ThemeProvider>
        <SessionProvider session={session}>
          <QueryClientProvider client={queryClient}>
            <CoinsProvider>
              <Header />
              < Component {...pageProps} />
              <GlobalStyles />
            </CoinsProvider>

            {/* <ReactQueryDevtools initialIsOpen={false} /> */}

          </QueryClientProvider>
        </SessionProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default MyApp