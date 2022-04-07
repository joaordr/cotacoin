import { RiArrowUpDownFill } from "react-icons/ri";

import styles from './ordenateButton.module.scss';

export default function OrdenateButton({ name, onClickAction }) {
    return (
        <th scope="col" className={styles.container} onClick={onClickAction}>
            <div>
                {name != '' && <p>{name}</p>}
                <span><RiArrowUpDownFill /></span>
            </div>
        </th>

    )
}