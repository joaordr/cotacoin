import Head from 'next/head';
import Coins from '../components/Coins';
import CoinDashboard from '../components/CoinDashboard';

import styles from '../styles/Home.module.scss';

export default function coins() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CotaCoin</title>
      </Head>

      {/* <div className={styles.content}>
        <Coins />
        <CoinDashboard />
      </div> */}

    </div>
  )
}


// /* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect } from 'react';
// import { useRouter } from 'next/router'
// import Head from 'next/head';

// export default function Home() {
//   const router = useRouter();
//   useEffect(() => {
//     router.push('/pt');
//   }, [])
//   return (
//     <Head>
//       <title>CotaCoin</title>
//     </Head>
//   )
// }
