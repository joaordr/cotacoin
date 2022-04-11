/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from 'react';
import { BsFillMoonFill } from 'react-icons/bs';
import { MdLanguage } from 'react-icons/md';
import { signOut, useSession } from 'next-auth/react';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import { IconButton, MenuItem, Button, Divider } from '@mui/material';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ThemeContext } from "../../../contexts/ThemeContext";


// import styles from './menu.module.scss';
import LanguageManager from '../../LanguageManager';
import ModalSignIn from '../../ModalSignIn';
import { LanguageContext } from '../../../contexts/LanguageContext';

import { SettingsMenu, MenuButton, LoginButton, ThemeSwitcher } from './styles';




export default function Menu() {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const { translations } = useContext(LanguageContext);
    const [isModalSignInOpen, setIsModalSignInOpen] = useState(false);
    const { data: session, status } = useSession();

    const [isOpen, setIsOpen] = useState(false);
    function handleClick(event) {
        setIsOpen(event.currentTarget);
    };

    return (
        <>
            <MenuButton
                id="menu-button"
                edge="start"
                color="inherit"
                aria-label="menu"
                size="large"
                aria-controls={isOpen ? 'settings-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon fontSize="inherit" />
            </MenuButton>

            <SettingsMenu
                id="settings-menu"
                anchorEl={isOpen}
                open={Boolean(isOpen)}
                onClose={() => setIsOpen(false)}
                MenuListProps={{
                    'aria-labelledby': 'menu-button',
                }}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                {(status === "authenticated") ? (
                    <Stack direction="row" spacing={2} sx={{ px: 1 }}>
                        <Avatar
                            alt="User image"
                            src={session.user.image}
                            sx={{ width: 56, height: 56 }}
                        />
                        <Stack direction="column" spacing={1} justifyContent="center">
                            <p>{session.user.name}</p>
                            <a href="" onClick={(e) => { e.preventDefault(); signOut(); }}>{translations.common.signOut}</a>
                        </Stack>
                    </Stack>
                ) : (
                    <Stack justifyContent="center" sx={{ p: 2 }}>
                        <LoginButton onClick={() => { setIsModalSignInOpen(true); setIsOpen(false); }}>{translations.common.signIn}</LoginButton>
                    </Stack>
                )}
                <Divider variant="middle" sx={{ bgcolor: 'var(--borders-lite)' }} />


                <MenuItem onClick={() => { setDarkMode(!darkMode) }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: 1 }}>
                        <p><BsFillMoonFill /> {translations.common.darkMode}</p>
                        <FormControlLabel sx={{ m: 0 }} control={<ThemeSwitcher checked={darkMode} />} />
                    </Stack>
                </MenuItem>

                <MenuItem>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 1, width: 1 }}>
                        <p><MdLanguage /> {translations.languages.language}</p>
                        <LanguageManager />
                    </Stack>
                </MenuItem>


            </SettingsMenu>
        </>

    )
}