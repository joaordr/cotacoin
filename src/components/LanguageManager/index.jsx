import { useState } from 'react';
import { MdOutlineLanguage, MdOutlineKeyboardArrowDown } from "react-icons/md";

import LanguagesList from './LanguagesList'

import styles from './languageManager.module.scss';

export default function LanguageManager() {
    const [isListInMenuOpen, setIsListInMenuOpen] = useState(false);

    return (
        <>
            <div className={styles.container} onClick={() => setIsListInMenuOpen(!isListInMenuOpen)}>
                <button><MdOutlineLanguage /><MdOutlineKeyboardArrowDown /></button>
            </div>
            <LanguagesList isOpen={isListInMenuOpen} setIsOpen={setIsListInMenuOpen} />
        </>
    )
}