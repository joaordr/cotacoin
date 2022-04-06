/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'

import { tranlations as tranlationsEN } from '../translations/en'
import { tranlations as tranlationsPT } from '../translations/pt'

export const LanguageContext = createContext({});

export function LanguageProvider({ children }) {
    const router = useRouter();
    const { locale, pathname, asPath, query } = router;
    const [translations, setTranslations] = useState(locale == 'pt' ? tranlationsPT : tranlationsEN);

    useEffect(() => {
        if (locale == 'pt') {
            setTranslations(tranlationsPT);
        } else {
            setTranslations(tranlationsEN);
        }
    }, [locale])

    function changeLanguage(newLocale) {
        router.push({ pathname, query }, asPath, { locale: newLocale })
    }

    return (
        <LanguageContext.Provider value={{ translations, locale, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    )

}