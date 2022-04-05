import { useContext } from 'react';
import { CoinsContext } from '../../contexts/CoinsContext';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';

import styles from './coinDashboard.module.scss';
import MarketInfos from './MarketInfos';
import ModalDashboard from './ModalDashboard';

export default function CoinDashBoard() {
    const { width } = useWindowDimensions();
    const { selectedCoin } = useContext(CoinsContext);

    return (
        <>
            {selectedCoin != null && selectedCoin != undefined && (
                <>
                    {(width < 1024) ? (
                        (selectedCoin != null && selectedCoin != undefined) ? <ModalDashboard /> : <></>
                    ) : (
                        <div className={styles.container}>
                            {selectedCoin == null || selectedCoin == undefined ? (
                                <h1>Selecione uma criptomoeda para visualizar mais informações</h1>
                            ) : <MarketInfos coin={selectedCoin} />}
                        </div>
                    )}
                </>
            )}
        </>

    )


}