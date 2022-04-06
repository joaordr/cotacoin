import { useContext, useState } from 'react';
import { MdOutlineLanguage, MdOutlineKeyboardArrowDown } from "react-icons/md";

import LanguagesList from './LanguagesList'

import styles from './languageManager.module.scss';
import { LanguageContext } from '../../contexts/LanguageContext';
import Image from 'next/image';

export default function LanguageManager() {
    const [isListInMenuOpen, setIsListInMenuOpen] = useState(false);
    const { locale, translations } = useContext(LanguageContext);

    return (
        <>
            <div className={styles.container} onClick={() => setIsListInMenuOpen(!isListInMenuOpen)}>
                {/* <button><MdOutlineLanguage /><MdOutlineKeyboardArrowDown /></button> */}
                <button>
                    {locale == 'pt' ?
                        <Image src='/images/flags/br.png' alt={translations.languages.flagAltBr} width={22} height={22} />
                        :
                        <Image src='/images/flags/us.png' alt={translations.languages.flagAltUs} width={22} height={22} />
                    }
                    <MdOutlineKeyboardArrowDown />
                </button>

            </div>
            <LanguagesList isOpen={isListInMenuOpen} setIsOpen={setIsListInMenuOpen} />
        </>
    )
}