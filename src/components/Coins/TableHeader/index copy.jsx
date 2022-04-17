import Search from './Search';
import { Pagination } from './Pagination';

import styles from './tableHeader.module.scss';


export default function TableHeader() {
    return (
        <div className={styles.container}>
            <Search />
            <Pagination />          
        </div>
    )
}