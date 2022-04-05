import { useQuery } from "react-query";
import { api } from "../services/api";

export async function getCoinsList() {
    let response = await api.get('coins/list');
    return response.data;
}

export function useCoinsList(options) {
    return useQuery(['cotacoin_coins_list'], () => getCoinsList(), {
        staleTime: 1000 * 60 * 60 * 24,
        refetchInterval: 1000 * 60 * 60 * 24,
        placeholderData: [],
        ...options
    })
}