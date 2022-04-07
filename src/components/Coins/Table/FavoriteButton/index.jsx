import { useContext, useState } from "react";
import UseAnimations from "react-useanimations";
import star from 'react-useanimations/lib/star';
import { ThemeContext } from "../../../../contexts/ThemeContext";

import styles from './favoriteButton.module.scss';

export default function FavoriteButton({ onClickFunction, isFavorite = false }) {
    const { colors } = useContext(ThemeContext);
    const [checked, setChecked] = useState(isFavorite);

    return (
        <div className={styles.container}>
            <UseAnimations
                animation={star}
                fillColor={colors.fontColor}
                reverse={checked}
                onClick={() => {
                    setChecked(!checked);
                    onClickFunction(!checked);
                }}
            />
        </div>
    )
}