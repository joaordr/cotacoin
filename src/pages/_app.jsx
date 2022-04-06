import { QueryClientProvider } from 'react-query'
import { CoinsProvider } from '../contexts/CoinsContext';
import { queryClient } from '../services/queryClient'

import { ReactQueryDevtools } from 'react-query/devtools'

import '../styles/globals.scss';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';

import Header from '../components/Header';

const MyApp = ({ Component, pageProps }) => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <CoinsProvider>
            <Header />
            < Component {...pageProps} />
          </CoinsProvider>

          {/* <ReactQueryDevtools initialIsOpen={false} /> */}

        </QueryClientProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default MyApp;
