/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../../../contexts/ThemeContext';
import { useRouter } from 'next/router';

import Loader from "../../../Loader";

import styles from './graph.module.scss';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
});

const valueFormatBRL = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' });
const valueFormatUSD = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' });

function convertDate(timestamp, locale) {
    return new Date(timestamp).toLocaleTimeString(locale == 'pt' ? 'pt-BR' : 'en-US', {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}

export default function Graph({ data, isFetching, description, isUpping }) {
    const { locale } = useRouter();
    const { darkMode } = useContext(ThemeContext);

    let options = {
        chart: {
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            },
            background: 'none',
        },
        tooltip: {
            enabled: true,
            marker: {
                show: false,
            },
            x: {
                show: true,
                formatter: function (value) {
                    return convertDate(value, locale);
                }
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'straight',
            width: 1,
        },

        theme: {
            mode: 'light',
            palette: 'palette1',
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return (locale == 'pt' ? valueFormatBRL : valueFormatUSD).format(value);
                },
                style: {
                    fontSize: '10px',
                },
            }
        },
        xaxis: {
            labels: {
                show: true,
                rotate: 0,
                rotateAlways: false,
                style: {
                    fontSize: '10px',
                },
            }
        },
        fill: {
            opacity: 0.6,
            type: 'gradient',
            gradient: {
                shade: 'dark',
                opacityFrom: 0.7,
                opacityTo: 0.2
            },
        }
    }

    const [chartOptions, setChartOpctions] = useState(options);
    const [chartData, setChartData] = useState([]);

    useEffect(() => { // update chart theme
        options.theme.mode = darkMode == true ? 'dark' : 'light'
        setChartOpctions({
            ...chartOptions,
            theme: {
                ...chartOptions.theme,
                mode: darkMode == true ? 'dark' : 'light',
            },
        })
    }, [darkMode])

    useEffect(() => {
        if (data.length != 0) {
            let totalResults = data.length;
            let labels = [
                convertDate(data[0][0]),
                convertDate(data[Math.floor(totalResults / 4)][0]),
                convertDate(data[Math.floor(totalResults / 4) * 2][0]),
                convertDate(data[totalResults - 1][0])
            ];
            let color = (data[0][1] < data[data.length - 1][1]) ? 'rgb(27, 230, 0)' : 'rgb(238, 0, 0)';
            setChartOpctions({
                ...options,
                xaxis: {
                    ...options.xaxis,
                    overwriteCategories: labels,
                },
                theme: {
                    ...options.theme,
                    mode: darkMode == true ? 'dark' : 'light',
                },
                colors: [color],
                fill: {
                    ...options.fill,
                    colors: [color]
                }
            })
            setChartData([{ name: 'Valor', data: data }]);
        }
    }, [data])

    return (
        <div className={styles.container}>
            <p>{description}</p>
            <div className={styles.content}>
                {(isFetching && data.length == 0) && <Loader />}
                <Chart options={chartOptions} series={chartData} type="area" height={240} />
            </div>
        </div>
    )
}