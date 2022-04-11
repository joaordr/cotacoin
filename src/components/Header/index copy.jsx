import { BsCoin } from 'react-icons/bs';

import styles from './header.module.scss';
import MenuButton from './MenuButton';

export default function Header() {
    return (
        <div className={styles.container}>
            <h1>Cota<strong>C<BsCoin />in</strong></h1>
            <div className={styles.menu_container}>
                <MenuButton />
            </div>
        </div >
    )
}