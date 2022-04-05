import styles from './paginationItem.module.scss'

export function PaginationItem({ isCurrent = false, number, onPageChange }) {
    if (isCurrent) {
        return (
            <button className={styles.button} disabled>{number}</button>
        )
    }

    return (
        <button className={styles.button} onClick={() => onPageChange(number)}>{number}</button>
    )

}