import { QueryClientProvider } from 'react-query'
import { CoinsProvider } from '../contexts/CoinsContext';
import { queryClient } from '../services/queryClient'

import { ReactQueryDevtools } from 'react-query/devtools'

import '../styles/globals.scss';
import { ThemeProvider } from '../contexts/ThemeContext';
import Header from '../components/Header';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <CoinsProvider>
          <Header />
          < Component {...pageProps} />
        </CoinsProvider>

        {/* <ReactQueryDevtools initialIsOpen={false} /> */}

      </QueryClientProvider>
    </ThemeProvider>

  )

}

export default MyApp;
