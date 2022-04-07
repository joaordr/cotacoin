import { CgMenu } from "react-icons/cg";

import styles from './menuButton.module.scss';
import { useState } from "react";
import Menu from "../Menu";

export default function MenuButton() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className={styles.container}>
                <button onClick={() => setMenuOpen(!isMenuOpen)}><CgMenu /> </button>
            </div>
            <Menu isOpen={isMenuOpen} setIsOpen={setMenuOpen} />
        </>
    )
}