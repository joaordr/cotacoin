/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef } from "react";
import Image from 'next/image';

import styles from './languagesList.module.scss';
import { LanguageContext } from "../../../contexts/LanguageContext";

export default function LanguagesList({ isOpen, setIsOpen }) {
    const { translations, changeLanguage } = useContext(LanguageContext);
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
        <div className={`${styles.container} ${isOpen ? styles.open : ""}`} ref={componentRef}>
            <div className={styles.arrow_up}></div>
            <div className={styles.content}>
                <div onClick={() => changeLanguage('pt')}>
                    <Image src='/images/flags/br.png' alt='' width={30} height={30} />
                    <p>{translations.languages.portuguese}</p>
                </div>
                <div onClick={() => changeLanguage('en')}>
                    <Image src='/images/flags/us.png' alt='' width={30} height={30} />
                    <p>{translations.languages.english}</p>
                </div>
            </div>
        </div>
    )
}