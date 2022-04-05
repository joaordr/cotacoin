import { PaginationItem } from "./PaginationItem";

import styles from './pagination.module.scss'
import { useContext } from "react";
import { CoinsContext } from "../../../../contexts/CoinsContext";

const siblingsCount = 1;

function generatePagesArray(from, to) {
    return [...new Array(to - from)].map((_, index) => {
        return from + index + 1;
    }).filter(page => page > 0);
}

export function Pagination() {
    const { pages, itemsPerPage, activePage, setActivePage } = useContext(CoinsContext);

    const previousPages = activePage > 1 ? generatePagesArray(activePage - 1 - siblingsCount, activePage - 1) : [];
    const nextPages = activePage < pages ? generatePagesArray(activePage, Math.min(activePage + siblingsCount, pages)) : [];

    return (
        <div className={styles.container}>
            {/* <div className={styles.header}>
                <strong>{(currentPage * itemsPerPage) + 1 - itemsPerPage}</strong> - <strong>{(currentPage * itemsPerPage) <= totalCountRegisters ? currentPage * itemsPerPage : totalCountRegisters}</strong> de <strong>{totalCountRegisters}</strong>
            </div> */}

            <div className={styles.content}>
                {activePage > (1 + siblingsCount) && (
                    <>
                        <PaginationItem number={1} onPageChange={setActivePage} />
                        {activePage > (2 + siblingsCount) && <p>...</p>}
                    </>
                )}

                {previousPages.length > 0 && previousPages.map(page => {
                    return <PaginationItem key={page} number={page} onPageChange={setActivePage} />
                })}

                <PaginationItem number={activePage} isCurrent onPageChange={setActivePage} />

                {nextPages.length > 0 && nextPages.map(page => {
                    return <PaginationItem key={page} number={page} onPageChange={setActivePage} />
                })}

                {activePage + siblingsCount < pages && (
                    <>
                        {(activePage + 1 + siblingsCount) < pages && <p>...</p>}
                        <PaginationItem number={pages} onPageChange={setActivePage} />
                    </>
                )}
            </div>


        </div>
    )
}