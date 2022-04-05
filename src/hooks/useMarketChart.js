import { useQuery } from "react-query";
import { api } from "../services/api";

async function getMarketChart(coinId, days, currency) {
    let response = await api.get(`coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`);
    return response.data;
}

export function useMarketChart(coinId, days, currency, options) {
    return useQuery(['cota_coin', coinId, currency, days], () => getMarketChart(coinId, days, currency), {
        staleTime: 1000 * 60,
        refetchInterval: 1000 * 60,
        placeholderData: {
            prices: [],
            market_caps: [],
            total_volumes: []
        },
        ...options
    });

}