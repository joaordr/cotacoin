import { Grid, Stack } from '@mui/material';

import Search from './Search';
import { Pagination } from './Pagination';

import { useWindowDimensions } from "../../../hooks/useWindowDimensions";

export default function TableHeader() {
    const { width } = useWindowDimensions();

    return (
        <Grid container spacing={2} alignItems="flex-end" sx={{ mb: "3px", pr: "5px", pl: "5px" }}>
            <Grid item sm={5} xs={12}>
                <Search />
            </Grid>
            <Grid item sm={7} xs={12}>
                <Stack direction="row" justifyContent={width > 600 ? "flex-end" : "center"}>
                    <Pagination />
                </Stack>
            </Grid>
        </Grid>
    )
}