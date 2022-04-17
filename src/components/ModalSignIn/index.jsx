import { DialogTitle, Dialog, List, ListItem, ListItemText, Avatar } from '@mui/material';

import { signIn, useSession } from 'next-auth/react';

import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const iconTheme = { bgcolor: 'transparent', fontSize: '20pt', color: 'var(--font-color)' }

export default function ModalSignIn({ isOpen, setIsOpen }) {
    const { status } = useSession();

    return (

        <Dialog onClose={() => setIsOpen(false)} open={status != "authenticated" && isOpen}>
            <DialogTitle>Escolha uma conta para fazer login</DialogTitle>
            <List sx={{ pt: 0 }}>
                <ListItem button onClick={() => signIn('google')} sx={{ bgcolor: 'whitesmoke', color: 'black', '&:hover': { bgcolor: '#d3d3d3' } }}>
                    <Avatar sx={iconTheme} >
                        <FcGoogle />
                    </Avatar>
                    <ListItemText primary={'Fazer login com Google'} />
                </ListItem>

                <ListItem button onClick={() => signIn('facebook')} sx={{ bgcolor: '#166FE5', '&:hover': { bgcolor: '#125fc4' } }}>
                    <Avatar sx={iconTheme}>
                        <BsFacebook />
                    </Avatar>
                    <ListItemText primary={'Fazer login com Facebook'} />
                </ListItem>

                <ListItem button onClick={() => signIn('github')} sx={{ bgcolor: '#161b22', '&:hover': { bgcolor: '#0f1318' } }}>
                    <Avatar sx={iconTheme}>
                        <BsGithub />
                    </Avatar>
                    <ListItemText primary={'Fazer login com github'} />
                </ListItem>
            </List>
        </Dialog>
    )
}