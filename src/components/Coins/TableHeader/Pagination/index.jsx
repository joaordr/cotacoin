import { useContext } from "react";
import { Pagination as MuiPagination } from '@mui/material';

import { CoinsContext } from "../../../../contexts/CoinsContext";

export function Pagination() {
    const { pages, setActivePage } = useContext(CoinsContext);
    return <MuiPagination count={pages} shape="rounded" size="small" showFirstButton showLastButton onChange={(event, value) => setActivePage(value)} />
}