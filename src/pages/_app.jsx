import { QueryClientProvider } from 'react-query'
import { CoinsProvider } from '../contexts/CoinsContext';
import { queryClient } from '../services/queryClient'
import { SessionProvider } from "next-auth/react"

import { ReactQueryDevtools } from 'react-query/devtools'

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
            </CoinsProvider>

            {/* <ReactQueryDevtools initialIsOpen={false} /> */}

          </QueryClientProvider>
        </SessionProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default MyApp