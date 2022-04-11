/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from 'react';
import ThemeManager from '../../ThemeManager'
import { BsFillMoonFill } from 'react-icons/bs';
import { MdLanguage } from 'react-icons/md';
import { signOut, useSession } from 'next-auth/react';

import styles from './menu.module.scss';
import LanguageManager from '../../LanguageManager';
import ModalSignIn from '../../ModalSignIn';
import { LanguageContext } from '../../../contexts/LanguageContext';

export default function Menu({ isOpen, setIsOpen }) {
    const { translations } = useContext(LanguageContext);
    const [isModalSignInOpen, setIsModalSignInOpen] = useState(false);
    const { data: session, status } = useSession();

    const componentRef = useRef();
    useEffect(() => { // Detecta clicks externos e fecha o menu
        let IgnoreOutsideClick = true;
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
        function handleClick(e) {
            if (componentRef && componentRef.current) {
                const ref = componentRef.current
                if (!ref.contains(e.target)) {
                    if (IgnoreOutsideClick) {
                        IgnoreOutsideClick = false;
                    } else {
                        IgnoreOutsideClick = true;
                        setIsOpen(false);
                    }
                }
            }
        }
    }, []);

    return (
        <>
            <div className={`${styles.container} ${isOpen ? styles.open : undefined}`} ref={componentRef}>
                <div className={styles.arrow_up}></div>
                <div className={styles.content}>
                    <div className={styles.login}>
                        {(status === "authenticated") ? (
                            <div className={styles.user}>
                                <div className={styles.user_image}>
                                    <img src={session.user.image} alt="User image" />
                                </div>
                                <div className={styles.user_info}>
                                    <p>{session.user.name}</p>
                                    <a href="" onClick={(e) => { e.preventDefault(); signOut(); }}>{translations.common.signOut}</a>
                                </div>
                            </div>
                        ) : (
                            <button onClick={() => { setIsModalSignInOpen(true); setIsOpen(false); }}>{translations.common.signIn}</button>
                        )}
                    </div>
                    <div className={styles.darkmode}>
                        <p><BsFillMoonFill /> {translations.common.darkMode}</p>
                        <ThemeManager />
                    </div>
                    <div className={styles.language}>
                        <p><MdLanguage /> {translations.languages.language}</p>
                        <LanguageManager />
                    </div>
                </div>
            </div>
            <ModalSignIn isOpen={isModalSignInOpen} setIsOpen={setIsModalSignInOpen} />
        </>

    )
}