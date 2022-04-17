/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { FormControl, TextField, InputAdornment, IconButton, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

import { CoinsContext } from '../../../../contexts/CoinsContext';
import { useSearch } from "../../../../hooks/useSearch";

let typingTimer;

export default function Search() {
    const { itemsPerPage, setPages, setFilter } = useContext(CoinsContext);
    const [searchValue, setSearchValue] = useState('');
    const { data, isFetching } = useSearch(searchValue, itemsPerPage);

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
        <FormControl variant="standard" fullWidth>
            <TextField
                id="searchField"
                variant="standard"
                onKeyUp={e => handleSearch(e.target.value.trim())}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            {isFetching ?
                                <CircularProgress color="inherit" size={20} />
                                :
                                <>{(searchValue.length > 0) &&
                                    <IconButton aria-label="clear search" size="small" onClick={() => { setSearchValue('') }} >
                                        <CloseIcon fontSize="small" />
                                    </IconButton>}
                                </>}
                        </InputAdornment>
                    )
                }}
            />
        </FormControl>
    )
}