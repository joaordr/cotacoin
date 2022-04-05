/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'
import { useRouter } from 'next/router';

import { useCoinsList } from "../hooks/useCoinsList";
import { useCoins } from "../hooks/useCoins";
import { useQueryClient } from "react-query";

export const CoinsContext = createContext({});

const itemsPerPage = 100;

export function CoinsProvider({ children }) {
    const { locale } = useRouter();
    const queryClient = useQueryClient();
    useEffect(() => {
        const localStoragePersistor = createWebStoragePersistor({ storage: window.localStorage })
        persistQueryClient({
            queryClient,
            persistor: localStoragePersistor,
        })
    }, [])

    const [pages, setPages] = useState(0);
    const [activePage, setActivePage] = useState(1);
    const [filter, setFilter] = useState('');

    const [selectedCoin, setSelectedCoin] = useState(null);

    const { data: dataCoinsList } = useCoinsList();
    const { data: coins, isLoading: isLoadingCoins, isFetching: isFetchingCoins, remove: removeCoins } = useCoins(locale == 'pt' ? 'brl' : 'usd', filter, itemsPerPage, activePage);

    useEffect(() => {
        setPages(Math.round(dataCoinsList.length / itemsPerPage));
    }, [dataCoinsList])

    useEffect(() => {
        if (filter == '') {
            setPages(Math.round(dataCoinsList.length / itemsPerPage));
        }
    }, [filter])

    useEffect(() => {
        if (pages != 0) {
            setActivePage(1);
        }
    }, [pages])

    return (
        <CoinsContext.Provider value={{ coins, isLoadingCoins, isFetchingCoins, removeCoins, pages, setPages, activePage, setActivePage, setFilter, itemsPerPage, selectedCoin, setSelectedCoin }}>
            {children}
        </CoinsContext.Provider>
    )

}