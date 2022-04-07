import { signIn, useSession } from 'next-auth/react';

import ReactModal from 'react-modal';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

import styles from './modalSignIn.module.scss';

export default function ModalSignIn({ isOpen, setIsOpen }) {
    const { data: session, status } = useSession();

    return (
        <ReactModal
            isOpen={status != "authenticated" && isOpen}
            onRequestClose={() => setIsOpen(false)}
            overlayClassName={styles.ReactModal__Overlay}
            className={styles.ReactModal__Content}
        >
            <div className={styles.content}>
                <button type="button" className={styles.google} onClick={() => signIn('google')}><FcGoogle />Fazer login com Google</button>
                <button type="button" className={styles.facebook} onClick={() => signIn('facebook')}><BsFacebook />Fazer login com Facebook</button>
                <button type="button" className={styles.github} onClick={() => signIn('github')}><BsGithub />Fazer login com GitHub</button>
            </div>
        </ReactModal>
    )
}