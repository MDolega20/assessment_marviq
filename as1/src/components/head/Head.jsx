import React from 'react';
import {Helmet} from 'react-helmet'

const Head = () => {
    return <>
    <Helmet>
        <title>Choinki</title>
        <meta name="description" content="Duży wybór choinek w niskich cenach. Możliwość wycięcia choinki samemu. Sprzedaż hurowa." />
        <meta name="keywords" content="choinki, święta, niskie ceny, duży wybór, hurt, hurtowo, drzewa, drzewko, drzewka, świerk, jodła, świerk srebrny, tradycja, gdynia, trujmiasto, signum, sopot, lębork, gdańsk, rumia, sprzedaż" />
        <meta name="author" content="MDolega.me & Rafał D." />
        <meta name="subject" content="Choinki" />
        <meta name="copyright" content="Signum" />
        <meta name="language" content="PL" />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Choinki" />
        <meta property="og:image" content="%PUBLIC_URL%/img/fav-ico-1.png" />
        <meta name="robots" content="index,follow" />
    </Helmet>
    </>;
}

export default Head;