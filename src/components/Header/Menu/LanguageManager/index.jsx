import { useContext } from 'react';
import { Avatar, Stack, MenuItem, FormControl, Select } from '@mui/material';

import { LanguageContext } from '../../../../contexts/LanguageContext';

export default function LanguageManager() {
    const { locale, changeLanguage, translations } = useContext(LanguageContext);

    const flagStyle = {
        width: 24,
        height: 24
    }

    return (
        <FormControl sx={{ m: 0, minWidth: 130 }} variant="standard">
            <Select
                value={locale}
                onChange={(event) => { changeLanguage(event.target.value) }}
                displayEmpty
            >
                <MenuItem value={'pt'}>
                    <Stack direction="row" spacing={1}>
                        <Avatar alt={translations.languages.flagAltBr} src="/images/flags/br.png" sx={flagStyle} />
                        <p>{translations.languages.portuguese}</p>
                    </Stack>
                </MenuItem>
                <MenuItem value={'en'}>
                    <Stack direction="row" spacing={1}>
                        <Avatar alt={translations.languages.flagAltBr} src="/images/flags/us.png" sx={flagStyle} />
                        <p>{translations.languages.english}</p>
                    </Stack>
                </MenuItem>
            </Select>
        </FormControl>
    )
}