import Table from "./Table";
import TableHeader from "./TableHeader";

import styles from './coins.module.scss';

export default function Coins() {
    return (
        <div className={styles.container}>
            <TableHeader />
            <Table />
        </div>
    )
}