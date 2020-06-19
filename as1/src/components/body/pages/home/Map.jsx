import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

import MapOnly from './MapOnly';
import iconTree from '../../../../icons/choinka_tmp.png';
import iconTreeP from '../../../../icons/choinka_p_tmp.png'; 

const Place = (props) => {
    let {name, description, address, hovered, type, url} = props.dataItem; //hoverItem
    return <div className={`home_localizations_map_items_item map_container_items_item ${hovered ? "home_localizations_map_items_item--hovered map_container_items_item--hovered" : ""}`} 
            // onMouseEnter={() => hoverItem(true)} //TODO delete fn [temporaryerror solve]
            // onMouseLeave={()=>hoverItem(false)} //TODO delete fn [temporaryerror solve]
            onClick={() => {window.open(url, "_blank")}}
        >
        <div className="home_localizations_map_items_item_data map_container_items_item_data">
            <h3>{name}</h3>
            <p>{address}</p>
            <p>{description}</p>
        </div>
        <div className="home_localizations_map_items_item_img map_container_items_item_img">
            <img src={type[0] === "plant" ? iconTreeP : iconTree} alt="tree_image"/>
        </div>
    </div>;
},
Map = (props) => {
    let {placesList} = props;
    const [state, setState] = useState({
        markers: []
    }),
    hoverItem = (bool, index) => {
        // console.log("//TEST FUNC 1 state.markers");
        // console.log(state.markers);
        //err here

        let markersUpdated = state.markers.forEach((el, i) => {
            if(i === index && el.hovered !== bool){
                el.hovered = bool;
            }
        });
        
        // console.log("//TEST FUNC 2 markersUpdated");
        // console.log(markersUpdated);
        // console.log("//TEST FUNC 2 state.markers");
        // console.log(state.markers);
        setState(prevState => {
            return {...prevState, markers: markersUpdated};
        });
    };

    useEffect(()=>{
        placesList.forEach((el,index) => {
            // el.hoverItem = (bool) => hoverItem(bool, index); //TODO delete fn [temporaryerror solve]
            el.hovered = false;
        });
        // console.log(placesList);
        setState(prevState => {
            return {...prevState, markers: placesList};
        });;
    },[]);

    // console.log("//TEST  MAP state.markers");
    // console.log(state.markers);
    let places = state.markers.map((el,i) => {
        return <Place 
            dataItem={el} 
            key={`${i}_itemek`}
            hoverItem={(bool) => hoverItem(bool, i)} 
        />;
    });

    // console.log("//TEST RETURN state.markers");
    // console.log(state.markers);

    return <div className="home_localizations_map map_container">
      <div className="home_localizations_map_items map_container_items">
          {places}
      </div>
      <div className="home_localizations_map_big map_container_big">
        <MapOnly markers={state.markers} />
      </div>
      </div>;
}

export default Map;