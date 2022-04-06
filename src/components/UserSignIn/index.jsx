/* eslint-disable @next/next/no-img-element */
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

import { FaUserAlt } from "react-icons/fa";
import SignInMenu from './SignInMenu';

import styles from './user.module.scss';

export default function UserSignIn() {
    const [isSignInMenuOpen, setIsSignInMenuOpen] = useState(false);
    const { data: session, status } = useSession();

    if (status === "authenticated") {
        console.log(session.user.image);

    }

    return (
        <>
            <div className={styles.container}>
                {(status === "authenticated") && (
                    <div className={styles.user_info}>
                        <p>{session.user.name}</p>
                        <a href="" onClick={(e) => { e.preventDefault(); signOut(); }}>Sair</a>
                    </div>
                )}
                {(status === "authenticated") ? (
                    <div className={styles.user_image}>
                        <img src={session.user.image} alt="User image" />
                    </div>
                ) : (
                    <div className={styles.user_image} onClick={() => setIsSignInMenuOpen(!isSignInMenuOpen)}>
                        <FaUserAlt />
                    </div>
                )}
            </div>
            <SignInMenu isOpen={isSignInMenuOpen} setIsOpen={setIsSignInMenuOpen} />

        </>

    )
}