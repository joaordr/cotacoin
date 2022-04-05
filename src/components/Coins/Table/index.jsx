/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';

import Loader from '../../Loader';
import TableRow from './TableRow';

import styles from './table.module.scss';
import { CoinsContext } from '../../../contexts/CoinsContext';
import FavoriteButton from './FavoriteButton';
import OrdenateButton from './OrdenateButton';

let isOrderByNumberCrescent = true;
let isOrderByNameCrescent = true;
let isOrderByPriceCrescent = true;
let isOrderByVolumeCrescent = true;

let ordenedBy = '';

export default function Table() {
    const { coins, isFetchingCoins } = useContext(CoinsContext);
    const [coinsControl, setCoinsControl] = useState(coins);

    useEffect(() => {
        switch (ordenedBy) {
            case '':
                setCoinsControl(coins);
                break;
            case 'number':
                isOrderByNumberCrescent = !isOrderByNumberCrescent;
                OrdenateByNumber();
                break;
            case 'name':
                isOrderByNameCrescent = !isOrderByNameCrescent;
                OrdenateByName();
                break;
            case 'price':
                isOrderByPriceCrescent = !isOrderByPriceCrescent;
                OrdenateByPrice();
                break;
            case 'volume':
                isOrderByVolumeCrescent = !isOrderByVolumeCrescent;
                OrdenateByVolume();
                break;
        }
    }, [coins])

    useEffect(() => {
        if (isFetchingCoins && coins.length == 0) {
            document.getElementById('table_container').scrollTop = 0;
            document.getElementById('table_container').style.overflow = "hidden";
            document.getElementById('table_container').style.minHeight = "calc(100vh - 111px)";
        } else {
            document.getElementById('table_container').style.overflow = "auto";
            document.getElementById('table_container').style.minHeight = "0px";
        }
    }, [isFetchingCoins, coins]);

    function OrdenateByNumber() {
        ordenedBy = 'number';
        let ordenedArray = [...coins];
        if (isOrderByNumberCrescent) {
            ordenedArray.sort((a, b) => b.market_cap_rank - a.market_cap_rank); // crescente
        } else {
            ordenedArray.sort((a, b) => a.market_cap_rank - b.market_cap_rank); // decrecente
        }
        isOrderByNumberCrescent = !isOrderByNumberCrescent;
        setCoinsControl(ordenedArray);
    }

    function OrdenateByName() {
        ordenedBy = 'name';
        let ordenedArray = [...coins];
        if (isOrderByNameCrescent) {
            ordenedArray.sort((a, b) => a.name.localeCompare(b.name)); // crescente
        } else {
            ordenedArray.sort((a, b) => b.name.localeCompare(a.name)); // decrecente
        }
        isOrderByNameCrescent = !isOrderByNameCrescent;
        setCoinsControl(ordenedArray);
    }

    function OrdenateByPrice() {
        ordenedBy = 'price';
        let ordenedArray = [...coins];
        if (isOrderByPriceCrescent) {
            ordenedArray.sort((a, b) => b.current_price - a.current_price); // crescente
        } else {
            ordenedArray.sort((a, b) => a.current_price - b.current_price); // decrecente
        }
        isOrderByPriceCrescent = !isOrderByPriceCrescent;
        setCoinsControl(ordenedArray);
    }

    function OrdenateByVolume() {
        ordenedBy = 'volume';
        let ordenedArray = [...coins];
        if (isOrderByVolumeCrescent) {
            ordenedArray.sort((a, b) => b.total_volume - a.total_volume); // crescente
        } else {
            ordenedArray.sort((a, b) => a.total_volume - b.total_volume); // decrecente
        }
        isOrderByVolumeCrescent = !isOrderByVolumeCrescent;
        setCoinsControl(ordenedArray);
    }

    return (
        <div id="table_container" className={styles.container}>
            {(isFetchingCoins && coins.length == 0) && <Loader />}
            <table>
                <thead>
                    <tr>
                        <th>
                            <FavoriteButton />
                        </th>
                        <OrdenateButton name={''} onClickAction={OrdenateByNumber} />
                        <OrdenateButton name={'Moeda'} onClickAction={OrdenateByName} />
                        <OrdenateButton name={'Preço'} onClickAction={OrdenateByPrice} />
                        <OrdenateButton name={'Volume'} onClickAction={OrdenateByVolume} />
                        <th scope="col">{"Capitalização"}</th>
                    </tr>
                </thead>
                <tbody>

                    {coinsControl.map((coin, index) => {
                        return <TableRow key={index} coin={coin} />
                    })}

                </tbody>
            </table>
        </div>

    )
}