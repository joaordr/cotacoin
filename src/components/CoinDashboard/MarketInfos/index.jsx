/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { CoinsContext } from '../../../contexts/CoinsContext';
import { useMarketChart } from '../../../hooks/useMarketChart';
import FetchingLoader from '../../FetchingLoader';
import Graph from './Graph';

import styles from './marketInfos.module.scss';
import { LanguageContext } from '../../../contexts/LanguageContext';

export default function MarketInfos({ coin }) {
    const { translations, locale } = useContext(LanguageContext);

    const { setSelectedCoin } = useContext(CoinsContext);
    const { data, isFetching } = useMarketChart(coin.id, 1, locale == 'pt' ? 'brl' : 'usd');

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <img src={coin.image} alt="" />
                    <p>{coin.name}</p>
                    {(isFetching && data.prices.length > 0) && <FetchingLoader />}
                </div>
                <button className={styles.close} onClick={() => setSelectedCoin(null)}><AiOutlineClose /></button>

            </div>
            <Graph data={data.prices} isFetching={isFetching} description={translations.tableHeader.price} />
            <Graph data={data.total_volumes} isFetching={isFetching} description={translations.tableHeader.volume} />
            <Graph data={data.market_caps} isFetching={isFetching} description={translations.tableHeader.marketCap} />
        </div>
    )
}