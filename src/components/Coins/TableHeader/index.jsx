import Search from './Search';
import { Pagination } from './Pagination';

import styles from './tableHeader.module.scss';

import {Grid, Stack} from '@mui/material';


export default function TableHeader() {
    return (

        <>
            <Grid container spacing={2} alignItems="flex-end">
                <Grid item md={6} xs={12}>
                    <Search />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Stack direction="row" justifyContent="flex-end">
                        <Pagination />
                    </Stack>
                </Grid>
            </Grid>
        </>

    )
}