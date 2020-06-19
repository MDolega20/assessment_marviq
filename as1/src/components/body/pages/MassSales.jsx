import React from 'react';

import Map from './home/Map';
import Trees from './tree/Types';

import placesList from './placesData';
import treesData from './treesData';

const placesListFiltered = placesList.filter((el, index) => {
  if(el.type[0] === "plant"){
    return el;
  }else
    return false;
});

const SalesMass = () => {
  return (
        <div id="sales-mass" className="main-content sales-mass">
            <div className="sales-mass-title main-content-title">
              <h2>Sprzedaż hurtowa</h2>
            </div>
            <div className="sales-mass-description">
              <p>Sprzedaż hurtowa dostępna jedynie na plantacji. W przypadku pytań albo chęci hurtowego zakupu prosimy o kontakt na nr. <a href="tel:+48601838006">601-838-006</a> albo kontakt przez e-mail: <a href="mailto:zamowienia@choinkipomorze.pl">zamowienia@choinkipomorze.pl</a></p>
            </div>
            <div className="sales-mass-prices">
              <div className="sales-mass-prices_title">
                <h3>Rodzaje naszych choinek</h3>
              </div>
              <div className="sales-mass-prices_content">
                <Trees treesData={treesData} range={"mass"} />
              </div>
            </div>
            <div className="sales-mass-map">
              <Map placesList={placesListFiltered} />
            </div>
        </div>
    );
}

export default SalesMass;
