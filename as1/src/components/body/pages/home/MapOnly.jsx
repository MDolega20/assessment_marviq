import React, { } from 'react';
// import PropTypes from 'prop-types';

// import markBest from './../../../../icons/map/marker_6_yellow.svg';
// import markClose from './../../../../icons/map/marker_4.svg';
// import markOpen from './../../../../icons/map/marker_5_green.svg';

import iconTree from '../../../../icons/choinka_min_tmp.png';
import iconTreeP from '../../../../icons/choinka_p_min_tmp.png'; 

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps';

const { compose } = require("recompose");

const styles = require('../../../../styles/map/style.json');

const GoogleMapComponent = compose(
    withScriptjs,
    withGoogleMap
)((props) => (
    <GoogleMap
        defaultZoom={props.zoom}
        defaultCenter={props.mapCenter}
        defaultOptions={{
            disableDefaultUI: true,
            draggable: true,
            keyboardShortcuts: false,
            scaleControl: false,
            scrollwheel: false,
            styles: styles
        }}
    >
        {props.markers.map((el, i) => {
            return (
                <Marker
                    icon={el.type[0] === "plant" ? iconTreeP : iconTree}
                    position={el.position}
                    key={i + "marker"}
                    // onMouseOver={() => el.hoverItem(true)} 
                    // onMouseOut={()=> el.hoverItem(false)}
                    onClick={() => {window.open(el.url, "_blank")}}
                />
            )
        })}
    </GoogleMap>
));


const MapOnly = (props) => {
    let {markers} = props;

    let tmp = {
        count: 0,
        sum: {
            lng: 0,
            lat: 0
        }
    };
    markers.forEach((el,i) => {
        tmp.count++;
        tmp.sum.lng += el.position.lng;
        tmp.sum.lat += el.position.lat;
    });

    

    const center = {
        lat: tmp.sum.lat / tmp.count,
        lng: tmp.sum.lng / tmp.count
        // lat: 54.257744,
        // lng: 18.312994
    },
        zoom = 9,
        apiKey = 'AIzaSyCjPWgHcEWfYWX_G4F9mERnzex9WGAg2T4';
        

    return <div className="map">
        <GoogleMapComponent
            googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" + apiKey}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            mapCenter={center}
            markers={markers}
            zoom={zoom}
        />
    </div>;

}

export default MapOnly;