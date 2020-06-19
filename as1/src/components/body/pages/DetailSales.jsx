import React from 'react';

import Map from './home/Map';
import Trees from './tree/Types';

import placesList from './placesData';
import treesData from './treesData';

const placesListFiltered = placesList;

const SalesDetail = () => {
  return (
        <div id="sales-detail" className="main-content sales-detail">
            <div className="sales-detail-title main-content-title">
              <h2>Sprzedaż detailczna</h2>
            </div>
            <div className="sales-detail-description">
              <p>Tutaj znajdziesz ceny choinek na naszych stoiskach jak i plantacji, pamiętaj że ceny mogą się nieznacznie różnić w zależności od miejsca zakupu.</p>
            </div>
            <div className="sales-detail-prices">
              <div className="sales-detail-prices_title">
                <h3>Rodzaje naszych choinek</h3>
              </div>
              <div className="sales-detail-prices_content">
                <Trees treesData={treesData} range={"detail"} />
              </div>
            </div>
            <div className="sales-detail-map">
              <Map placesList={placesListFiltered} />
            </div>
        </div>
    );
}

export default SalesDetail;
