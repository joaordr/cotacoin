import { BsCoin } from 'react-icons/bs';
import Menu from './Menu';

import { PageHeader, Logo } from './styles';

export default function Header() {
    return (
        <>
            <PageHeader position="sticky">
                <Logo>Cota<strong>C<BsCoin />in</strong></Logo>
                <Menu />
            </PageHeader >
        </>

    )
}