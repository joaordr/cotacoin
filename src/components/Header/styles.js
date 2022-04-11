import styled from 'styled-components';
import { styled as MuiStyled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';

export const PageHeader = MuiStyled(AppBar)(() => ({
    background: 'var(--background-header)',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.26)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 40px',
    ['@media (max-width:720px)']: {
        padding: '0 10px',
    }
}));

export const Logo = styled.h1`
    display: flex;
    align-items: center;

    font-size: 20pt;
    user-select: none;
    color: var(--logo-color-1);
    font-weight: 300;

    strong {
        display: flex;
        align-items: center;
        font-size: 25pt;
        color: var(--logo-color-2);
        font-weight: 600;

        svg {
            font-size: 21pt;
        }
    }
`;