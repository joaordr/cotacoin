import { RiSettings3Line } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import styles from './menuButton.module.scss';
import { useState } from "react";
import Menu from "../Menu";

export default function MenuButton() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className={styles.container}>
                <button onClick={() => setMenuOpen(!isMenuOpen)}><MdOutlineKeyboardArrowDown /><RiSettings3Line /> </button>
            </div>
            <Menu isOpen={isMenuOpen} setIsOpen={setMenuOpen} />
        </>
    )
}