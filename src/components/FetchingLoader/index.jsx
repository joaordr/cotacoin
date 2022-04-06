import { FiLoader } from "react-icons/fi";
import styles from './fetchingLoader.module.scss';

export default function FetchingLoader() {
    return (
        <div className={styles.lds_dual_ring}></div>
    )
}