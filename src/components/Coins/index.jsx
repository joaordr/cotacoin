import Table from "./Table";
import TableHeader from "./TableHeader";

import Container from '@mui/material/Container';


import styles from './coins.module.scss';
import CoinDashBoard from "../CoinDashboard";

export default function Coins() {
    return (
        <Container maxWidth="md" sx={{pl: 0, pr: 0}}>
            <TableHeader />
            <Table />
        </Container>
    )
}