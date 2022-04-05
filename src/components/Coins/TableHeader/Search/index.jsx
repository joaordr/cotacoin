/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { CoinsContext } from '../../../../contexts/CoinsContext';

import FetchingLoader from '../../../FetchingLoader';

import styles from './search.module.scss';
import { useSearch } from "../../../../hooks/useSearch";
import { useWindowDimensions } from "../../../../hooks/useWindowDimensions";

let typingTimer;

export default function Search() {
    const { width } = useWindowDimensions();

    const { itemsPerPage, setPages, setFilter, isFetchingCoins } = useContext(CoinsContext);
    const [searchValue, setSearchValue] = useState('');
    const { data, isFetching, isLoading } = useSearch(searchValue, itemsPerPage);

    useEffect(() => {
        if (searchValue.length == 0) {
            document.getElementById("searchField").value = "";
        }
    }, [searchValue])

    useEffect(() => {
        if (searchValue != "" && data.pages != 0) {
            setFilter(data.filter);
            setPages(data.pages);
        } else if (!isFetching) {
            if (searchValue != "" && data.pages == 0) {
                setFilter('false');
                setPages(0);
            } else {
                setFilter('');
            }

        }
    }, [data, isFetching])

    function handleSearch(value) {
        if (value == "") {
            setSearchValue("");
            clearTimeout(typingTimer);
        } else {
            clearTimeout(typingTimer);
            typingTimer = setTimeout(() => {
                setSearchValue(value);
            }, 700);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <FaSearch />
                <input id="searchField" type="text" placeholder={('search_placeholder')} onKeyUp={e => handleSearch(e.target.value.trim())} />
                {isFetching ? <FetchingLoader /> : <>{(searchValue.length > 0) && <AiOutlineClose onClick={() => { setSearchValue('') }} />}</>}
            </div>
            {(isFetchingCoins && width > 850) && <FetchingLoader />}
        </div>

    )
}