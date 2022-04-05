/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";

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
            {children}
        </ThemeContext.Provider>
    )

}