import { useContext, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { MenuItem, Button, Divider, FormControlLabel, Stack, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LanguageIcon from '@mui/icons-material/Language';

import { ThemeContext } from "../../../contexts/ThemeContext";
import { LanguageContext } from '../../../contexts/LanguageContext';

import LanguageManager from './LanguageManager';
import ModalSignIn from '../../ModalSignIn';

import { SettingsMenu, MenuButton, LoginButton, ThemeSwitcher } from './styles';

export default function Menu() {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const { translations } = useContext(LanguageContext);
    const [isModalSignInOpen, setIsModalSignInOpen] = useState(false);
    const { data: session, status } = useSession();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <MenuButton
                id="menu-button"
                edge="start"
                color="inherit"
                aria-label="menu"
                size="small"
                aria-controls={isOpen ? 'settings-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isOpen ? 'true' : undefined}
                onClick={(event) => setIsOpen(event.currentTarget)}
            >
                <MenuIcon fontSize="large" />
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
                    <Stack direction="row" spacing={2} sx={{ p: 1 }}>
                        <Avatar
                            alt="User image"
                            src={session.user.image}
                            sx={{ width: 56, height: 56 }}
                        />
                        <Stack direction="column" spacing={1} justifyContent="center">
                            <p>{session.user.name}</p>
                            <Button
                                size="small"
                                onClick={signOut}
                                color="error"
                            >
                                {translations.common.signOut}
                            </Button>
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
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <DarkModeIcon /> <p>{translations.common.darkMode}</p>
                        </Stack>
                        <FormControlLabel sx={{ m: 0 }} control={<ThemeSwitcher checked={darkMode} />} />
                    </Stack>
                </MenuItem>
                <MenuItem>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: 1 }}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <LanguageIcon /><p>{translations.languages.language}</p>
                        </Stack>
                        <LanguageManager />
                    </Stack>
                </MenuItem>
            </SettingsMenu>
            <ModalSignIn isOpen={isModalSignInOpen} setIsOpen={setIsModalSignInOpen} />
        </>

    )
}