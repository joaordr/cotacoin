import { useQuery } from "react-query";
import { api } from "../services/api";

async function getCoinsData(currency, filter, itemsPerPage, activePage) {
    let response = await api.get(`coins/markets?vs_currency=${currency}&ids=${filter}&per_page=${itemsPerPage}&page=${activePage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`);
    return response.data;
}

export function useCoins(currency, filter, itemsPerPage, activePage, options) {
    return useQuery(['cotacoin_coins', currency, activePage, filter], () => getCoinsData(currency, filter, itemsPerPage, activePage), {
        staleTime: 1000 * 60,
        refetchInterval: 1000 * 60,
        placeholderData: [],
        ...options
    })
}