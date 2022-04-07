/* eslint-disable @next/next/no-img-element */
import { BiUpArrowAlt, BiDownArrowAlt, BiRightArrowAlt } from "react-icons/bi";

import styles from './tableRow.module.scss';
import FavoriteButton from "../FavoriteButton";
import { useContext } from "react";
import { CoinsContext } from "../../../../contexts/CoinsContext";
import { useRouter } from 'next/router';

const valueFormatBRL = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' });
const valueFormatUSD = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' });

let valueChange24Hr = '';
let valueChange24HrPercentage = '';

let isFavorite = false;

export default function TableRow({ coin }) {
    const { locale } = useRouter();
    const { selectedCoin, setSelectedCoin, favoriteCoins, setFavoriteCoins } = useContext(CoinsContext);

    if (coin.price_change_24h != null) {
        if (locale == 'pt') {
            valueChange24Hr = valueFormatBRL.format(coin.price_change_24h).replace('R$', '');
        } else {
            valueChange24Hr = valueFormatUSD.format(coin.price_change_24h).replace('$', '');
        }
        valueChange24HrPercentage = Number(coin.price_change_percentage_24h.toFixed(2)).toLocaleString({ style: 'percent' });
    }

    isFavorite = favoriteCoins.includes(coin.id);

    function handleSetFavorite(checked) {
        if (checked && !isFavorite) {
            setFavoriteCoins([...favoriteCoins, coin.id]);
        } else {
            let newArray = [...favoriteCoins];
            setFavoriteCoins(
                newArray.filter((item) => {
                    return item != coin.id;
                })
            )
        }
    }

    return (
        <tr className={`${styles.container} ${(selectedCoin != null && selectedCoin.id == coin.id) && styles.active}`} >
            <td>
                <FavoriteButton onClickFunction={handleSetFavorite} isFavorite={isFavorite} />
            </td>

            <td onClick={() => setSelectedCoin(coin)}>
                {coin.market_cap_rank}
            </td>
            <td onClick={() => setSelectedCoin(coin)}>
                <div className={styles.identification_container}>
                    <div className={styles.logo_container}>
                        <img src={coin.image} alt="" loading="lazy" />
                        <p>{coin.symbol}</p>
                    </div>
                    <div className={styles.name_container}>
                        <h1>{coin.name}</h1>
                    </div>
                </div>
            </td>
            <td onClick={() => setSelectedCoin(coin)}>
                <div className={styles.values_container}>
                    {coin.current_price == null ? <p>Indefinido</p> : (
                        <>
                            <p className={styles.positive_value}><BiUpArrowAlt />{(locale == 'pt' ? valueFormatBRL : valueFormatUSD).format(coin.high_24h)}</p>
                            <p>
                                <BiRightArrowAlt />
                                {(locale == 'pt' ? valueFormatBRL : valueFormatUSD).format(coin.current_price)}
                                <span className={(coin.price_change_24h < 0) ? styles.negative_value : styles.positive_value}>
                                    <small>{valueChange24Hr}</small>
                                    <small>{valueChange24HrPercentage}%</small>
                                </span>
                            </p>
                            <p className={styles.negative_value}><BiDownArrowAlt />{(locale == 'pt' ? valueFormatBRL : valueFormatUSD).format(coin.low_24h)}</p>
                        </>
                    )}
                </div>
            </td>
            <td onClick={() => setSelectedCoin(coin)}>
                {coin.current_price == null ? <p>Indefinido</p> : (
                    <>
                        {(locale == 'pt' ? valueFormatBRL : valueFormatUSD).format(coin.total_volume)}
                    </>
                )}
            </td>
            <td onClick={() => setSelectedCoin(coin)}>
                {coin.market_cap == null ? <p>Indefinido</p> : (
                    <>
                        {(locale == 'pt' ? valueFormatBRL : valueFormatUSD).format(coin.market_cap)}
                    </>
                )}
            </td>
        </tr>
    )
}