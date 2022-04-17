/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useMemo, useState } from "react";
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState();
    const [colors, setColors] = useState({ fontColor: '' });

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme == 'dark') {
            setDarkMode(true);
        } else {
            setDarkMode(false);

        }
    }, [])

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: darkMode ? 'dark' : 'light',
                },
            }),
        [darkMode],
    );

    useEffect(() => {
        if (darkMode != undefined) {
            if (darkMode) {
                localStorage.setItem("theme", "dark");
                document.documentElement.setAttribute("data-theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
                document.documentElement.setAttribute("data-theme", "light");
            }
            setColors({
                fontColor: getComputedStyle(document.documentElement).getPropertyValue('--font-color'),
            })
        }
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode, colors }}>
            <MuiThemeProvider theme={theme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    )

}