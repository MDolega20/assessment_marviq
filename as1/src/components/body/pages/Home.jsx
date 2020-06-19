import React from 'react';
// import PropTypes from 'prop-types';

import Map from './home/Map';
import Trees from './tree/Types';
import Slides from './home/Slides';
import Fb from './home/Fb';

import placesList from './placesData';
import treesData from './treesData';


const Home = () => {
  return (
    <div id="home" className="main-content">
      <div className="home_slider">
        <Slides />
      </div>
      <div className="home_title">
        <h2>Rodzinne święta z twoją</h2>
        <h2>własnoręcznie ściętą, żywą choinką.</h2>
      </div>
      <div className="home_description home_description--long">
        <p>SPRZEDAŻ DETALICZNA PROSTO Z PLANTACJI</p><br/>
        <p>PLANTACJA PRĘGOWO ŻUŁAWSKIE (30min od Gdańska) ZAPRASZAMY 21.12.2019 (SOBOTA) 11.00-15.00
        </p><br/>
        <p>PLANTACJA ŚWIETLINO (45min od Gdyni, 15min od Lęborka) ZAPRASZAMY 22.12.2019 (NIEDZIELA) 11.00-15.00</p><br/>
        <p>Przyjedź do nas i samemu wybierz własną choinkę. Możesz ją ściąć samemu albo poprosić o to naszego pracownika (możliwość własnoręcznego ścięcia choinki dostępna tylko na plantacji).
          Gwarantujemy najwyższej jakości obsługę i choinki prosto z plantacji w atrakcyjnych cenach. W naszej ofercie mogą Państwo znaleźć choinki rozmiarów od 0,5 do 3,5m a także sadzonki. Możemy Państwu zaproponować takie gatunki drzew jak: świerk zwykły, świerk srebrzysty oraz jodła kaukaska.</p><p>Nasza firma posiada wieloletnie doświadczenie w uprawie oraz sprzedaży choinek. Przyjedź z rodziną i przekonaj się sam.</p>
        <p>Nasza firma jest otwarta na współpracę z odbiorcami detalicznymi jak i hurtowymi.</p>
        <div className="fb"><Fb /></div>
      </div>
      <div className="home_localizations">
        <div className="home_localizations_title">
          <h3>Gdzie możesz znaleść nasze stoiska?</h3>
        </div>
        <Map placesList={placesList}/>
      </div>
      <div className="home_tree">
        <div className="home_tree_title">
          <h3>Rodzaje naszych choinek</h3>
        </div>
        <div className="home_tree_content">
          <Trees treesData={treesData} range={"detail"} />
        </div>
      </div>
      
    </div>
  );
}


export default Home;
