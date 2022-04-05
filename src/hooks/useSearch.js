import { useQuery } from "react-query";
import { api } from "../services/api";

async function searchCoins(searchValue, itemsPerPage) {
    if (searchValue === '') {
        return {
            filter: '',
            pages: 0
        };
    } else {
        let response = await api.get(`search?query=${searchValue}`);
        let filterString = '';
        response.data.coins.forEach(coin => {
            filterString += `,${coin.id}`
        });

        const filter = filterString.slice(1);
        const pages = (response.data.coins.length > 0 && response.data.coins.length < 100) ? 1 : Math.round(response.data.coins.length / itemsPerPage);

        return {
            filter,
            pages
        };
    }
}

export function useSearch(searchValue, itemsPerPage, options) {
    return useQuery(['cotacoin_coins_search', searchValue], () => searchCoins(searchValue, itemsPerPage), {
        staleTime: 1000 * 60 * 60 * 24,
        placeholderData: {
            filter: '',
            pages: 0
        },
        ...options
    })
}