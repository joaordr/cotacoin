import { useContext, useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { ThemeContext } from "../../contexts/ThemeContext";

import styles from './ThemeManager.module.scss';

export default function ThemeManager() {
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    return (
        <div className={styles.container_theme_wrapper}>
            <label className={styles.toggle_theme} htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    onClick={() => { setDarkMode(!darkMode) }}
                    defaultChecked={darkMode}
                />
                <div className={`${styles.slider} ${styles.round}`}>
                    <span><BsFillSunFill /></span>
                    <span><BsFillMoonFill /></span>
                </div>
            </label>
        </div>
    )
}