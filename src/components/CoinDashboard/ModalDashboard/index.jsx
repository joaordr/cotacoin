import { useContext } from 'react';
import ReactModal from 'react-modal';

import MarketInfos from '../MarketInfos';

import styles from './modalDashboard.module.scss';
import { CoinsContext } from '../../../contexts/CoinsContext';

ReactModal.setAppElement('body');
export default function ModalDashboard() {
    const { selectedCoin, setSelectedCoin } = useContext(CoinsContext);

    function onRequestClose() {
        setSelectedCoin(null);
        // router.replace(`/${activeSeed}`, undefined, { shallow: true });
    }

    return (
        <ReactModal
            isOpen={(selectedCoin != null)}
            onRequestClose={onRequestClose}
            overlayClassName={styles.ReactModal__Overlay}
            className={styles.ReactModal__Content}
        >
            <MarketInfos coin={selectedCoin} />
        </ReactModal>
    )
}